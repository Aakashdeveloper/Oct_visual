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

var outRes;

mainfunc.prototype.getData = function(colName, req,res){
    MongoClient.connect(url, function(err,db){
        if(err) throw err;
        var dbo = db.db('acadgild_aug')
        dbo.collection(colName).find({}).toArray(
            function(err, results){
                outRes = results
        })
    })
    return outRes;
}

mainfunc.prototype.update = function(query, myobj){
    MongoClient.connect(url, (err,db) => {
        if(err) throw err;
        var dbo = db.db("acadgild_aug");
        dbo.collection('first').update(query, myobj, (err, res) => {
            if(err) throw err;
            console.log("document updated")
            db.close();
        })
    })
}

mainfunc.prototype.delete = function(myquery){
    MongoClient.connect(url, (err,db) => {
        if(err) throw err;
        var dbo = db.db("acadgild_aug");
        dbo.collection('first').deleteOne(myquery, (err,res) => {
            if(err) throw err;
            console.log("data deleted");
            db.close();
        })
    })
}

module.exports = mainfunc;