
import pickle
import pandas as pd


# LOADING the model from data folder by pickle 
with open("Model/model.pkl" ,'rb') as f:
    model=pickle.load(f) 

MODEL_VERSION= '1.0.0'


class_labels=model.classes_.tolist()

def predict_output(user_input : dict):

    df=pd.DataFrame([user_input])
    predicted_class=model.predict(df)[0]
    
    probabilities = model.predict_proba(df)[0]
    confidence = max(probabilities)

    class_probs = {
        label: round(prob, 4)
        for label, prob in zip(class_labels, probabilities)
    }


    return {
        "predicted_category":predicted_class,
        "confidence": round(confidence , 4), 
        "class_probabilities": class_probs

    }






