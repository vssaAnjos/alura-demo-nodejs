// modulo de configuracao do express

// modulos
const express = require('express');
const consign = require('consign');
const app= express();
const bodyParser = require('body-parser');

module.exports = () => {
    const app= express();
// configacao da aplicacao

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    // app.user = adc bibliotecas para uso

    consign() // pesquisar o consign
        .include('controllers')
        .into(app)
// Aplicacao ouvindo na porta 3000
return app
}
