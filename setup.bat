@echo off
setlocal enabledelayedexpansion

echo ==========================================
echo   Chemo Companion - First Time Setup
echo ==========================================
echo.

echo [*] Building Frontend...
cd frontend_from_figma
call npm install
call npm run build
cd ..

echo.
echo [*] Setting up Backend Virtual Environment...
cd backend
python -m venv venv
call venv\Scripts\pip install -r requirements.txt
cd ..

echo.
echo [*] Configuring Environment Variables...
if exist .env (
    echo .env file already exists. Skipping environment variable setup.
    goto end_env
)

echo Creating new .env file...
echo # Environment Variables > .env
echo SUPABASE_URL=https://dsflncqaqcmakeluuokr.supabase.co >> .env
echo SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZmxuY3FhcWNtYWtlbHV1b2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwODUyNjgsImV4cCI6MjA4NjY2MTI2OH0.I7Hh7mqu5sjv_JfmsG9ktikrcn2DlRGutnQQz_v4r_g >> .env

set /p GEMINI_KEY="Please enter your GEMINI_API_KEY: "
echo GEMINI_API_KEY=!GEMINI_KEY! >> .env

set /p MERLION_KEY="Please enter your MERLION_API_KEY (optional, press Enter to skip): "
if not "!MERLION_KEY!"=="" (
    echo MERLION_API_KEY=!MERLION_KEY! >> .env
)
echo Environment variables configured successfully!

:end_env
echo.
echo ==========================================
echo   Setup Complete!
echo   You can now double-click start_app.bat
echo   to launch the application.
echo ==========================================
pause
