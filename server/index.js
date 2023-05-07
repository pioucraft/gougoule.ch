const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors")
app.use(cors())
const DDG = require('duck-duck-scrape');

var ips = {}

function blockIp(req, res, next) {
    if(getIp(req) == "127.0.0.1"){
        next()
    }
    else {
        res.send({"error": true, "response": "what are you even doing here bruh", "code": -1})
    }
}
app.use(blockIp)

function rateLimit(req, res, next) {
    let ip = getIp(req)
    if(ips[ip] == undefined) {
        ips[ip] = (Date.now()/1000)
        next()
    }
    else if((ips[ip] + 3) > (Date.now()/1000)) {
        res.send({"error": true, "response": "stop, we said 3 seconds of wait time", "code": -2})
        
    }
    else{
        ips[ip] = (Date.now()/1000)
        next()
    }
}

app.all("/api/search-web/:query", rateLimit, (req, res) => {
    let query = req.params.query;
    try{
        DDG.search(query, {
            safeSearch: DDG.SafeSearchType.STRICT,
        }).then((data) => {
            let response = {"error": false, "response": data.results}
            res.send(response)
        });
    }
    catch(err) {
        console.log(err)
    }
});



app.listen(port, () => {
    console.log(`app is ready (http://127.0.0.1:${port}/api/)`);
});


/*function getIp(req) {
    return req["headers"]["x-forwaded-for"]
}*/

function getIp(req) {
    return req.ip.replace("::ffff:", "") 
}