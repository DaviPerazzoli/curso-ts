// Classes
export { }

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Davi', 'Perazzoli');

console.log(pessoa.nomeCompleto());

// Ex 02 Classe sem construtor

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

// Criar um objeto ou instância
const estudante = new Estudante();

// Inicializar o objeto
estudante.codigoEstudante = 8967;
estudante.nomeEstudante = 'Davi Perazzoli';

// Acessar campos:
console.log('Código do estudante: ' + estudante.codigoEstudante);
console.log('Nome do estudante: ' + estudante.nomeEstudante);


// Ex 03 Classe com construtor

class Estudante_01 {
    codigoEstudante: number;
    nomeEstudante: string;

    // Definir o construtor
    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    // Criar o método
    listarEstudante(): void {
        console.log(this.codigoEstudante);
        console.log(this.nomeEstudante);
    }
}

const estudante01 = new Estudante_01(90, 'Davi');

estudante01.listarEstudante();