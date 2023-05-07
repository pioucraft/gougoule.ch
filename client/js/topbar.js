function search() {
    let searchQuery = document.getElementById("search").value
    document.getElementById("search").value = ""
    location.href = `search.html?q=${searchQuery}`
}