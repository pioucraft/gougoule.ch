//bonjour personne qui regarde mon code source, n'ayez pas peur de voir que je ne sais pas coder en javascript, sachez juste que je ne vais jamais apprendre ce language car simple raison: je n'ai pas besoin de me justifier je pense

let queryString = window.location.search;
queryString = queryString.replace("?q=", "")
for (let i = 0; i <= queryString.lenght; i++) {
    queryString = queryString.replace("+", " ")
    queryString = queryString.replace("%2B", "+")
}
fetch("http://127.0.0.1:3000/api/search/" + queryString).then(responses => responses.json()).then(function(data){
    console.log(data)


    document.getElementById("title_1").innerHTML = data["results"]["0"]["title"];
    document.getElementById("href_1").innerHTML = data["results"]["0"]["url"];
    document.getElementById("description_1").innerHTML = data["results"]["0"]["description"];
    document.getElementById("href_1").setAttribute("href", data["results"]["0"]["url"]);

    document.getElementById("title_2").innerHTML = data["results"]["1"]["title"];
    document.getElementById("href_2").innerHTML = data["results"]["1"]["url"];
    document.getElementById("description_2").innerHTML = data["results"]["1"]["description"];
    document.getElementById("href_2").setAttribute("href", data["results"]["1"]["url"]);

    document.getElementById("title_3").innerHTML = data["results"]["2"]["title"];
    document.getElementById("href_3").innerHTML = data["results"]["2"]["url"];
    document.getElementById("description_3").innerHTML = data["results"]["2"]["description"];
    document.getElementById("href_3").setAttribute("href", data["results"]["2"]["url"]);

    document.getElementById("title_4").innerHTML = data["results"]["3"]["title"];
    document.getElementById("href_4").innerHTML = data["results"]["3"]["url"];
    document.getElementById("description_4").innerHTML = data["results"]["3"]["description"];
    document.getElementById("href_4").setAttribute("href", data["results"]["3"]["url"]);

    document.getElementById("title_5").innerHTML = data["results"]["4"]["title"];
    document.getElementById("href_5").innerHTML = data["results"]["4"]["url"];
    document.getElementById("description_5").innerHTML = data["results"]["4"]["description"];
    document.getElementById("href_5").setAttribute("href", data["results"]["4"]["url"]);

    document.getElementById("title_6").innerHTML = data["results"]["5"]["title"];
    document.getElementById("href_6").innerHTML = data["results"]["5"]["url"];
    document.getElementById("description_6").innerHTML = data["results"]["5"]["description"];
    document.getElementById("href_6").setAttribute("href", data["results"]["5"]["url"]);

    document.getElementById("title_7").innerHTML = data["results"]["6"]["title"];
    document.getElementById("href_7").innerHTML = data["results"]["6"]["url"];
    document.getElementById("description_7").innerHTML = data["results"]["6"]["description"];
    document.getElementById("href_7").setAttribute("href", data["results"]["6"]["url"]);

    document.getElementById("title_8").innerHTML = data["results"]["7"]["title"];
    document.getElementById("href_8").innerHTML = data["results"]["7"]["url"];
    document.getElementById("description_8").innerHTML = data["results"]["7"]["description"];
    document.getElementById("href_8").setAttribute("href", data["results"]["7"]["url"]);

    document.getElementById("title_9").innerHTML = data["results"]["8"]["title"];
    document.getElementById("href_9").innerHTML = data["results"]["8"]["url"];
    document.getElementById("description_9").innerHTML = data["results"]["8"]["description"];
    document.getElementById("href_9").setAttribute("href", data["results"]["8"]["url"]);

    document.getElementById("title_10").innerHTML = data["results"]["9"]["title"];
    document.getElementById("href_10").innerHTML = data["results"]["9"]["url"];
    document.getElementById("description_10").innerHTML = data["results"]["9"]["description"];
    document.getElementById("href_10").setAttribute("href", data["results"]["9"]["url"]);

    document.getElementById("title_11").innerHTML = data["results"]["10"]["title"];
    document.getElementById("href_11").innerHTML = data["results"]["10"]["url"];
    document.getElementById("description_11").innerHTML = data["results"]["10"]["description"];
    document.getElementById("href_11").setAttribute("href", data["results"]["10"]["url"]);

    document.getElementById("title_12").innerHTML = data["results"]["11"]["title"];
    document.getElementById("href_12").innerHTML = data["results"]["11"]["url"];
    document.getElementById("description_12").innerHTML = data["results"]["11"]["description"];
    document.getElementById("href_12").setAttribute("href", data["results"]["11"]["url"]);

    document.getElementById("title_13").innerHTML = data["results"]["12"]["title"];
    document.getElementById("href_13").innerHTML = data["results"]["12"]["url"];
    document.getElementById("description_13").innerHTML = data["results"]["12"]["description"];
    document.getElementById("href_13").setAttribute("href", data["results"]["12"]["url"]);

    document.getElementById("title_14").innerHTML = data["results"]["13"]["title"];
    document.getElementById("href_14").innerHTML = data["results"]["13"]["url"];
    document.getElementById("description_14").innerHTML = data["results"]["13"]["description"];
    document.getElementById("href_14").setAttribute("href", data["results"]["13"]["url"]);

    document.getElementById("title_15").innerHTML = data["results"]["14"]["title"];
    document.getElementById("href_15").innerHTML = data["results"]["14"]["url"];
    document.getElementById("description_15").innerHTML = data["results"]["14"]["description"];
    document.getElementById("href_15").setAttribute("href", data["results"]["14"]["url"]);
});

function indexhtml() {
    window.location.href = "index.html";
}

function openpage() {
    value = document.getElementById("search").value;


    for (let i = 0; i <= 10; i++) {
        value = value.replace("+", "%2B")
    }
    window.location.href = "search.html?q=" + value;
}
