let idQuestao = document.querySelector("#idquestao")
let bttResponder = document.querySelector('#bttresponder')

let lista = document.querySelector("#opcoes")
let opcao = lista.querySelectorAll('li')
let quizContainer = document.getElementById("quizcontainer")

let numQuestao = document.querySelector(".num-questao")
let medidorNum = document.getElementById('medidor')

let respostasFinais = document.getElementById('respostasfinais')
let grafico =  document.getElementById("grafico-container")
let respostasCertas = document.getElementById('respostascertas')

// recuperando respostas no navegador caso elas existam
let respostaFinal = JSON.parse(localStorage.getItem('respostas')) || []

fetch("/_desafios/quiz-json/respostas.json")
    .then(response => response.json())
    .then(data => {
        let perguntas = data.Perguntas

        let posicaoPergunta = 0
        mostrarPergunta(posicaoPergunta, perguntas)

        let opcaoEscolhida = ''
        
        // percorre as opcoes e indica qual parou
        opcao.forEach(item => {
            item.addEventListener('click', () => {
                // resetando cores das outras opções
                opcao.forEach(op => op.style.backgroundColor = "")
                item.style.backgroundColor = "#ffea00"
                bttResponder.style.display = "block"
                opcaoEscolhida = item.textContent
            })
        })

        grafico.style.display = 'none'
        document.getElementById("bttresponder").addEventListener('click', () => {
            let perguntaAtual = perguntas[posicaoPergunta]
            let respostaCorreta = perguntaAtual.altCerto

            bttResponder.style.display = 'none'
            quizContainer.classList.add('sumindo');
            // armazenando resposta no array
            respostaFinal.push(opcaoEscolhida)
            // armazenando resposta no localStorage do navegador
            localStorage.setItem('respostas', JSON.stringify(respostaFinal))

            opcao.forEach(item => {
                if (item.textContent === respostaCorreta) {
                    item.style.backgroundColor = "green"
                    item.style.color = "white"
                } else {
                    item.style.backgroundColor = "red"
                }
            })

            // if (opcaoEscolhida === respostaCorreta) {
            //     alert("acertou")
                
            // } else {
            //     alert('erou')
            // }

            posicaoPergunta ++
            if (posicaoPergunta < perguntas.length) {
                setTimeout(() => {

                    mostrarPergunta(posicaoPergunta, perguntas)
                    document.getElementById("numquestao").textContent = posicaoPergunta + 1
                    bttResponder.style.display = "none"
                    medidorNum.value ++
                    // resetando cores para a proxima pergunta
                    opcao.forEach(item => item.style.backgroundColor = "")
                    opcao.forEach(item => item.style.color = "")
                    quizContainer.classList.remove('sumindo');
                }, 2000) // dando 2 segundo de tempo para usuario visualizar as respostas
            } else {
                // alert("fim, as respostas: " + JSON.stringify(respostaFinal))
                // removendo respostas no final, para resetar as escolhas do quiz
                grafico.style.display = 'block'
                localStorage.removeItem('respostas')
                quizContainer.classList.add('escondido');
                respostasFinais.innerHTML = JSON.stringify(respostaFinal)

                respostaFinal.innerHTML = respostaCorreta
                
            }
        })
    })
    .catch(error => console.log("error a carregar json", error));
    

function mostrarPergunta(posicao, perguntas) {
    let perguntaAtual = perguntas[posicao]

    document.getElementById("idquestao").textContent = perguntaAtual.id
    document.getElementById("pergunta").textContent = perguntaAtual.titulo
    document.getElementById("opcao1").textContent = perguntaAtual.altA
    document.getElementById("opcao2").textContent = perguntaAtual.altB
    document.getElementById("opcao3").textContent = perguntaAtual.altC
    document.getElementById("opcao4").textContent = perguntaAtual.altD
    }

