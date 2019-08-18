var http = require("http");
    fs = require("fs");

    http.createServer(function(req, res){
        fs.readFile("./index.html", function(err, html){

            var html_string = html.toString();
            //Expresión regular que busca en el HTML donde haya {x}
            var variables = html_string.match(/[^\{\}]+(?=\})/g);
            var nombre = "Carlos";
            //variable ['nombre']
            for (var i= variables.length -1; i>=0; i--) {
                //Lo ejecutamos comocódigo de JavaScritp
                //Para obtener el valor de la variable
                var value =eval(variables[i]);
                html_string = html_string.replace("{"+variables[i]+"}",value);
            };


        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
 });
    }).listen(8080);

