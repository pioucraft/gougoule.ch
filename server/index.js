const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
