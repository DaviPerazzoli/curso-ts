export { }

abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string){

    }

    abstract retornarSalario(): number;

    get nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.nomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}

// const funcionario = new Funcionario('Glaucia', 'Lemos');

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number){
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number){
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas
    }
}

const davi = new FuncionarioCLT('Davi', 'Perazzoli', 19000);
const david = new FuncionarioPJ('David', 'Fernando', 150, 160);

console.log(davi.emitirContraCheque());
console.log(david.emitirContraCheque());