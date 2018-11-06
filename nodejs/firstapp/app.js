import express from 'express';
import chalk from 'chalk';
let debug = require('debug')('app');
import morgan from 'morgan';

let app = express();

app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.send("<h1>Welcome to express</h1>")
});

app.get('/home',(req,res) => {
    res.send("<h1>Welcome to Home Page</h1>")
});



app.listen(2300,(err) => {
    console.log(`server running on port ${chalk.blue('2300')}`);
});



/*
ES=> Ecma Script
Es5
function add(a,b){
    return a+b
}
Es6
var add = (a,b) => {
    return a+b
}
let express = require('express');
let app = express();

app.get('/', function(req,res){
    res.send("Welcome to express")
});

app.get('/home', function(req,res){
    res.send("<h1>Welcome to Home Page</h1>")
});



app.listen(2300,function(err){
    console.log("server running on port "+2300);
});

var a =10
var b = "my age is "+10
var b = `my age is ${a}`

*/
