export { }

// public

class Estudante {
    codigo: number;
    nome: string;
    
    constructor(codigo: number, nome: string){
        this.nome = nome;
        this.codigo = codigo;
    }
}

const estudante = new Estudante(8989, 'Davo');

console.log(estudante.codigo);
console.log(estudante.nome);

// private

class Estudante_02 {
    codigo: number;
    nome: string;
    private idade: number;
    
    constructor(codigo: number, nome: string, idade: number){
        this.nome = nome;
        this.codigo = codigo;
        this.idade = idade;
    }

    retornarDados() {
        return (
        `Código do Aluno: ${this.codigo}\r\nNome do Aluno: ${this.nome}\r\nIdade do Aluno: ${this.idade}`
        );
    
    }
}


const estudante02 = new Estudante_02(57, 'Davio', 18);

//console.log(estudante.idade) //! erro
console.log(estudante02.retornarDados());

// protected

class Estudante_03 {
    codigo: number;
    protected nome: string;
    
    constructor(codigo: number, nome: string){
        this.nome = nome;
        this.codigo = codigo;
    }
}

class Pessoa extends Estudante_03 {
    private curso: string;

    constructor(codigo: number, nome: string, curso: string){
        super(codigo, nome);
        this.curso = curso;
    }

    retornarDados() {
        return (
        `Código do Aluno: ${this.codigo}\r\nNome do Aluno: ${this.nome}\r\nMatéria do Aluno: ${this.curso}`
        );
    }
}

const pessoa = new Pessoa(11223123, 'Davizio Perazzoli', 'CCO');

console.log(pessoa.retornarDados());

// readonly

class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(2006, 1, 28));
console.log(funcionario.dataNascimento.toLocaleDateString())

// Outro exemplo

class Funcionario_02 {
    nome: string;
    readonly codigo: number;

    constructor(nome: string, codigo: number){
        this.nome = nome;
        this.codigo = codigo;
    }

    // alterarCodigo(codigo: number) {
    //     this.codigo = codigo; //! erro
    // }
}

const func = new Funcionario_02('Davi Fernando', 12112221);

func.nome='Fabio';
console.log(func);

// outro exemplo

interface IFuncionario {
    codigo: number;
    nome: string;
}

const funcionario_01: Readonly<IFuncionario> = {
    codigo: 1101001,
    nome: 'Gigachad',
};

// funcionario_01.codigo = 12312; //! erro

const funcionario_02: IFuncionario = {
    codigo: 1101001,
    nome: 'Gigachad',
}

funcionario_02.codigo = 12312;