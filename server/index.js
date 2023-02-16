const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const DDG = require('duck-duck-scrape');

var cors = require('cors')

app.use(cors())

app.all('/api/add-email/:email', (req, res) => {
    let email = req.params.email;
    let emails = fs.readFileSync(__dirname + '/emails.json','utf-8');
    emails = JSON.parse(emails)
    if (emails.includes(email) == false) {
        emails[emails.length] = email
        fs.writeFileSync(__dirname + '/emails.json', JSON.stringify(emails));
        res.send("200");
    }
    else {
        res.send("201 error already in newsletter");
    }
});

app.all("/api/duckduckgo/:query", (req, res) => {
    let query = req.params.query;
    DDG.search(query, {
        safeSearch: DDG.SafeSearchType.STRICT
    }).then((data) => res.send(data));
});




app.listen(port, () => {
    console.log(`app is ready (http://127.0.0.1:${port}/api/)`);
});
