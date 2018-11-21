const express = require('express');

const app = express();
const port = 8900;
const databse = require('./database.js')

app.get('/',(req,res) => {
    var myObject = {name:"IBM", type:"tech"};
    databse('first',myObject);
})

app.listen(port, (err) => {
    console.log("server running on port "+ port)
})