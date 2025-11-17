# Generate Admin Secret Key for MBA NINJA

Write-Host "🔐 Generating Admin Secret Key..." -ForegroundColor Cyan
Write-Host ""

# Generate a secure random 32-byte key and convert to base64
$bytes = New-Object byte[] 32
$rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$rng.GetBytes($bytes)
$secretKey = [Convert]::ToBase64String($bytes)

Write-Host "✅ Generated Secret Key:" -ForegroundColor Green
Write-Host ""
Write-Host $secretKey -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 Add this to your .env.local file:" -ForegroundColor Cyan
Write-Host "ADMIN_SECRET_KEY=$secretKey" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  IMPORTANT:" -ForegroundColor Yellow
Write-Host "- Keep this key SECRET and SAFE!" -ForegroundColor White
Write-Host "- Never commit .env.local to Git" -ForegroundColor White
Write-Host "- Use this key in Authorization header for admin endpoints" -ForegroundColor White
Write-Host "- Generate a DIFFERENT key for production" -ForegroundColor White
Write-Host ""

