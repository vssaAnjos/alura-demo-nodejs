const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
    adicionaAtendimento(atendimento,res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const dataAtendimento = moment (atendimento.dataAtendimento,'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentosDatado = {...atendimento, dataCriacao,dataAtendimento}

        const dataAtendimentoEhValida = moment(dataAtendimento).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 5;
        console.log("tamanho do cliente ",atendimento.cliente.length)
        console.log("valor do clienteEhValido ",clienteEhValido)

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

    listaAtendimentos(res) {
        const sql = 'SELECT * FROM Atendimentos;'
        
        conexao.query( sql, (erro,resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    
    buscaPorId(id,res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
        conexao.query(sql, (erro,resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro);
            } else{
                res.status(200).json(atendimento);
            }
        })
    }

    alerar(id,valores,res){
        if (valores.dataAtendimento){
            valores.dataAtendimento = moment (valores.dataAtendimento,'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss');
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id= ? ';

        conexao.query(sql,[valores,id],(erro,resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    excluir(id,res){
        const sql = 'DELETE from Atendimentos WHERE id=?';
        conexao.query(sql,id,(erro,resultados) =>{
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(
                    {
                        id: id,
                        msg: "Atendimento Excluido"
                    });
            }
        })
    }
}

module.exports = new Atendimento