
// exportar uma funcao / um modulo
module.exports = app => {
    app.get('/atendimentos',(req,res) => res.send('Vamos atender mesmo..!'))
}