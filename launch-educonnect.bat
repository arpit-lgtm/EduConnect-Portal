@echo off
echo 🎓 Starting Educonnect Development Server...
echo.
cd /d "%~dp0"
start "Educonnect Server" cmd /k "node server.js"
timeout /t 2 /nobreak >nul
start chrome "http://localhost:3000"
echo.
echo ✅ Server started and browser opened!
echo 📱 Access your site at: http://localhost:3000
echo.
pause