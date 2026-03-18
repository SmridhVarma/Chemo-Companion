# 🎗️ Chemo Companion

Chemo Companion is a comprehensive, RAG-powered oncology knowledge assistant designed to support patients undergoing chemotherapy. It acts as a unified platform that combines clinical symptom tracking, AI-powered multi-agent chat, peer matching, and clinical report generation.

## ✨ Features

- **AI-Powered Oncology Assistant**: Multi-agent chat pipeline (using Gemini) that pulls verified knowledge to answer patient questions securely.
- **Symptom Logging & Tracking**: Keep track of daily symptoms, severity, and context.
- **Peer Matching**: Connect with patients experiencing similar recovery trajectories using knowledge graph traversals.
- **AAC Activity Recommendations**: Get personalized alternative and augmentative communication activities based on recovery scores (RMSSD).
- **Clinical Report Generation**: Generate comprehensive PDF reports summarizing patient health, symptoms, and AI insights.
- **Audio Transcription**: Built-in voice input capabilities via MerLION for accessible interactions.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, shadcn/ui, Recharts.
- **Backend**: Python 3.12, FastAPI, Uvicorn.
- **AI & RAG**: Google Gemini API, MerLION API, ChromaDB, custom GraphRAG implementation.
- **Database**: Supabase.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine. We provide automated setup scripts for both Windows and macOS/Linux.

### Prerequisites

- **Git**
- **Node.js** (v16 or higher)
- **Python** (3.10 to 3.12)
- Your personal **Gemini API Key**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Innovation_Challenge.git
cd Innovation_Challenge
```

### 2. Automated Setup

We have provided automated scripts to make the setup process completely seamless.

#### macOS & Linux (Bash)
Make the script executable (if it isn't already) and run it:
```bash
chmod +x setup.sh
./setup.sh
```

#### Windows (PowerShell / Command Prompt)
Double-click the `setup.bat` file in the project root, or run it from your terminal:
```cmd
.\setup.bat
```

**What the setup scripts do:**
1. Installs frontend dependencies (`npm install`) and builds the React application.
2. Creates an isolated Python virtual environment (`venv`) and installs backend dependencies.
3. Automatically creates a `.env` file, populates it with the free-tier Supabase credentials, and prompts you securely in the terminal for your **Gemini API Key** (and optionally MerLION API Key).

### 3. Launching the App

Once the setup is complete, you can start the application at any time using the start script for your OS.

#### macOS & Linux (Bash)
Make the start script executable and run it:
```bash
chmod +x start_app.sh
./start_app.sh
```

#### Windows (PowerShell / Command Prompt)
Double-click `start_app.bat` or run:
```cmd
.\start_app.bat
```

These scripts will:
- Spin up the FastAPI backend on Port 8000 using the virtual environment.
- Automatically launch your default web browser and open the dashboard at `http://localhost:8000/app`.

> **Note:** Keep the terminal window open to maintain the backend service. Close the window or press `Ctrl+C` to stop the server.

---

## 📂 Project Structure

- `/backend/` - Contains the FastAPI server, agent pipeline logic, graph building modules, and vector database integrations.
- `/frontend_from_figma/` - The React application, housing the UI components, dashboards, and assets.
- `setup.bat` / `setup.sh` - Automated installation and environment configuration scripts.
- `start_app.bat` / `start_app.sh` - Launcher scripts that run the unified application.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is submitted as part of the NUS Innovation Challenge.
