// variavel composta
let pessoa = {
    nome : 'keven',
    idade : 20,
    peso : 70.3456,
    doador : false,
    descricao : [],
    preco : 1.99
}

pessoa.descricao = ['jovem'] // adicionar ao array do objeto

document.write(new Intl.NumberFormat('pt-BR').format(pessoa.preco) + '<br>') // formatar no escopo de dinheiro

document.write(`preço total: ${pessoa.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <hr>`) // outro tipo de formatar dinheiro/porcentagem/decimal

document.write(pessoa.descricao)
document.write(pessoa.peso.toFixed(2)) // limita o numero de casas de decimais
