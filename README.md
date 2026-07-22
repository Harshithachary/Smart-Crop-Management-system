# AgriPredict AI 🌱

AgriPredict AI is a modern, intelligence-driven web application that provides precise pesticide and dosage recommendations based on specific agricultural parameters. Built with a React frontend and a Python Flask backend.

## Features
- **Intelligent Analysis**: Recommends the optimal pesticide compound and application dosage by evaluating four mathematical constraints: Target Crop, Identified Pest, Soil Composition, and Local Temperature.
- **Modern SaaS Aesthetics**: A fully-responsive, glassmorphic UI built with pure CSS grids, featuring a custom light-theme design system.
- **Multi-Page Architecture**: Structured elegantly with `react-router-dom`, incorporating dedicated pages for the Predictive Dashboard, How It Works, and Contact.
- **Real-Time Feedback**: Smooth UX with CSS loaders and dynamic result panels.

## Tech Stack
- **Frontend**: React.js, React Router DOM, strict Vanilla CSS.
- **Backend**: Python Flask RESTful API.
- **Predictive Engine**: Custom mathematical analytic models.

## Local Development Setup

### 1. Backend Server
Navigate to the `backend/` directory and run:
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python app.py
```
*The Flask server will start on `http://127.0.0.1:5001`.*

### 2. Frontend Server
Navigate to the `frontend/` directory and run:
```bash
npm install
npm start
```
*The React development server will start on `http://localhost:3000` and automatically proxy API requests to the Python backend.*

