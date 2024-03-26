// Exemplo 01

class Animal {
    mover(distancia=0){
        console.log(`Animal se moveu: ${distancia} metros.`);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log('Au au au');
    }
}

const cachorro = new Cachorro();

cachorro.latir();
cachorro.mover(100);
cachorro.mover(150);

// Exemplo 02

class Pessoa {
    constructor(private nome: string, private sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

class Funcionario extends Pessoa {
    constructor(nome: string, sobrenome: string, private funcao: string){
        super(nome, sobrenome);
        this.funcao = funcao;
    }
}

const funcionario = new Funcionario('Davi', 'Perazzoli', 'Estudante');

console.log(funcionario.nomeCompleto);