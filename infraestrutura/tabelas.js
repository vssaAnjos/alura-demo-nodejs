class Tabelas {
    init(conexao){
        this.conexao = conexao;
        console.log('Tabelas chamadas!')

        this.criarAtendimento()
    }
    criarAtendimento() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos(id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20),servico varchar(20) NOT NULL, status varchar(20) NOT NULL, dataAtendimento datetime NOT NULL, dataCriacao datetime NOT NULL, observacoes text, PRIMARY KEY(id));'
        
        this.conexao.query(sql,(erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso!')
            }
        })
        
    }
}

module.exports = new Tabelas;