let dadoum = document.querySelector("#dadoum");
let dadodois = document.querySelector("#dadodois");
let dadotres = document.querySelector("#dadotres");
let dadoquatro = document.querySelector("#dadoquatro");
let dadocinco = document.querySelector("#dadocinco");
let dadoseis = document.querySelector("#dadoseis");
let resultadoNum = document.querySelector(".resultado")


let textinicio = document.querySelector("#textinicio");
let inicio = document.querySelector("#inicio");

let dadoContainer = document.querySelector('.dado-container');
let buttonRolar = document.querySelector("#buttrodando");
let buttonContainer = document.querySelector('.btt-container');

let somRolagem = new Audio("/_desafios/dado-virtual/dado-rolando.mp3")

buttonRolar.addEventListener("click", function() {

    somRolagem.play()

    // Desabilitar o botão de rolar e ocultar
    buttonRolar.disabled = true;
    buttonContainer.classList.add('hidden');

    // Inicia a animação no dado-container
    dadoContainer.classList.add('rodando');

    // Gera o resultado do dado
    let resultado = gerarNumAleatorio(1, 6);
    
    // Após o término da animação (2 segundos), mostrar o resultado e reabilitar o botão
    setTimeout(function() {
        esconderTodosOsDados();

        switch (resultado) {
            case 1:
                textinicio.style.display = "none";
                dadoum.style.display = "block";
                resultadoNum.innerHTML = resultado
                break;
            case 2:
                textinicio.style.display = "none";
                dadodois.style.display = "flex";
                resultadoNum.innerHTML = resultado
                break;
            case 3:
                textinicio.style.display = "none";
                dadotres.style.display = "block";
                resultadoNum.innerHTML = resultado
                break;
            case 4:
                textinicio.style.display = "none";
                dadoquatro.style.display = "block";
                resultadoNum.innerHTML = resultado
                break;
            case 5:
                textinicio.style.display = "none";
                dadocinco.style.display = "block";
                resultadoNum.innerHTML = resultado
                break;
            case 6:
                textinicio.style.display = "none";
                dadoseis.style.display = "block";
                resultadoNum.innerHTML = resultado
                break;
            default:
                break;
        }

        // Remove a classe de animação
        dadoContainer.classList.remove('rodando');
        
        // Reabilita o botão e mostra novamente
        buttonRolar.disabled = false;
        buttonContainer.classList.remove('hidden');

    }, 2000); // 2 segundos = duração da animação

});

// Função para gerar números aleatórios entre min e max
function gerarNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para esconder todos os dados
function esconderTodosOsDados() {
    dadoum.style.display = "none";
    dadodois.style.display = "none";
    dadotres.style.display = "none";
    dadoquatro.style.display = "none";
    dadocinco.style.display = "none";
    dadoseis.style.display = "none";
}
