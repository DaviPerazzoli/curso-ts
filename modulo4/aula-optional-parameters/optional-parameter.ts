// Optional Parameter

const informarDadosPessoa = (nome: string, idade: number, email?: string): void => {
    console.log('Nome: ' + nome + '\r\nIdade: ' + idade);
    if (email !== undefined) console.log('Email: ' + email);
}

informarDadosPessoa('Davi', 18, 'davi@gmail.com');