document.addEventListener('DOMContentLoaded', function() {
    const carrosel = document.getElementById('carrosel')
    const btnProximo = document.querySelector('#bttproximo')
    const btnvoltar = document.querySelector('#bttvoltar')
    let scrollAmount = 0
    const scrollStep = 215
    let maxScroll

    fetch("/_desafios/carrosel/imagens.json")
    .then(imagem => imagem.json())
    .then(data => {
        let imagens = data.Imagens

        mostrarImagem(imagens)
        maxScroll = carrosel.scrollWidth - carrosel.clientWidth
    })
    .catch(error => console.log('erro ao carregar iamgens', error))

    function mostrarImagem(imagens) {
        imagens.forEach(imgData => {
            let img = document.createElement("img")
            img.src = imgData.imagem
            img.alt = "imagem carrosel"
            carrosel.appendChild(img)
            
        });

    }

    // Função para mover o carrossel para frente
    btnProximo.addEventListener('click', function() {
        if (scrollAmount < maxScroll) {
            scrollAmount += scrollStep;
            carrossel.style.transform = `translateX(-${scrollAmount}px)`;
        }
        atualizarBotoes();
    });

    // Função para mover o carrossel para trás
    btnAnterior.addEventListener('click', function() {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            carrossel.style.transform = `translateX(-${scrollAmount}px)`;
        }
        atualizarBotoes();
    });

    // Função para atualizar os botões (desativar quando não for possível mais navegar)
    function atualizarBotoes() {
        btnAnterior.disabled = scrollAmount === 0;
        btnProximo.disabled = scrollAmount >= maxScroll;
    }



})

