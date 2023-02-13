from flask import Flask
from duckduckgo_search import ddg
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/<lang>/<query>')
def search(lang, query):
    query = query.replace("+", " ")
    results = {}
    results["duckduckgo"] = {}
    results["duckduckgo"] = ddg(query, region=f"{lang}", max_results=15)
    return results




if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=5000)