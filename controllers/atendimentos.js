module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    app.post('/atendimentos', (req, res) => {
        console.log('Atendimentos enviado')
        console.log(req.body)
        
        res.send('POST Atendimento')

    })
}