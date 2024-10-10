let carros = ["carro1", "carro2", "carro3"]

// contando de 1 a 5
for (let index = 1; index <= 5; index++) {
    console.log(index + " ");
}

// percorrendo por um array e mostrando o elemento contido na mesma
for (let index = 0; index < carros.length; index++) {
    const element = carros[index];
    console.log(element); 
}

// percorrer um array e mostrar seus elementos
carros.forEach( (carros) => {
    console.log(carros);
})

// percorrer um array e mostrar seus elementos com indice
carros.forEach( (carros, i) => {
    console.log(` ${i}-> ${carros} `);
})

// uso do while para mostrar apenas uma vez a quantidade de carros
let contador = 0

while (contador < carros.length) {
    contador ++
}
console.log(`quantidade de carros: ${contador}`)

    