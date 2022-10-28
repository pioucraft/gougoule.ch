"use strict"
/* eslint-env node, es6 */

//import expres
const express = require("express");

const PORT = 3000

//create express app
const app = express();

//import home page
const genererPageAccueil = require("./html/index-get.js");

app.get("/", async(req, res) => {
    const indexHtml = await genererPageAccueil();

    res.send(indexHtml)
});

//add styles and images repertories 
app.use("/images", express.static("/home/emmanuel_macron/jesépakoi/programinc/gougoule.ch/html/home/images/"))
app.use("/style", express.static("/home/emmanuel_macron/jesépakoi/programinc/gougoule.ch/html/home/style/"))
app.use("/js", express.static("/home/emmanuel_macron/jesépakoi/programinc/gougoule.ch/html/home/js/"))


//add random meme image
(Math.floor(Math.random() * 4));


app.listen(PORT, () => {
    console.log(`server start : http://localhost:${PORT}`)
})
