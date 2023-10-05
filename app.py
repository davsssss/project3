from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/alex")
def alex():
    return render_template("alex.html")
# @app.route("Insert Route Here")
# @app.route("Insert Route Here")

if __name__ == "__main__":
    app.run(debug=True)