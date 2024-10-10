let altura = document.getElementById("altura")
let peso = document.getElementById("peso")
let nome = document.getElementById("nome")
let idade = document.getElementById("idade")


let formIMc = document.getElementById("tbimc")
let forName = document.getElementById("tbname")
let forAge = document.getElementById("tbage")
let forHeight = document.getElementById("tbheight")
let forWeight = document.getElementById("tbweight")
let forType = document.getElementById("tbtype")


document.querySelector("#formcontainer").addEventListener("submit", function(event) {
    event.preventDefault();
    let fAltura = altura.value
    let fPeso = peso.value
    let fNome = nome.value
    let fIdade = idade.value

    let calculoIMC = fPeso / (fAltura * fAltura)

    
    if (fAltura && fPeso && fNome && fIdade != false) {
        
        formIMc.innerHTML = `${calculoIMC.toFixed(1)}`
        forName.innerHTML = `${fNome}`
        forAge.innerHTML = `${fIdade}`
        forWeight.innerHTML = `${fPeso}`
        forHeight.innerHTML = `${fAltura}`

        let icmType = ""
        if (calculoIMC < 18.5) {
            icmType = "Abaixo do peso"
        } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
            icmType = "Peso normal"
        } else if (calculoIMC >= 25 && calculoIMC <= 29.9) {
            icmType = "Sobrepeso"
        } else {
            icmType = "Obesidade"
        }

        forType.innerHTML = icmType

    } else {
        alert('Preencha todos os campos!')
    }
})



