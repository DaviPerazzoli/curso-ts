export {}

interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
    conta: 123456,
    agencia: 123,
    banco: 'Brasil',
    nome: 'Davi',
    email: 'Davi@gmail.com',
    cpf: 11111111111
}