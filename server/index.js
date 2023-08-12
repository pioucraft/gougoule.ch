const express = require("express")
const app = express()
const cors = require("cors")

app.use("cors()")

app.get("/api/get-duolingo-stats/", (req, res) => {
    fetch("https://duome.eu/pfannkuchen31").then(data => data.text()).then(data => res.send(data))
})

app.listen(5000)
