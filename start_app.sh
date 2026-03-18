#!/bin/bash
echo "=========================================="
echo "  Chemo Companion - Unified App Launcher"
echo "=========================================="
echo ""

echo "[*] Stopping existing processes on Port 8000..."
# Try to kill processes on port 8000
lsof -ti:8000 | xargs kill -9 2>/dev/null || true

echo "[*] Starting Backend Server (Port 8000)..."
cd backend
source venv/bin/activate
python -m uvicorn app:app --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
cd ..

echo "[*] Waiting for server to initialize..."
sleep 5

echo "[*] Opening Dashboard..."
if command -v xdg-open > /dev/null; then
  xdg-open http://localhost:8000/app
elif command -v open > /dev/null; then
  open http://localhost:8000/app
else
  echo "Please open http://localhost:8000/app in your browser."
fi

echo ""
echo "[DONE] Application is running at http://localhost:8000/app"
echo "Keep this terminal window open to maintain the service."
echo "Press Ctrl+C to stop the server."
echo ""

# Wait for backend process to finish (which keeps the script running until Ctrl+C)
wait $BACKEND_PID
