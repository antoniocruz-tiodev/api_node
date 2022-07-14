class Tables {
    init(conection) {
        console.log('Tabelas foram chamadas')
            this.conection = conection

            this.createCalls()
    }

    createCalls(){
        const sql = 'CREATE TABLE IF NOT EXISTS calls (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, comments text, PRIMARY KEY(id))'
        this.conection.query(sql, erro => {
            if (erro) {
                console.log(erro)
            }else {
                console.log('Tabela calls criada com sucesso')
            }
        })
    }
}

module.exports = new Tables