var http = require("http");
    fs = require("fs");

    http.createServer(function(req, res){
        fs.readFile("./index.html", function(err, html){
        res.writeHeader(200,{"Content-Type":"text/json"});
        res.write(JSON.stringify({nombre: "Carlos", username: "carlos"}));
        res.end();
 });
    }).listen(8080);

