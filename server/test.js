const DDG = require("duck-duck-scrape")

async function search(query){
    const searchResults = await DDG.search(query, {
      safeSearch: DDG.SafeSearchType.STRICT
    });
}