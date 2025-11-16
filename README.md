# 🏥 Insurance Premium Prediction API

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://insurance-prediction-api.vercel.app/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python)](https://www.python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A full-stack machine learning application that predicts insurance premium categories based on user demographics, lifestyle factors, and occupation. Built with FastAPI backend and React frontend, deployed on Vercel for seamless scalability and performance.

## 🌐 Live Application

**Access the application here:** [https://insurance-prediction-api.vercel.app/](https://insurance-prediction-api.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Directory Structure](#directory-structure)
- [Installation & Setup](#installation--setup)
- [API Documentation](#api-documentation)
- [Model Information](#model-information)
- [Docker Deployment](#docker-deployment)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## 🎯 Overview

This project implements an end-to-end machine learning solution for insurance premium prediction. The system analyzes various user attributes including age, BMI, lifestyle risks, income, occupation, and location to predict appropriate insurance premium categories. The application features a modern, responsive frontend built with React and TypeScript, backed by a robust FastAPI REST API serving machine learning predictions.

## ✨ Features

- **Real-time Predictions**: Instant insurance premium category predictions
- **Smart Feature Engineering**: Automated calculation of BMI, age groups, lifestyle risk scores, and city tier classifications
- **Probability Distribution**: Confidence scores and class-wise probability distributions for predictions
- **Responsive UI**: Modern, mobile-friendly interface built with React and Tailwind CSS
- **RESTful API**: Well-documented FastAPI endpoints with automatic Swagger documentation
- **Health Monitoring**: Built-in health check endpoint for API status monitoring
- **CORS Support**: Cross-Origin Resource Sharing enabled for seamless frontend-backend communication
- **Docker Support**: Containerized application for easy deployment
- **Type Safety**: Pydantic models for request/response validation and TypeScript for frontend type safety

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern, fast web framework for building APIs
- **Python 3.11** - Core programming language
- **Scikit-learn 1.6.1** - Machine learning model implementation
- **Pandas** - Data manipulation and preprocessing
- **Pydantic** - Data validation and settings management
- **Uvicorn** - ASGI server for FastAPI

### Frontend
- **React 19.2.0** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 7.2.2** - Build tool and development server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **ESLint** - Code linting and quality

### DevOps & Deployment
- **Docker** - Containerization
- **Vercel** - Cloud deployment platform
- **Git** - Version control

## 🏗️ Project Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│                 │         │                  │         │                 │
│  React Frontend │ ◄─────► │   FastAPI        │ ◄─────► │  ML Model       │
│  (TypeScript)   │  HTTP   │   Backend        │  Pickle │  (Scikit-learn) │
│                 │         │                  │         │                 │
└─────────────────┘         └──────────────────┘         └─────────────────┘
       │                            │                            │
       │                            │                            │
       ▼                            ▼                            ▼
  Tailwind CSS              Pydantic Schema              Pandas DataFrame
  Vite Build                CORS Middleware              Feature Engineering
```

## 📁 Directory Structure

```
Insurance_prediction_api/Project/
│
├── 📁 Data/                          # Dataset storage
│   └── insurance.csv                 # Training dataset
│
├── 📁 Model/                         # Machine learning model
│   ├── model.pkl                     # Trained model (pickled)
│   └── predict.py                    # Prediction logic and utilities
│
├── 📁 Schema/                        # Pydantic models
│   ├── user_input.py                 # Input validation schema with computed fields
│   └── prediction_response.py        # Response model for predictions
│
├── 📁 config/                        # Configuration files
│   └── city_tier.py                  # City tier classification (Tier 1, 2, 3)
│
├── 📁 Notebook/                      # Jupyter notebooks
│   └── fastapi_ml_model.ipynb        # Model training and experimentation
│
├── 📁 insurance-frontend/            # React TypeScript frontend
│   ├── 📁 src/                       # Source files
│   │   ├── components/               # React components
│   │   ├── hooks/                    # Custom React hooks
│   │   └── utils/                    # Utility functions
│   ├── 📁 public/                    # Static assets
│   ├── index.html                    # Entry HTML file
│   ├── vite.config.ts                # Vite configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── package.json                  # Frontend dependencies
│   └── tailwind.config.js            # Tailwind CSS configuration
│
├── app.py                            # FastAPI application entry point
├── requirements.txt                  # Python dependencies
├── Dockerfile                        # Docker container configuration
├── package.json                      # Root-level Node.js dependencies
└── README.md                         # Project documentation (this file)
```

### Key Components Explained

#### Backend Components

- **`app.py`**: Main FastAPI application with route definitions, CORS middleware, and endpoint handlers
- **`Model/predict.py`**: Contains model loading, prediction logic, and probability calculation functions
- **`Schema/user_input.py`**: Defines input validation with computed fields for:
  - BMI calculation (weight/height²)
  - Age group classification (young/adult/middle_aged/senior)
  - Lifestyle risk scoring (high/medium/low based on smoking and BMI)
  - City tier assignment (1/2/3 based on city name)
- **`config/city_tier.py`**: Maps Indian cities to tier classifications

#### Frontend Components

- **React Components**: Reusable UI components with TypeScript interfaces
- **Vite**: Lightning-fast development server and optimized production builds
- **Tailwind CSS**: Utility-first styling for responsive design

## 🚀 Installation & Setup

### Prerequisites

- Python 3.11 or higher
- Node.js 18+ and npm
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Insurance_prediction_api/Project
   ```

2. **Create and activate virtual environment**
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # Linux/Mac
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server**
   ```bash
   uvicorn app:app --reload
   ```

   The API will be available at `http://localhost:8000`

5. **Access API documentation**
   - Swagger UI: `http://localhost:8000/docs`
   - ReDoc: `http://localhost:8000/redoc`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd insurance-frontend
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📡 API Documentation

### Base URL
- **Production**: `https://insurance-prediction-api.vercel.app`
- **Local Development**: `http://localhost:8000`

### Endpoints

#### 1. Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "version": "1.0.0",
  "model_loaded": true
}
```

#### 2. Home
```http
GET /
```

**Response:**
```json
{
  "message": "Insurance Premium Prediction API"
}
```

#### 3. Predict Premium
```http
POST /predict
```

**Request Body:**
```json
{
  "age": 35,
  "weight": 75.5,
  "height": 1.75,
  "income_lpa": 8.5,
  "smoker": false,
  "city": "Mumbai",
  "occupation": "private_job"
}
```

**Validation Rules:**
- `age`: Integer between 1 and 119
- `weight`: Positive float (kg)
- `height`: Float between 0 and 2.5 (meters)
- `income_lpa`: Positive float (Lakhs per annum)
- `smoker`: Boolean
- `city`: String (city name)
- `occupation`: One of: `retired`, `freelancer`, `student`, `government_job`, `business_owner`, `unemployed`, `private_job`

**Response:**
```json
{
  "predicted_category": "medium",
  "confidence": 0.8543,
  "class_probabilities": {
    "low": 0.0821,
    "medium": 0.8543,
    "high": 0.0636
  }
}
```

**Computed Fields (Automatic):**
- `bmi`: Calculated as weight/(height²)
- `age_group`: Derived from age (young/adult/middle_aged/senior)
- `lifestyle_risk`: Calculated based on smoker status and BMI
- `city_tier`: Assigned based on city (1/2/3)

## 🤖 Model Information

### Model Type
- **Algorithm**: Classification (Scikit-learn based)
- **Version**: 1.0.0
- **Format**: Pickle (.pkl)

### Features Used
1. **BMI** (Body Mass Index)
2. **Age Group** (Categorical)
3. **Lifestyle Risk** (High/Medium/Low)
4. **City Tier** (1/2/3)
5. **Income LPA** (Lakhs per annum)
6. **Occupation** (Categorical)

### Target Variable
- **Premium Category**: Classification into low, medium, or high premium categories

### Model Training
The model was trained using historical insurance data with feature engineering to create meaningful predictors. Training code and experimentation can be found in `Notebook/fastapi_ml_model.ipynb`.

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t insurance-prediction-api .
```

### Run Docker Container
```bash
docker run -p 8000:8000 insurance-prediction-api
```

### Docker Configuration
The Dockerfile uses Python 3.11-slim base image with optimized dependency installation and exposes port 8000 for the FastAPI application.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow PEP 8 for Python code
- Use ESLint configuration for TypeScript/React code
- Add type hints to Python functions
- Write descriptive commit messages

## 🙏 Acknowledgments

This project was developed with guidance and inspiration from:

**[CampusX Official](https://github.com/campusx-official)**

Special thanks to the CampusX team for their excellent tutorials and guidance on building production-ready machine learning applications. Their comprehensive courses on FastAPI, React, and ML deployment were instrumental in this project's development.

### Additional Credits
- FastAPI framework by Sebastián Ramírez
- Scikit-learn community
- React and TypeScript communities
- Vercel for hosting platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact & Support

For questions, issues, or suggestions:
- Create an issue in the repository
- Visit the [live application](https://insurance-prediction-api.vercel.app/)

---

**Built with ❤️ using FastAPI, React, and Machine Learning**

*Last Updated: November 2025*
