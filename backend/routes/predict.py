from flask import Blueprint, request, jsonify
from models.pesticide_predictor import predict_pesticide

predict_bp = Blueprint('predict', __name__)

@predict_bp.route('/predict', methods=['POST'])
def predict():
    data = request.json
    crop = data.get("crop")
    pest = data.get("pest")
    weather = data.get("weather", {})
    soil = data.get("soil", "")
    result = predict_pesticide(crop, pest, weather, soil)
    return jsonify(result)