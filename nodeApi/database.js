const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var mainfunc = function(col,myobj){
    MongoClient.connect(url, function(err,db){
        if(err) throw err;
        var dbo = db.db('acadgild_aug');
        dbo.collection(col).insertOne(myobj, function(err, res){
            if(err)  throw err;
            console.log("1 document inserted")
            db.close()
        })
    })
}

module.exports = mainfunc;