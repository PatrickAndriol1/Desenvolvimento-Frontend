const express = require('express')
const app = express()
const porta = 8080
const Usuario = require('./models/usuario')
app.use(express.json())

let database = []

console.log(`http://localhost:${porta}`)
app.listen(porta)

app.post('/cadastrar-usuario', (req, res) => {
    const { nome, email, senha, confirmacao } = req.body;

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    }
    
    let emailUtilizado = database.find(usuario => usuario.email === email)
    if(emailUtilizado) {
        return res.status(400).json({ message: "Email já cadastrado." })
    }
    if(senha !== confirmacao) {
        return res.status(400).json({ message: "Senhas diferentes!" })
    }
    
    database.push(usuario)
    return res.status(201).json({ message: "Usuario cadastrado com sucesso!"})
    
})

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    let emailUtilizado = database.find(usuario => usuario.email === email)
    if(!emailUtilizado || emailUtilizado.senha !== senha) {
        return res.status(400).json({ message: "Email ou senha inválido." })
    }

    return res.status(200).json({ message: "Login realizado com sucesso!"})
    
})

app.get('/buscar-usuarios', (req, res) => {
    return res.status(200).json(database)
})

