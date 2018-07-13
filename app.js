const express = require('express')
const app = express()
const cheerio = require("cheerio");
const axios = require("axios");
const parser = require("body-parser")
const remote = require('./remote_ok.json')

app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));

app.get('/', (req, res) =>  res.send(jobs)
)
app.get('/remote-ok', (req, res) => {
    res.send(remote)
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))