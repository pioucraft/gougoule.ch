from flask import Flask
from duckduckgo_search import ddg
from flask_cors import CORS
import json
import datetime
import os

os.chdir(r"/home/emmanuel_macron/Documents/programinc/gougoule.ch/server/")
app = Flask(__name__)
CORS(app)


@app.route('/api/search/<lang>/<query>')
def search(lang, query):
    query = query.replace("+", " ")
    results = {}
    results["duckduckgo"] = {}
    results["duckduckgo"] = ddg(query, region=f"{lang}", max_results=15)
    return results

@app.route('/api/post-message/<token>/<group>/<message>', methods = ['POST'])
def post_message(token, group, message):
    with open("data.json", "r") as f:
        data = json.load(f)
    messagenb = len(data["groups"][group]["messages"])
    data["messages"]["groups"][group]["messages"][messagenb] = {}
    data["messages"]["groups"][group]["messages"][messagenb]["content"] = message
    result = {}
    with open("data.json", "w") as f:
        json.dump(data, f, indent=4)
    result["response"] = 200
    return result



if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=5000)