from flask import Flask, render_template
from flask_cors import CORS
from routes.predict import predict_bp
from routes.upload import upload_bp
from routes.admin import admin_bp

app = Flask(__name__)
CORS(app)  # <-- after app creation

app.register_blueprint(predict_bp)
app.register_blueprint(upload_bp)
app.register_blueprint(admin_bp)

@app.route('/')
def index():
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
