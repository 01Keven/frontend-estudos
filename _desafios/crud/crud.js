let modalCadastrar = document.querySelector('.cadastrar-container')

modalCadastrar.style.display = 'none'

// Eventos de botões

document.getElementById('btnfechar').addEventListener('click', () => {
    modalCadastrar.style.display = "none"
})

document.getElementById('btnmcadastrar').addEventListener('click', () => {
    modalCadastrar.style.display = 'block'
})

// funções

// Pegar o dados dos usuarios
function getUsers() {
    const users = localStorage.getItem('users')
    // se users nao forem nulo converte os dados de string para um array de objetos, caso seja nulo retorna um array nulo
    return users ? JSON.parse(users) : []
}

// salvar o array de users no localStorage
function saveUsers(users) {
    // converter array de objetos em string
    localStorage.setItem('users', JSON.stringify(users))
}

function addUsers(nome,endereco, email, nascimento) {
    const users = getUsers()
    
}