"use strict"
/* eslint-env node, es6 */

const { readeFile, readFile } = require("fs")
const { promisify } = require("util")
const readFileAsync = promisify(readFile)

const READ_OPTIONS = { encoding: "UTF-8" }
const INDEX_URL = "/home/emmanuel_macron/jesépakoi/programinc/gougoule.ch/html/home/index.html"

module.exports = async() => {

    const contenu = await readFileAsync(INDEX_URL, READ_OPTIONS)
    
    return contenu
    
}

//window.location.replace("https://www.gougoule.ch/home/index.html")
