import pickle
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load the trained LightGBM model
model_filename = "finalized_model.sav"
model = pickle.load(open(model_filename, "rb"))

# Define API endpoint for prediction
@app.route("/predict", methods=["POST"])
@cross_origin(supports_credentials=True)
def predict():
    try:
        # Get input data from JSON
        data = request.json
        features = np.array(data["features"]).reshape(1, -1)  
        # Make prediction
        prediction = model.predict(features)

        # Return result as JSON
        return jsonify({"prediction": prediction.tolist()})

    except Exception as e:
        return jsonify({"error": str(e)})

# Run Flask app
if __name__ == "__main__":
    app.run(port=8000, debug=True)
