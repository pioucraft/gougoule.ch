let queryString = window.location.search;
queryString = queryString.replace("?q=", "")
console.log(queryString)
console.log(queryString)

function search() {
    fetch("http://127.0.0.1:3000/api/duckduckgo/" + queryString).then(responses => responses.json()).then(function(data){

        for(i = 0; i <= 14; i++) {
        document.getElementById("title_" + (i + 1)).innerHTML = data["results"][i]["title"];
        document.getElementById("href_" + (i + 1)).innerHTML = data["results"][i]["url"];
        document.getElementById("description_" + (i + 1)).innerHTML = data["results"][i]["description"];
        document.getElementById("href_" + (i + 1)).setAttribute("href", data["results"][i]["url"]);
        }
    });
}

function indexhtml() {
    window.location.href = "index.html";
}

function openpage() {
    value = document.getElementById("search").value;
    window.location.href = "search.html?q=" + value;
}
