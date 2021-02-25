// modulos
const express = require('express');
const consign = require('consign');
const app= express();



// Req = request
// Res = response
// Response no get
// app.get('/',(req,res) => res.send('Servidor funcionando...!'))

// configacao da aplicacao
consign() // pesquisar o consign
    .include('controllers')
    .into(app)
// Aplicacao ouvindo na porta 3000
app.listen(3000,() => console.log('servidor ouvindo na porta 3000!'));