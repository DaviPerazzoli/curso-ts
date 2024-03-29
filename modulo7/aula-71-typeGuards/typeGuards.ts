export { }

// typeof
type alfanumerico = string | number;

const exibirTipo = (a: alfanumerico, b: alfanumerico) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }

    throw new Error('Argumentos inválidos: Ambos os argumentos devem ser númericos ou literais.')
}

console.log(exibirTipo('Davi', 'Perazzoli'))
console.log(exibirTipo(7, 5));
// console.log(exibirTipo(7, '5')); //! erro

// instanceof

class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string) {
        this.nome = nome;
        this.marca = marca
    }

}

class Moto {
    nome: string;
    ano: number;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano
    }

}

const detalhesVeiculo = (veiculo: Carro | Moto) => {
    if (veiculo instanceof Carro){
        return `O nome do carro é ${veiculo.nome} e a marca é ${veiculo.marca}`;
    } else if (veiculo instanceof Moto) {
        return `O nome da moto é ${veiculo.nome} e o ano é ${veiculo.ano}`;
    }
}

const carro = new Carro('Gol', 'Volkswagen');

const moto = new Moto('CDL', 2020);

console.log(detalhesVeiculo(carro))
console.log(detalhesVeiculo(moto))

// in

interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string){
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal {
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string){
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

const nadar = (grupo: string) => {
    console.log(`O ${grupo} está nadando...`)
}

const voar = (grupo: string) => {
    console.log(`O ${grupo} está voando...`)
}

const mover = (animal: Animal) => {
    if('corPeixe' in animal) {
        nadar((animal as Peixe).grupo);
    } else if ('corPena' in animal) {
        voar((animal as Passaro).grupo);
    }
}

mover(new Peixe('peixe', 'laranja'));
mover(new Passaro('passaro', 'branco'));