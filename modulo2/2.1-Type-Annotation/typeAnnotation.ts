// Variáveis
let nome: string = 'Davi';
console.log(nome);

// Arrays
let animais: string[] = ['Elefante', 'Cachorro', 'Gato'];
console.log(animais);

// Objetos
let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = { nome: 'Toyota Ysaris Sedan', ano: 2019, preco: 70000};
console.log(carro);

// Funções
function multiplicarNumeros(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplicarNumeros(2,14));