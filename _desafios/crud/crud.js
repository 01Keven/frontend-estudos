let modalCadastrar = document.querySelector('.cadastrar-container')
let modalEditar = document.querySelector('.editar-container')
let btnSalvar = document.getElementById('btnsalvar') 
modalCadastrar.style.display = 'none'
modalEditar.style.display = 'none'

// Eventos de botões

// Pega todos os elementos com a classe 'btn-fechar'
const btnFecharElements = document.querySelectorAll('.btn-fechar');

// Adiciona um event listener para cada elemento com a classe 'btn-fechar'
btnFecharElements.forEach(btn => {
    btn.addEventListener('click', () => {
        modalCadastrar.style.display = "none";
        modalEditar.style.display = "none";
    });
});


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

// criar novo usuario
function addUsers(nome,endereco, email, nascimento) {
    const users = getUsers()

    // se o array de usuario estiver vazio o id sera 1, se não o novo id sera o ultimo id + 1
    const newId = users.length ? users[users.length - 1].id + 1 : 1

    // objeto que recebera os dados
    const newUser = {
        id: newId,
        nome: nome,
        email: email,
        endereco: endereco,
        nascimento: nascimento
    }

    // criando novo usuario
    users.push(newUser)
    // salvando dados localmente
    saveUsers(users)
    // mostrar novo usuario na tela
    displayUsers()
    
}

// mostrar dados na tabela
function displayUsers() {
    const userTable = document.getElementById('dadosusuario')
    userTable.innerHTML = ''

    const users = getUsers()
    if (users.length === 0) {
        userTable.innerHTML = '<tr><td colspan="6"></td></tr>';
        return
    }

    // percorrendo e injetando os dados nos campos
    users.forEach((user) => {
        // criando elemento para a tabela
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>${user.endereco}</td>
        <td>${user.nascimento}</td>
        <td>
            <button onclick="editUsers(${user.id})">Editar</button>
            <button onclick="deleteUsers(${user.id})">Excluir</button>
        </td>
        `
        // adicionando elemento a tabela
        userTable.appendChild(tr)
    }) 
}

function editUsers(id) {

    modalEditar.style.display = 'block'

    const users = getUsers()
    // procura o id do usuario correspondente
    const user = users.find(user => user.id === id)

    // preenchendo o formulario com os dados editado
    document.getElementById('enome').value = user.nome
    document.getElementById('eemail').value = user.email
    document.getElementById('eendereco').value = user.endereco
    document.getElementById('enascimento').value = user.nascimento

    // identificar que o usuario esta sendo editado
    document.getElementById('formedit').setAttribute('data-editing-id', id)

}

// modal de edição
document.getElementById('formedit').addEventListener('submit', function(e) {
    e.preventDefault()

    const nome = document.getElementById('enome').value
    const email = document.getElementById('eemail').value
    const endereco = document.getElementById('eendereco').value
    const nascimento = document.getElementById('enascimento').value

    const editingId = document.getElementById('formedit').getAttribute('data-editing-id')

    if (editingId) {
        updateUser(parseInt(editingId), nome, email, endereco, nascimento)
    }

    document.getElementById('enome').value = ''
    document.getElementById('eemail').value = ''
    document.getElementById('eendereco').value = ''
    document.getElementById('enascimento').value = ''

    modalEditar.style.display = 'none'
})

// modal de cadastro
document.getElementById('formcadastrar').addEventListener('submit', function(e) {
    e.preventDefault()
    
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const endereco = document.getElementById('endereco').value
    const nascimento = document.getElementById('nascimento').value

    addUsers(nome, endereco, email, nascimento)
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('endereco').value = ''
    document.getElementById('nascimento').value = ''


    modalCadastrar.style.display = 'none'

})

function updateUser(id, nome, email, endereco, nascimento) {
    const users = getUsers()

    const index = users.findIndex(user => user.id === id)

    users[index] = {id, nome, email, endereco, nascimento}

    saveUsers(users)
    displayUsers()
}

function deleteUsers(id) {
    const confimacao = confirm("deseja realmente exclur este usuario?")

    if (confimacao) {
        let users = getUsers()
        users = users.filter(user => user.id !== id)
        saveUsers(users)
        displayUsers()
    }
}

function filterUsers() {
    let btnFiltrar = document.getElementById('btnfiltrar')
    let filtro = document.getElementById('filtro')

    btnFiltrar.addEventListener('click', () => {
        const users = getUsers()
        // obtendo o id ditigado no campo input
        const userId = parseInt(filtro.value) 

        const user = users.find(user => user.id === userId)

        if (user) {
            alert(`ID: ${user.id}\nNome: ${user.nome}\nEmail: ${user.email}\nEndereço: ${user.endereco}\nNascimento: ${user.nascimento}`);
        } else {
            alert('Não encontrado!')
        }
    })
}

filterUsers()

window.onload = function() {
    displayUsers()
}

