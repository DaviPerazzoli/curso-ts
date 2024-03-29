export { }

type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
}

type Empresa = {
    nome: string;
    cnpj: number;
}

type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;
}

type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praça';
}

type EnderecoFinal<T> = T extends {endereco: string} ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua 2',
    cidade: 'SP',
    pais: 'Brasil'
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'rua'
};

console.log(enderecoEmpresa);
console.log(enderecoPessoa);

// Ex2

type FormatoArquivos = 
                |'png' 
                | 'jpg' 
                | 'gif' 
                | 'svg'
                | 'mp4'
                | 'mp3';

type FiltrarFormatoMedia<T> = T extends 'mp4' | 'mp3'? T : never;

type ArquivoAudio = FiltrarFormatoMedia<FormatoArquivos>

// const arquivoAudio: ArquivoAudio = 'gif'; //! erro