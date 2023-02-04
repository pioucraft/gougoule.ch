//bonjour personne qui regarde mon code source, n'ayez pas peur de voir que je ne sais pas coder en javascript, sachez juste que je ne vais jamais apprendre ce language car simple raison: je n'ai pas besoin de me justifier je pense

let queryString = window.location.search;
queryString = queryString.replace("?q=", "")
fetch("https://gougoule.ch/api/search/fr/" + queryString).then(responses => responses.json()).then(function(data){
    console.log(data)

    document.getElementById("title_1").innerHTML = data["duckduckgo"]["0"]["title"];
    document.getElementById("href_1").innerHTML = data["duckduckgo"]["0"]["href"];
    document.getElementById("description_1").innerHTML = data["duckduckgo"]["0"]["body"];
    document.getElementById("href_1").setAttribute("href", data["duckduckgo"]["0"]["href"]);

    document.getElementById("title_2").innerHTML = data["duckduckgo"]["1"]["title"];
    document.getElementById("href_2").innerHTML = data["duckduckgo"]["1"]["href"];
    document.getElementById("description_2").innerHTML = data["duckduckgo"]["1"]["body"];
    document.getElementById("href_2").setAttribute("href", data["duckduckgo"]["1"]["href"]);

    document.getElementById("title_3").innerHTML = data["duckduckgo"]["2"]["title"];
    document.getElementById("href_3").innerHTML = data["duckduckgo"]["2"]["href"];
    document.getElementById("description_3").innerHTML = data["duckduckgo"]["2"]["body"];
    document.getElementById("href_3").setAttribute("href", data["duckduckgo"]["2"]["href"]);

    document.getElementById("title_4").innerHTML = data["duckduckgo"]["3"]["title"];
    document.getElementById("href_4").innerHTML = data["duckduckgo"]["3"]["href"];
    document.getElementById("description_4").innerHTML = data["duckduckgo"]["3"]["body"];
    document.getElementById("href_4").setAttribute("href", data["duckduckgo"]["3"]["href"]);

    document.getElementById("title_5").innerHTML = data["duckduckgo"]["4"]["title"];
    document.getElementById("href_5").innerHTML = data["duckduckgo"]["4"]["href"];
    document.getElementById("description_5").innerHTML = data["duckduckgo"]["4"]["body"];
    document.getElementById("href_5").setAttribute("href", data["duckduckgo"]["4"]["href"]);

    document.getElementById("title_6").innerHTML = data["duckduckgo"]["5"]["title"];
    document.getElementById("href_6").innerHTML = data["duckduckgo"]["5"]["href"];
    document.getElementById("description_6").innerHTML = data["duckduckgo"]["5"]["body"];
    document.getElementById("href_6").setAttribute("href", data["duckduckgo"]["5"]["href"]);

    document.getElementById("title_7").innerHTML = data["duckduckgo"]["6"]["title"];
    document.getElementById("href_7").innerHTML = data["duckduckgo"]["6"]["href"];
    document.getElementById("description_7").innerHTML = data["duckduckgo"]["6"]["body"];
    document.getElementById("href_7").setAttribute("href", data["duckduckgo"]["6"]["href"]);

    document.getElementById("title_8").innerHTML = data["duckduckgo"]["7"]["title"];
    document.getElementById("href_8").innerHTML = data["duckduckgo"]["7"]["href"];
    document.getElementById("description_8").innerHTML = data["duckduckgo"]["7"]["body"];
    document.getElementById("href_8").setAttribute("href", data["duckduckgo"]["7"]["href"]);

    document.getElementById("title_9").innerHTML = data["duckduckgo"]["8"]["title"];
    document.getElementById("href_9").innerHTML = data["duckduckgo"]["8"]["href"];
    document.getElementById("description_9").innerHTML = data["duckduckgo"]["8"]["body"];
    document.getElementById("href_9").setAttribute("href", data["duckduckgo"]["8"]["href"]);

    document.getElementById("title_10").innerHTML = data["duckduckgo"]["9"]["title"];
    document.getElementById("href_10").innerHTML = data["duckduckgo"]["9"]["href"];
    document.getElementById("description_10").innerHTML = data["duckduckgo"]["9"]["body"];
    document.getElementById("href_10").setAttribute("href", data["duckduckgo"]["9"]["href"]);

    document.getElementById("title_11").innerHTML = data["duckduckgo"]["10"]["title"];
    document.getElementById("href_11").innerHTML = data["duckduckgo"]["10"]["href"];
    document.getElementById("description_11").innerHTML = data["duckduckgo"]["10"]["body"];
    document.getElementById("href_11").setAttribute("href", data["duckduckgo"]["10"]["href"]);

    document.getElementById("title_12").innerHTML = data["duckduckgo"]["11"]["title"];
    document.getElementById("href_12").innerHTML = data["duckduckgo"]["11"]["href"];
    document.getElementById("description_12").innerHTML = data["duckduckgo"]["11"]["body"];
    document.getElementById("href_12").setAttribute("href", data["duckduckgo"]["11"]["href"]);

    document.getElementById("title_13").innerHTML = data["duckduckgo"]["12"]["title"];
    document.getElementById("href_13").innerHTML = data["duckduckgo"]["12"]["href"];
    document.getElementById("description_13").innerHTML = data["duckduckgo"]["12"]["body"];
    document.getElementById("href_13").setAttribute("href", data["duckduckgo"]["12"]["href"]);

    document.getElementById("title_14").innerHTML = data["duckduckgo"]["13"]["title"];
    document.getElementById("href_14").innerHTML = data["duckduckgo"]["13"]["href"];
    document.getElementById("description_14").innerHTML = data["duckduckgo"]["13"]["body"];
    document.getElementById("href_14").setAttribute("href", data["duckduckgo"]["13"]["href"]);

    document.getElementById("title_15").innerHTML = data["duckduckgo"]["14"]["title"];
    document.getElementById("href_15").innerHTML = data["duckduckgo"]["14"]["href"];
    document.getElementById("description_15").innerHTML = data["duckduckgo"]["14"]["body"];
    document.getElementById("href_15").setAttribute("href", data["duckduckgo"]["14"]["href"]);
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
