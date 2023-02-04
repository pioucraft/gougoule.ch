function openpage() {
    value = document.getElementById("search").value;

    for (let i = 0; i <= 10; i++) {
        value = value.replace("+", "%2B")
        value = value.replace(" ", "+")
    }
    window.location.href = "search.html?q=" + value;
}