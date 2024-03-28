export { }
// interface simples

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

const exibirNomeCompleto = (pessoa: Pessoa): string => {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
}

const davi: Pessoa = {
    nome: 'Davi',
    sobrenome: 'Perazzoli',
    idade: 18
};

console.log(exibirNomeCompleto(davi));

// propriedades opcionais

interface Livro {
    titulo: string;
    autor: string;
    paginas?: number;
}

const livro: Livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin'
}

console.log(livro);

// propriedade somente de leitura e opcionais

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969
}

carro.ano = 1972;
// carro.modelo = 'Fusca novo' //! erro

console.log(carro);

// implements Class

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean){
        this.estaVivo = estaVivo;
        this.idade = idade;
        this.nome = nome;
    }

    comer(tipoComida: string): void {
        console.log(`O gato ${this.nome} comeu ${tipoComida}`);
    }
}

const gato = new Gato('Totó', 10, true);

console.log(gato);
gato.comer('carne');

// interface vs type alias

interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string;
    sobrenome: string;
    idade: number;
}