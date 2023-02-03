function openpage() {
    value = document.getElementById("search").value;


    for (let i = 0; i <= 10; i++) {
        value = value.replace("+", "%2B")
    }
    window.open("https://google.com/search?q=" + value);
}