function bigSearch() {
    let searchQuery = document.getElementById("bigSearch").value
    document.getElementById("bigSearch").value = ""
    location.href = `search.html?q=${searchQuery}`
}