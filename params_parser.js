function parse (req){
    var arreglo_parametros = [], parametros = {};
    if(req.url.indexOf("?") > 0){
        // /?nombre=Carlos => ['/','nombre=Carlos']
        var url_data = req.url.split("?");
        var arreglo_parametros = url_data[1].split("&");
        //[nombre=Carlos, data=algo]
    }

    for (var i= arreglo_parametros.length -1; i>= 0; i--) {
        var parametro = arreglo_parametros[i];
        //nombre=Carlos
        var param_data = parametro.split("=");
        //[nombre,Carlos]
        parametros[param_data[0]] = param_data[1];
        //{nombre: Carlos}
    }; 

    return parametros;
}

module.exports.parse = parse;