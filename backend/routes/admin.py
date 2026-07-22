from flask import Blueprint, jsonify

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/admin/data', methods=['GET'])
def get_admin_data():
    return jsonify({
        "crops": [
            "wheat", "rice", "cotton", "maize", "sugarcane", "soybean", "barley", "millet",
            "sorghum", "mustard", "groundnut", "chickpea", "pigeon pea", "lentil", "pea",
            "potato", "tomato", "onion", "brinjal", "cabbage", "cauliflower", "carrot",
            "spinach", "okra", "chili", "garlic", "pumpkin", "bottle gourd", "bitter gourd",
            "banana", "mango", "papaya", "grapes", "apple", "guava", "pomegranate", "orange"
        ],
        "pests": [
            "aphid", "bollworm", "stem borer", "armyworm", "whitefly", "cutworm", "thrips",
            "leafhopper", "fruit borer", "mites", "mealybug", "shoot borer", "weevil", "nematode"
        ],
        "pesticides": [
            {"crop": "wheat", "pest": "aphid", "pesticide": "Imidacloprid", "dosage": "20 ml/acre"},
            {"crop": "cotton", "pest": "bollworm", "pesticide": "Spinosad", "dosage": "75 ml/acre"},
            {"crop": "rice", "pest": "stem borer", "pesticide": "Chlorantraniliprole", "dosage": "30 ml/acre"},
            {"crop": "maize", "pest": "armyworm", "pesticide": "Lambda-cyhalothrin", "dosage": "25 ml/acre"},
            {"crop": "sugarcane", "pest": "whitefly", "pesticide": "Acephate", "dosage": "100 g/acre"},
            {"crop": "soybean", "pest": "cutworm", "pesticide": "Cypermethrin", "dosage": "60 ml/acre"},
            {"crop": "tomato", "pest": "fruit borer", "pesticide": "Indoxacarb", "dosage": "50 ml/acre"},
            {"crop": "brinjal", "pest": "shoot borer", "pesticide": "Flubendiamide", "dosage": "40 ml/acre"},
            {"crop": "potato", "pest": "aphid", "pesticide": "Dimethoate", "dosage": "400 ml/acre"},
            {"crop": "onion", "pest": "thrips", "pesticide": "Spinetoram", "dosage": "50 ml/acre"},
            {"crop": "chili", "pest": "mites", "pesticide": "Propargite", "dosage": "300 ml/acre"},
            {"crop": "banana", "pest": "weevil", "pesticide": "Chlorpyrifos", "dosage": "1 L/acre"},
            {"crop": "apple", "pest": "leafhopper", "pesticide": "Malathion", "dosage": "200 ml/acre"}
        ]
    })
