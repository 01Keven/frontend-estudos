titulo = document.querySelector('#titulo')

// function anonima sem nome e sem parametros
titulo.addEventListener('click', function () {
    document.write("clicou")
})

// arrow function
// as {} nao sao obrigatorias quando for a execução de uma ação
const olaMundo = () => document.write("<h2>arrow function papae</h2>")

olaMundo()