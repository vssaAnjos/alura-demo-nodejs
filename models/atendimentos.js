const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adicionaAtendimento(atendimento,res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const dataAtendimento = moment (atendimento.dataAtendimento,'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentosDatado = {...atendimento, dataCriacao,dataAtendimento}

        const dataAtendimentoEhValida = moment(dataAtendimento).isSameOrAfter(dataCriacao )
        const clienteEhValido = atendimento.cliente.lenght >=5
        console.log(atendimento.cliente.lenght)
        console.log(clienteEhValido)

        const validacoes = [
            {
                nome : 'dataAtendimento',
                valido: dataAtendimentoEhValida,
                mensagem : 'Data de Atendimento deve ser maior ou igual a data atual'
            },
            {
                nome : 'cliente',
                valido : clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos 5 caracteres'
            }

        ]

        const erros = validacoes.filter(campo=> !campo.valido)
        console.log (erros)
        const existemErros = erros.length
        console.log (existemErros)

        
        if (existemErros) {
            res.status(400).json(erros)
        } else {

            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql,atendimentosDatado  , (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                    console.log(erro)
                    
                } else {
                    res.status(201).json(resultados)
                    console.log(resultados)
                }
    
            })

        }
      
    }
}

module.exports = new Atendimento