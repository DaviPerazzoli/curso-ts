export { }

// Básico

const pessoa = {
    nome: 'Davi',
    sobrenome: 'Perazzoli',
    idade: 18,
    funcao: 'Estudante'
};

console.log(pessoa);

// object como params de função

function onboarding01(funcionario: {nome:string}){
    return 'Seja bem vindo '+funcionario.nome;
}

console.log(onboarding01({nome: 'Davi'}));

// object nomeado

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa){
    return (
        'Seja bem vindo ' +
        pessoa.nome +
        '! ' +
        'Sua função é ' + 
        pessoa.funcao + 
        '.'
    );
}

console.log(onboarding02({ nome: 'Davi', funcao: 'estudante'}));

// type alias

type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string
}

function onboarding03(pessoa: Pessoa03){
    return (
        'Seja bem vindo ' +
        pessoa.nome +
        '! ' +
        'Sua função é ' + 
        pessoa.funcao + 
        '. E sua linguagem é '+
        pessoa.linguagem
    );
}
console.log(onboarding03({ nome: 'Davi', funcao: 'estudante', linguagem: 'Javascript'}));


// optional no object

interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
}

function onboarding04(pessoa: Pessoa04){
    return (
        'Seja bem vindo ' +
        pessoa.nome +
        '! ' +
        'Sua função é ' + 
        pessoa.funcao + 
        '. E sua linguagem é '+
        pessoa.linguagem
    );
}
console.log(onboarding04({ nome: 'Davi', funcao: 'estudante', linguagem: 'Javascript'}));

// propriedade 'readonly' (para que os devs não modifiquem a propriedade)

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
}

function onboarding05(pessoa: Pessoa05){
    return (
        'Seja bem vindo ' +
        pessoa.nome +
        '! ' +
        'Sua função é ' + 
        pessoa.funcao + 
        '. E sua linguagem é '+
        pessoa.linguagem +
        '. E seu email é ' +
        pessoa.email
    );
}
console.log(onboarding05({ nome: 'Davi', funcao: 'estudante', linguagem: 'Javascript', email:'davi@gmail.com'}));

// tipos de extensões (heranças)

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: 'Davi',
    sobrenome: 'Perazzoli',
    idade: 18
};

// Tipos de interseções

interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}

type Animal = Cachorro & Gato;

const animal: Animal = {
    tipo: ''
}

// Generic Objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: boolean;
}

const usuario: Usuario = {
    nome: 'Davi Perazzoli',
    email: 'davi@gmail.com'
};


const admin: Admin = {
    nome: 'Davi Perazzoli',
    email: 'davi@gmail.com',
    admin: true
};

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

// function acessarSistema(usuario: Usuario): Usuario {
//     return usuario;
// }

// console.log(acessarSistema(usuario));