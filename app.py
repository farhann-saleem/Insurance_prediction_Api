from fastapi import FastAPI
from fastapi.responses import JSONResponse
from Schema.prediction_response import PredictionResponse
from fastapi.middleware.cors import CORSMiddleware
from Schema.user_input import User_input
from Model.predict import predict_output , model , MODEL_VERSION


app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev it's okay, later you can restrict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message":"Insurance Premium Prediction API"}


@app.get("/health")
def health_check():
    return {
        "status":"OK",
        "version":MODEL_VERSION ,
        "model_loaded":model is not None
    }


@app.post('/predict', response_model=PredictionResponse)
def predict_premium(data: User_input):

    user_input ={
        'bmi': data.bmi,
        'age_group': data.age_group,
        "lifestyle_risk": data.lifestyle_risk,
        "city_tier": data.city_tier,
        "income_lpa": data.income_lpa,
        "occupation": data.occupation
    }
    # [feature_order] # <--- Enforce column order here
    try:
        prediction = predict_output(user_input)

        return JSONResponse(status_code=200, content=prediction)
    
    except Exception as e :
        return JSONResponse(status_code=500 , content=str(e))