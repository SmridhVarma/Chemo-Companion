@echo off
echo ==========================================
echo   Chemo Companion - Unified App Launcher
echo ==========================================
echo.

echo [*] Stopping existing Python processes on Port 8000...
taskkill /F /IM python.exe 2>NUL

echo [*] Starting Backend Server (Port 8000)...
cd backend
start "Chemo Companion Backend" /min venv\Scripts\python.exe -m uvicorn app:app --host 0.0.0.0 --port 8000

echo [*] Waiting for server to initialize...
timeout /t 5 /nobreak >NUL

echo [*] Opening Dashboard...
start http://localhost:8000/app

echo.
echo [DONE] Application is running at http://localhost:8000/app
echo Keep the backend terminal window open to maintain the service.
echo.
pause
