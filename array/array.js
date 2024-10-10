let comida = ["pizza", "hamburguer", "batata"]
let meses = ["jan", "fev", "marc"]

comida.push("chocolate") // adicionar no final

comida.pop() // retira o ultimo elemento

comida.shift() // retira o primeiro elemento

comida.unshift("biscoito", "maça") // adicionar elementos no inicio

comida.splice(0, 1) // passa a posição do elento inicial e quantos remover apos o elemento

let mesesBackup = meses.slice() // copiar um array
let mesesBackupDefinido = meses.slice(0,2) // copiar um array definindo quantos copiar

let comidaBackup = [...comida, "uva", "danone", "refri"] // spreed operator, copia o array e adiciona no final

meses[0] = "dez" // modificar vetor pelo index

document.write(meses + " | ")
document.write(mesesBackupDefinido + " | ")
document.write(mesesBackup + " | ")
document.write(comida + " | ")
document.write(comidaBackup + " | ")
document.write(comidaBackup[0]) // acessar vetor pelo index
