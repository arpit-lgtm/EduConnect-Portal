# MBA NINJA - Maximum Security Build Script

Write-Host ""
Write-Host "MBA NINJA - Maximum Security Build" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean previous build
Write-Host "Step 1: Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next
    Write-Host "Cleaned .next directory" -ForegroundColor Green
}
Write-Host ""

# Step 2: Verify environment
Write-Host "Step 2: Checking environment variables..." -ForegroundColor Yellow
if (Test-Path ".env.local") {
    Write-Host ".env.local found" -ForegroundColor Green
} else {
    Write-Host "WARNING: .env.local not found!" -ForegroundColor Red
    Write-Host "Run: node generate-admin-key.js" -ForegroundColor Yellow
}
Write-Host ""

# Step 3: Check obfuscator
Write-Host "Step 3: Verifying obfuscator packages..." -ForegroundColor Yellow
if (Test-Path "node_modules\webpack-obfuscator") {
    Write-Host "webpack-obfuscator installed" -ForegroundColor Green
} else {
    Write-Host "Installing obfuscator..." -ForegroundColor Red
    npm install --save-dev webpack-obfuscator javascript-obfuscator
}
Write-Host ""

# Step 4: Build with obfuscation
Write-Host "Step 4: Building with MAXIMUM obfuscation..." -ForegroundColor Yellow
Write-Host "This may take 2-3 minutes due to aggressive obfuscation..." -ForegroundColor Gray
Write-Host ""

$env:NODE_ENV = "production"
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "BUILD SUCCESSFUL!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Security Features Enabled:" -ForegroundColor Cyan
    Write-Host "- JS files obfuscated with RC4 encryption" -ForegroundColor White
    Write-Host "- Variable names mangled (unreadable)" -ForegroundColor White
    Write-Host "- Control flow flattened (confusing logic)" -ForegroundColor White
    Write-Host "- Dead code injected (fake code)" -ForegroundColor White
    Write-Host "- Strings encrypted and rotated" -ForegroundColor White
    Write-Host "- Self-defending code (anti-formatting)" -ForegroundColor White
    Write-Host "- CSS minified" -ForegroundColor White
    Write-Host "- HTML optimized" -ForegroundColor White
    Write-Host "- Source maps disabled" -ForegroundColor White
    Write-Host "- Console logs removed" -ForegroundColor White
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Run: npm start" -ForegroundColor White
    Write-Host "2. Open: http://localhost:3000" -ForegroundColor White
    Write-Host "3. Press F12 and check Sources tab" -ForegroundColor White
    Write-Host "4. Try to read university-matcher.js or comprehensive.js" -ForegroundColor White
    Write-Host "5. Code should be COMPLETELY UNREADABLE!" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "BUILD FAILED!" -ForegroundColor Red
    Write-Host "Check the error messages above" -ForegroundColor Yellow
    Write-Host ""
}
