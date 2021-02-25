// modulo de configuracao do express

// modulos
const express = require('express');
const consign = require('consign');
const app= express();

module.exports = () => {
    const app= express();
// configacao da aplicacao
    consign() // pesquisar o consign
        .include('controllers')
        .into(app)
// Aplicacao ouvindo na porta 3000
return app
}
