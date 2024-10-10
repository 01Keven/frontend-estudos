let titulo = document.querySelector('#titulo') // selecionar conteudo HTML

titulo.textContent = 'Substituindo o titulo com o DOOM' // alterar texto

titulo.innerHTML = 'Substituindo o titulo com o DOOM' // alterar texto

let box = document.querySelectorAll('.box') // selecionar todos os conteudos

document.write(box[0].textContent) // mostrar conteudo

box[0].textContent = 'mudando conteudo box' // mudar conteudo separadamente que tenha a mesma class


let tituloTag = document.getElementsByTagName('div') // pegar todos os elementos por tag

let tituloId = document.getElementById('titulo') // pega o primeiro elemento com esse id

let tituloClass = document.getElementsByClassName('box') // pega todos os elemento com essa class

// -----------------------------------

// setAttribute -> adicionar um atributo, ex: formatação de imagem e tamanho

// .style.color = "color" -> mudar cor

// .style.backgroundColor =! background-color
