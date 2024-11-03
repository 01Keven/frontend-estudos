export class Pessoa {   
    _nome
    _peso
    _altura
    _imc
    static totalPessoa = 0
    // ES6 usa o # -> para privar variaveis (#saldo = 0)
    // encapsulamento de objetos para Privado
    constructor(nome, peso, altura) {
        this._nome = nome
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this.altura * this.altura)
        Pessoa.totalPessoa += 1

    }

    // getter para acessar o nome
    get nome() {
        return this._nome
    }

    // setter para alterar o nome com validação
    set nome(novoNome) {
        if (novoNome.length > 0) {
            this._nome = novoNome
        } else {
            console.log('nome nao pode ser vazio');
        }
    }

    get peso() {
        return this._peso
    }

    // maneira mais convencional de setar um atributo
    set peso(novoPeso) {
        this._peso = novoPeso
    }

    get altura() {
        return this._altura
    }

    set altura(novaAltura) {
        if (novaAltura.length > 0) {
            this._nome = novaAltura
        } else {
            console.log('altura nao pode ser vazio');
        }
    }

    get imc() {
        return "seu imc: " + this._imc.toFixed(2)
    }

    get totalPessoa() {
        return Pessoa.totalPessoa
    }
}