export { }
// interface com extends

interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Caninos {
    cor: string;
    geneticamenteModificado: boolean;
}

interface Cachorro extends Animal, Caninos {
    raca: string;
}

const cachorro: Cachorro = {
    nome: 'Oswaldo',
    idade: 3,
    porte: 'Grande',
    raca: 'Golden Retriever',
    cor: 'Cinza',
    geneticamenteModificado: false
};

console.log(cachorro);

// Omit

interface Funcionario {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
    id: string;
    salario: string;
    linguagemProgramacao: string;
}

const davi: Desenvolvedor = {
    id: '123',
    nome: 'Davi',
    salario: '1000',
    linguagemProgramacao: 'TS'
}