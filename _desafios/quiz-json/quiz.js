let idQuestao = document.querySelector("#idquestao")

fetch("/_desafios/quiz-json/respostas.json")
    .then(response => response.json())
    .then(data => {
        let perguntas = data.Perguntas

        let posicaoPergunta = 0
        mostrarPergunta(posicaoPergunta, perguntas)

        document.getElementById("bttresponder").addEventListener('click', () => {
            posicaoPergunta++
            if (posicaoPergunta < perguntas.length) {
                mostrarPergunta(posicaoPergunta, perguntas)
                document.getElementById("numquestao").textContent = posicaoPergunta + 1
            } else {
                alert("fim do quiz")
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
