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

