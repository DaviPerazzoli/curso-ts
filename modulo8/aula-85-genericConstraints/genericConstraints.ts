export { };

interface Pessoa {
    nome: string;
    idade: number;
}

interface Pessoa2 {
    nome: string;
    idade: number;
    cpf: string;
}

function getPersonOlderThan<T extends Pessoa>(people: T[], age: number): T[] {
    return people.filter(person => person.idade > age);
}

const pessoas: Pessoa2[] = [
    { nome: 'Davi', idade: 18, cpf: '11111'},
    { nome: 'otavio', idade: 34, cpf: '11111'},
    { nome: 'Davi', idade: 18, cpf: '11111'},
    { nome: 'Davi', idade: 18, cpf: '11111'},
    { nome: 'pedro', idade: 26, cpf: '11111'},
    { nome: 'Davi', idade: 18, cpf: '11111'}
];

console.log(getPersonOlderThan(pessoas, 25));

// Exemplo 2

function juntarObjetos<U extends object, V extends object>(objeto1: U , objeto2: V) {
    return {
        ...objeto1,...objeto2
    };
}

const pessoa = juntarObjetos(
    {
        nome: 'glaucia'
    },
    [1,2,3]
);

console.log(pessoa);

// Ex3

function prop<T, K extends keyof T> (objeto: T, chave: K) {
    return objeto[chave];
}

console.log(prop({nome: 'davi', idade: 18}, 'idade'));