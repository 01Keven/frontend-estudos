let dadoum = document.querySelector("#dadoum")
let dadodois = document.querySelector("#dadodois")
let dadotres = document.querySelector("#dadotres")
let dadoquatro = document.querySelector("#dadoquatro")
let dadocinco = document.querySelector("#dadocinco")
let dadoseis = document.querySelector("#dadoseis")

let textinicio = document.querySelector("#textinicio")
let inicio = document.querySelector("#inicio")

buttonRolar = document.querySelector("#buttrodando").addEventListener("click", function() {
    
    resultado = gerarNumAleatorio(1,6)
    
    esconderTodosOsDados()

    switch (resultado) {
        case 1:
            textinicio.style.display = "none";
            dadoum.style.display = "block";
            break;
        case 2:
            textinicio.style.display = "none";
            dadodois.style.display = "flex";
            break;
        case 3:
            textinicio.style.display = "none";
            dadotres.style.display = "block";
            break;
        case 4:
            textinicio.style.display = "none";
            dadoquatro.style.display = "block";
            break;
        case 5:
            textinicio.style.display = "none";
            dadocinco.style.display = "block";
            break;
        case 6:
            textinicio.style.display = "none";
            dadoseis.style.display = "block";
            break;
        
        default:
            break;
    }


})

function gerarNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function esconderTodosOsDados() {
    dadoum.style.display = "none";
    dadodois.style.display = "none";
    dadotres.style.display = "none";
    dadoquatro.style.display = "none";
    dadocinco.style.display = "none";
    dadoseis.style.display = "none";
}