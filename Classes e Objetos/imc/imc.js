import { Pessoa } from './Pessoa.js'

const pessoa1 = new Pessoa('Keven', 70.0, 1.78);
const pessoa2 = new Pessoa('Keven', 70.0, 1.78);

// usando o get
console.log(pessoa1.imc);
console.log(Pessoa.totalPessoa);

// usar npm init para conseguir modularizar o codigo

// precisa indicar no html type module