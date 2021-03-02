// controle de rotas

// exportar uma funcao / um modulo
module.exports = app => {

// Req = request
// Res = response
// Response no get
// app.get('/',(req,res) => res.send('Servidor funcionando...!'))
    app.get('/atendimentos',(req,res) => res.send('GET: Vamos atender mesmo..!'))

    app.post('/atendimentos',(req,res) => {
        console.log(req.body)
        res.send('POST: Você está na rota de atendimentos via POST')
    })
}