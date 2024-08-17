from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/update", methods=["POST"])
def update():
    data = request.form.get("data")
    response = f"Data received: {data}"
    return jsonify({"message": response})


if __name__ == "__main__":
    app.run(debug=True)
