var queryString = window.location.search;
queryString = queryString.replace("?q=", "")

fetch("https://gougoule.ch/api/search-web/" + queryString).then(responses => responses.json()).then(async data => {
    console.log(data)
    let daNumber = 0
    for(i = 0; i < data.response.length; i++) {
        let result = data.response[i]
        document.getElementById("duckduckgo").innerHTML = document.getElementById("duckduckgo").innerHTML + `<div class="result"><img src="${result.icon}" height="40" width="40" class="result-icon"><h2 class="result-title">${result.title}</h2><a class="result-link" href="${result.url}">${result.url}</a><p class="result-description">${result.description}</p></div>`
    }
});