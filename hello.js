var http = require("http");

var driver = function(req, res){
    console.log("Si entro perro");
    res.end("Hola mundo");
};

var server = http.createServer(driver);

server.listen(8080);