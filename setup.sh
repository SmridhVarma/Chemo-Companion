#!/bin/bash
set -e

echo "=========================================="
echo "  Chemo Companion - First Time Setup"
echo "=========================================="
echo ""

echo "[*] Building Frontend..."
cd frontend_from_figma
npm install
npm run build
cd ..

echo ""
echo "[*] Setting up Backend Virtual Environment..."
cd backend
# Use python3 if available, else python
PYTHON_CMD="python3"
if ! command -v $PYTHON_CMD >/dev/null 2>&1; then
    PYTHON_CMD="python"
fi
$PYTHON_CMD -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..

echo ""
echo "[*] Configuring Environment Variables..."
if [ -f ".env" ]; then
    echo ".env file already exists. Skipping environment variable setup."
else
    echo "Creating new .env file..."
    echo "# Environment Variables" > .env
    echo "SUPABASE_URL=https://dsflncqaqcmakeluuokr.supabase.co" >> .env
    echo "SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzZmxuY3FhcWNtYWtlbHV1b2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwODUyNjgsImV4cCI6MjA4NjY2MTI2OH0.I7Hh7mqu5sjv_JfmsG9ktikrcn2DlRGutnQQz_v4r_g" >> .env

    read -p "Please enter your GEMINI_API_KEY: " GEMINI_KEY
    echo "GEMINI_API_KEY=$GEMINI_KEY" >> .env

    read -p "Please enter your MERLION_API_KEY (optional, press Enter to skip): " MERLION_KEY
    if [ ! -z "$MERLION_KEY" ]; then
        echo "MERLION_API_KEY=$MERLION_KEY" >> .env
    fi
    echo "Environment variables configured successfully!"
fi

echo ""
echo "=========================================="
echo "  Setup Complete!"
echo "  You can now run ./start_app.sh"
echo "  to launch the application."
echo "=========================================="
