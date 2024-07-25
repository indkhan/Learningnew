from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

calculations = []

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    num1 = data['num1']
    num2 = data['num2']
    result = num1 + num2
    calculations.append(f'{num1} + {num2} = {result}')
    return jsonify({'result': result})

@app.route('/calculations', methods=['GET'])
def get_calculations():
    return jsonify(calculations)

if __name__ == '__main__':
    app.run(debug=True)
