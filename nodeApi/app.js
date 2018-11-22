const express = require('express');

const app = express();
const port = 8900;
const databse = require('./database.js')

app.get('/insert',(req,res) => {
    var myObject = {name:"IBM", type:"tech"};
    databse('first',myObject);
})

app.get('/movies', (req,res) => {
    let out = databse.prototype.getData("books")
    let outval = JSON.stringify(out)
    res.send(outval);
})

app.get('/update', (req,res) => {
    var query = { name: "IBM"}
    var myobj = {$set: {name:"Amazone", type:"tech"}};
    databse.prototype.update(query, myobj)
})

app.get('/delete', (req,res) => {
    var myobj = {name:'Amazone'};
    databse.prototype.delete(myobj)
})

app.get('/',(req,res) => {
    res.send("welcome to api")
})

app.listen(port, (err) => {
    console.log("server running on port "+ port)
})
