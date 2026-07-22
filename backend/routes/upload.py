from flask import Blueprint, request, jsonify
from models.pest_classifier import classify_pest

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/upload-image', methods=['POST'])
def upload_image():
    file = request.files['image']
    label = classify_pest(file)
    return jsonify({"pest": label})