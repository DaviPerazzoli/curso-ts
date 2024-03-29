// Ex01

export { };

type Cidade = NomeCidade | CidadeCoordenada;

type NomeCidade = 'São Paulo' | 'Rio de Janeiro' | 'Salvador' | 'Belo Horizonte';

interface CidadeCoordenada {
    x: number;
    y: number;
}

interface Pessoa {
    localNascimento: Cidade;
    residenciaAtual: Cidade;
}

const pessoa = {
    localNascimento: 'Rio de Janeiro',
    residenciaAtual: { x: 10, y: 20}
} satisfies Pessoa;

console.log(pessoa.localNascimento.toUpperCase());