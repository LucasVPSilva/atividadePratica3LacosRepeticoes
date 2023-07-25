
// Exercicio 1



/*

let maiorAltura = 0;
let menorAltura = 999999;


for (let index = 0; index < 5; index++) {
    let alturaPessoas = Number(prompt('Informe a altura: '));


    if (maiorAltura <= alturaPessoas) {
        maiorAltura = alturaPessoas;


    }
    if (menorAltura > alturaPessoas) {
        menorAltura = alturaPessoas;
    }

}


console.log(`A maior altura é ${maiorAltura}`);
console.log(`A menor altura é ${menorAltura}`);


*/

// Exercicio 2

/*

let altPedro = 150;
let altLucas = 110;
let contador = 0;

for (; altPedro > altLucas; contador++) {
    altPedro += 2;
    altLucas += 3;

}

console.log(contador);
console.log(altPedro);
console.log(altLucas);

*/

// Exercicio 3

/*

const numero = Number(prompt('Informe o numero a ser multiplicado: '));
const interacao = Number(prompt('Informe a quantidade de vezes:'));

for (let index = 1; index <= interacao; index++) {
    console.log(`${index} * ${numero} = ${index * numero} `);

}

*/


// Exercicio 4


/*

for (let index = 1; index < 250; index++) {
    if (index % 3 === 0) {

        console.log(`${index} é multiplo de 3`);
    }
    if (index % 5 === 0) {

        console.log(`${index} é multiplo de 5`);
    }

}

*/

// Exercicio 5

/*

const numeroInf = Number(prompt('Informe um numero inteiro positivo: '));
let contador = 0

for (let index = 0; index <= numeroInf; index++) {
    contador = index;
    document.write(`${contador}, `);

}
document.write(`Fim!.`);

*/

// Exercicio 6

/*

let i = 30; // variavel que guarda o primeiro numero da lista aser formada
//let contadorDeDividores = 0;

while (i >= 1) {
    let contador = 1;
    let contadorDeDividores = 0;
    while (contador <= i) {
        if (i % contador == 0) {
            contadorDeDividores++;
        }
        contador++;
    }
    if (contadorDeDividores == 2) {
        console.log(`[${i}]`);
    } else {
        console.log(`${i}`);
    }
    i--;
}

*/

// Exercicio 7

/*

let numeros = [11, -13, -10, -5, 33, -40, 16, -55, -3, 68];

let contagemPositivos = 0;

let contagemNegativos = 0;
let somaNumeros = 0;
let mediaNumeros = 0;

for (let index = 0; index <= 9; index++) {
  if (numeros[index] > 0) {
    contagemPositivos++;
  } else {
    contagemNegativos++;
  }
  somaNumeros += numeros[index];
  console.log(numeros[index]);
}

console.log(
  "Soma dos números:",
  somaNumeros,
  "e a média é de:",
  somaNumeros / 10
);

console.log(
  "Total de numeros positivos:",
  contagemPositivos,
  "e a porcentagem é de:",
  (contagemPositivos / 10) * 100
);
console.log(
  "Total de numeros negativos:",
  contagemNegativos,
  "e a porcentagem é de:",
  (contagemNegativos / 10) * 100
);

*/
