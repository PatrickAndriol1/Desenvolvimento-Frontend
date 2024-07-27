let conteudoDiv = document.getElementById('conteudo')

fetch('http://localhost:5000', {method: "GET"})
    .then(resposta => resposta.json())
    .then(dados =>     {
        for (dado of dados) {
            let paragrafo = document.createElement('p')
            paragrafo.textContent = dado.nome
            conteudoDiv.appendChild(paragrafo)
        }
    })
    

    