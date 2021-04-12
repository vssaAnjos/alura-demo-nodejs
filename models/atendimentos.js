const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adicionaAtendimento(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const dataAtendimento = moment (atendimento.dataAtendimento,'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentosDatado = {...atendimento, dataCriacao,dataAtendimento}

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql,atendimentosDatado  , (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }

        })
    }
}

module.exports = new Atendimento