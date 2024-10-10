let buttonDark = document.querySelector('#buttondark')
let buttonLight = document.querySelector('#buttonlight')
let tela = document.querySelector('body')

buttonDark.addEventListener('click', modoDark) // preparando um evento pra quando clicar no botão
buttonLight.addEventListener('click', modoLight)

function modoDark() {
    tela.classList.add("dark"); // adicionando a class dark
    tela.classList.remove("light");
}

function modoLight() {
    tela.classList.add("light");
    tela.classList.remove("dark");
}