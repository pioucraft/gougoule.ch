from duckduckgo_search import ddg
from flask import Flask


app = Flask(__name__)
@app.route('/api/search/<lang>/<query>')
def getInfo(lang, query):
    r = ddg(query, region=f"ch-{lang}", max_results=15)
    return r

app.run()