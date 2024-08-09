const express = require('express')
const app = express()
const porta = 8080

let produtos = [
    {
        nome: "Bolo de Morango",
        valor: 100,
        descricao: "Melhor bolo do mundo",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBu7lqciZTcapyqK49Ri-UdMbeApd7yXPZQ&s"
    },
    {
        nome: "Bolo de Chocolate",
        valor: 150,
        descricao: "Ótimo bolo de chocolate",
        imagem: "https://www.receiteria.com.br/wp-content/uploads/bolo-de-chocolate-rapido-e-molhadinho-capa.png"    
    },
    {
        nome: "Bolo de Cenoura",
        valor: 75,
        descricao: "Bolo com cobertura maravilhosa",
        imagem: "https://www.daninoce.com.br/wp-content/uploads/2018/12/bolo-de-cenoura-com-brigadeiro-em-camadas-dani-noce-destaque-1.jpg"
    }
]

app.get('/', (req, res) => {
    return res.json(produtos)
})

app.get('/produto', (req, res) => {
    let queryUrl = req.query
    return res.json(queryUrl)
})

app.listen(porta, () => {
    console.log(`https://localhost:${porta}`)
})

