export { }

// static properties

class Funcionario {
    static contratacoes: number = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string){
        Funcionario.contratacoes++;
    }
}

const funcionario_01 = new Funcionario('Davi', 'Perazzoli', 'Estudante');
const funcionario_02 = new Funcionario('Davi', 'Fernando', 'Dev');

console.log(Funcionario.contratacoes);

// static methods

class Funcionario_01 {
    private static _contratacoes: number = 0;

    constructor(private nome: string, private sobrenome: string, private titulo: string){
        Funcionario_01._contratacoes++;
    }

    static get contratacoes() {
        return Funcionario_01._contratacoes;
    }
}

const funcionario_011 = new Funcionario_01('Davi', 'Perazzoli', 'Estudante');
const funcionario_012 = new Funcionario_01('Davi', 'Fernando', 'Dev');

console.log(Funcionario_01.contratacoes);