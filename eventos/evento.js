const carregou = () => {
    alert('tela carregada')
}

const rolouPagina = () => {
    let rolagem = 0
    while (rolagem <= 2) {
        rolagem += 1
        alert(`rolando pagina: ${rolagem}`)
    } 
}

// Previnir ação padrao do submit 

// function (event) {
//     event.preventDefault()
// }
