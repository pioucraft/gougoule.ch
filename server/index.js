const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const DDG = require('duck-duck-scrape');

app.all('/api/add-email/:email', (req, res) => {
    email = req.params.email;
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

app.all("/api/search/:string", (req, res) => {
    string = req.params.string;
    async function search(string) {
        const searchResults = await DDG.search(string, {
            safeSearch: DDG.SafeSearchType.STRICT
        });
        return searchResults;
    }
    console.log(search(string));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
