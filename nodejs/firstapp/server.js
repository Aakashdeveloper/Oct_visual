let http = require('http');

let server = http.createServer(function(req,res){
    console.log(req.url)
    res.write("<h1>"+"Welcome to node js server 10.1"+"<h1>")
    res.end()
});

server.listen(2000);