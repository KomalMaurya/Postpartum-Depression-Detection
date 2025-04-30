# File: server/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained Random Forest model
model = joblib.load("random_forest_model.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("📥 Received data:", data)

        input_features = [
            int(data["Irritable towards baby & partner"]),
            int(data["Trouble sleeping at night"]),
            int(data["Feeling sad or Tearful"]),
            int(data["Feeling of guilt"]),
            int(data["Problems of bonding with baby"]),
            int(data["Problems concentrating or making decision"])
        ]

        print("✅ Processed features:", input_features)

        df = pd.DataFrame([input_features], columns=[
            "Irritable towards baby & partner",
            "Trouble sleeping at night",
            "Feeling sad or Tearful",
            "Feeling of guilt",
            "Problems of bonding with baby",
            "Problems concentrating or making decision"
        ])

        prediction = model.predict(df)[0]
        result = "High risk" if prediction == 1 else "Low risk"

        print("🎯 Prediction result:", result)

        return jsonify({"result": result})

    except Exception as e:
        print("❌ Prediction error:", str(e))
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
