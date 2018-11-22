const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 2900;
var db;
var mongourl = "mongodb://localhost:27017";
var collection_name = 'books'

app.get('/movies', (req,res) => {
    db.collection(collection_name).find().toArray((err,result) => {
        if(err) throw err
        res.send(result)
    })
})

app.get('/books', (req,res) => {
    db.collection('first').find().toArray((err,result) => {
        if(err) throw err
        res.send(result)
    })
})

app.post('/insert', (req,res) => {
    var myObject = {name:"IBM", type:"tech"};
    db.collection('first').insert(myObject, (err,result) => {
        if(err)  throw err;
        console.log("data inserted")
    })
})



MongoClient.connect(mongourl, (err,client) => {
    if(err) throw(err);
    db = client.db('acadgild_aug')
    app.listen(port, () => {
        console.log("listing on port "+ port);
    })
})