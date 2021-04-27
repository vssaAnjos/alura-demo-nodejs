// controle de rotas

// imports
const Atendimento = require('../models/atendimentos')

// exportar uma funcao / um modulo
module.exports = app => {

// Req = request
// Res = response
// Response no get
// app.get('/',(req,res) => res.send('Servidor funcionando...!'))
    app.get('/atendimentos',(req,res) => {
        Atendimento.listaAtendimentos(res);
    });

    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id,res);
    });

    app.post('/atendimentos',(req,res) => {
        console.log(req.body)
        const atendimento = req.body
        
        Atendimento.adicionaAtendimento(atendimento,res)

       // res.send('POST: Você está na rota de atendimentos via POST')
    });

    app.patch('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.alerar(id,valores,res);
    })
}