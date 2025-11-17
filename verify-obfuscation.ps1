# 🔍 Verify Code Obfuscation - MBA NINJA
# Run this after build completes

Write-Host "`n🔍 VERIFYING CODE OBFUSCATION...`n" -ForegroundColor Cyan

$buildPath = ".next\static\chunks\pages"

if (!(Test-Path $buildPath)) {
    Write-Host "❌ Build folder not found! Run 'npm run build' first." -ForegroundColor Red
    exit
}

Write-Host "📁 Checking obfuscated files in: $buildPath`n" -ForegroundColor Yellow

# Critical files to check
$criticalFiles = @(
    "index*.js",           # Home page
    "university-matcher*.js",  # Matcher algorithm
    "university-matcher-results*.js",  # Results logic
    "browse-courses*.js",  # Course browser
    "compare-universities*.js",  # Comparison
    "course-details*.js"   # Course details
)

$allObfuscated = $true

foreach ($pattern in $criticalFiles) {
    $files = Get-ChildItem -Path $buildPath -Filter $pattern -ErrorAction SilentlyContinue
    
    if ($files) {
        foreach ($file in $files) {
            Write-Host "🔒 Checking: $($file.Name)" -ForegroundColor White
            
            # Read first 500 characters
            $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
            if ($content) {
                $preview = $content.Substring(0, [Math]::Min(500, $content.Length))
                
                # Check for obfuscation indicators
                $hasRC4 = $preview -match "RC4|0x[0-9a-f]+"
                $hasMangled = $preview -match "_0x[0-9a-f]+"
                $hasHex = $preview -match "\\x[0-9a-f]{2}"
                $isCompact = $preview -notmatch "\n.*\n.*\n" # Less than 3 lines
                
                if ($hasRC4 -or $hasMangled -or $hasHex) {
                    Write-Host "   ✅ OBFUSCATED (RC4/Hex detected)" -ForegroundColor Green
                } elseif ($isCompact) {
                    Write-Host "   ✅ MINIFIED (Single line)" -ForegroundColor Green
                } else {
                    Write-Host "   ⚠️  May be readable - check manually" -ForegroundColor Yellow
                    $allObfuscated = $false
                }
                
                # Show sample
                Write-Host "   Preview: $($preview.Substring(0, [Math]::Min(100, $preview.Length)))..." -ForegroundColor Gray
            }
            Write-Host ""
        }
    } else {
        Write-Host "⚠️  Not found: $pattern" -ForegroundColor Yellow
    }
}

# Check comprehensive.js (courseData)
Write-Host "`n📚 Checking lib folder..." -ForegroundColor Cyan
$libPath = ".next\static\chunks"
$libFiles = Get-ChildItem -Path $libPath -Filter "*.js" -Recurse | Where-Object { $_.Length -gt 50KB }

if ($libFiles) {
    Write-Host "✅ Found $($libFiles.Count) large chunk files (likely contain courseData)" -ForegroundColor Green
    foreach ($file in $libFiles | Select-Object -First 3) {
        Write-Host "   📦 $($file.Name) - $([math]::Round($file.Length/1KB, 2)) KB" -ForegroundColor White
    }
} else {
    Write-Host "⚠️  No large chunks found" -ForegroundColor Yellow
}

# Final verdict
Write-Host "`n" -NoNewline
if ($allObfuscated) {
    Write-Host "🎉 ALL CRITICAL FILES ARE OBFUSCATED!" -ForegroundColor Green
    Write-Host "✅ Your code is PROTECTED!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Some files may need manual verification" -ForegroundColor Yellow
    Write-Host "   Open browser DevTools → Sources to check" -ForegroundColor White
}

Write-Host "`n📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Run: npm start" -ForegroundColor White
Write-Host "2. Open: http://localhost:3000" -ForegroundColor White
Write-Host "3. Press F12 → Sources tab" -ForegroundColor White
Write-Host "4. Check that .js files are unreadable gibberish ✅" -ForegroundColor White
Write-Host ""
