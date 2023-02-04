from flask import Flask
from duckduckgo_search import ddg
import waitress
app = Flask(__name__)
@app.route('/api/search/<lang>/<query>')
def getInfo(lang, query):
    results = {}
    results["duckduckgo"] = {}
    results["duckduckgo"] = ddg(query, region=f"ch-{lang}", max_results=15)
    return results




if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=5000)