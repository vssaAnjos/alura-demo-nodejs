const express = require('express');

const app= express();

// Aplicacao ouvindo na porta 3000
app.listen(3000,() => console.log('servidor ouvindo na porta 3000!'));

// Req = request
// Res = response
// Response no get
app.get('/',(req,res) => res.send('Servidor funcionando...!'))

app.get('/atendimentos',(req,res) => res.send('Vamos atender mesmo..!'))
