from googlesearch import search
from flask import Flask
import wikipedia
app = Flask(__name__)
@app.route('/api/search/<lang>/<query>')
def getInfo(lang, query):
    result = {}
    result["google"] = {}
    result["wikipedia"] = {}
    for i in search(query, tld="com", num=10, stop=10, lang=lang, safe="off"):
        result["google"][len(result["google"])] = {}
        result["google"][len(result["google"]) - 1]["url"] = i
    try:
        wikipedia.set_lang(lang)
        result["wikipedia"]["summary"] = wikipedia.summary(wikipedia.suggest(query), sentences=3)
        result["wikipedia"]["url"] = str(wikipedia.page(wikipedia.suggest(query)).url)
    except:
        result["wikipedia"]["summary"] = None
        result["wikipedia"]["url"] = None
    return result




app.run()