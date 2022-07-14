const connection = require('../infraestrutura/connection')

class calls {
    add(calls) {
        const sql = 'INSERT INTO calls SET ?'

        connection.query(sql, calls, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(results)
            }
            
        })
    }
}