// Tipo any

const a: any = 888;
const b: any = ['Davi'];

const c = a + b;
console.log(c);

// implícito

let frase;
frase = 'Oi pessoal';

// Quando usar?

const formulario: {[campoFormulario: string]: any} = {
    nome: 'Glaucia',
    sobrenome: 'lemos',
    idade: 34
}

console.log(formulario);