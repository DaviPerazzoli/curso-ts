export { }

const nome: unknown = 'Davi';
const nomeString: string = String(nome);
const nomeString1: string = nome as string;
const nomeString2: string = <string>nome;
console.log(nomeString)
console.log((nome as string).toUpperCase());

const carro: unknown = 'corolla'

const tamanhoCarro: number = (<string>carro).length;