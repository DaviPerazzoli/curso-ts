export { };

// get

class Quadrado {
    private _altura: number = 6;
    private _largura: number = 10;

    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}

console.log(new Quadrado().calcularQuadrado);

// set

class Pessoa {
    nome: string;

    set nomePessoa(nome: string) {
        this.nome = nome;
        console.log('nome mudado para', nome);
    }
}

new Pessoa().nomePessoa = 'ronaldo';

// get denso

class Estudante {
    private _nome: string = 'Davi Perazzoli';
    private _semestre: number;
    private _curso: string;

    get nomeEstudante(): string {
        return this._nome;
    }
}

console.log(new Estudante().nomeEstudante)

// set denso

class Estudante_01 {
    _nome: string = 'Davi Fernando Perazzoli';
    _semestre: number;
    _curso: string;
    
    constructor(nome: string, semestre: number, curso: string){
        this._nome = nome;
        this._semestre = semestre;
        this._curso = curso;
    }

    public get cursos(): string {
        return this._curso;
    }

    public set cursos(curso) {
        this._curso = curso;
    }
}

const estudante = new Estudante_01('Claudio', 4, 'CCO');
console.log(estudante.cursos);
estudante.cursos = 'ADS';

console.log(estudante.cursos);