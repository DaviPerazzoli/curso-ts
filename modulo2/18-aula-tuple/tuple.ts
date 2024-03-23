// Uso simples

let pessoa: [string, string, number];
pessoa = ['Davi', 'Estudante', 18];

console.log(pessoa);

// Acessando o valor da Tupla

console.log(pessoa[1]);

// Com spread operator

let listaFrutas: [string, ...string[], number] = ['Laranja', 'Maçã', 'Abacaxi', 'Pera', 0];

console.log(...listaFrutas);

// Labelled Tuples

let pessoa2: [nome: string, cargo: string, idade: number];
pessoa2 = ['Davi', 'Estudante', 18];

console.log(pessoa2[0]);