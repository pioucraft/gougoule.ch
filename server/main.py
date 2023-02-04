from flask import Flask
from duckduckgo_search import ddg
app = Flask(__name__)
@app.route('/api/search/<lang>/<query>')
def getInfo(lang, query):
    results = {}
    results["duckduckgo"] = {}
    results["duckduckgo"] = ddg(query, region=f"ch-{lang}", max_results=15)
    return results




app.run()