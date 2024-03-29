export { };

interface Usuario {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
}

// type UsuarioOpcional = {
//     nome?: string;
//     endereco?: string;
//     telefone?: string;
//     idade?: number;
// }

type UsuarioOpcional = {
    [P in keyof Usuario]?: Usuario[P];
}

// type UsuarioReadonly = Readonly<Usuario>;

type UsuarioReadonly = {
    readonly [P in keyof Usuario]: Usuario[P];
}

const optionalUser: UsuarioOpcional = {
    nome: 'Davi',
    idade: 18
};

const readonlyUser: UsuarioReadonly = {
    endereco: 'avenida',
    nome: 'Oswald',
    telefone: '49999',
    idade: 45
};

// readonlyUser.endereco = 'oi' //! erro

console.log(optionalUser);
console.log(readonlyUser);

// Exemplo 02 - Outros tipos avançados

interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
}

type Artigo = Omit<Livro,'numeroPaginas' | 'preco'> & {
    nota: 1 | 2 | 3 | 4 | 5;
};

const artigo: Artigo = {
    titulo: 'Baleias azuis',
    autor: 'Baleio azul',
    nota: 4
};

interface HQ extends Omit<Livro, 'titulo'> {
    titulo: string | null;
    id: symbol;
}

const hq: HQ = {
    autor: 'mauricio',
    id: Symbol('id'),
    numeroPaginas: 200,
    preco: 20,
    titulo: null
};

const hq2: HQ = {
    autor: 'marcos',
    id: Symbol('id'),
    numeroPaginas: 100,
    preco: 15,
    titulo: 'Cebolinha'
};

console.log(artigo);
console.log(hq.id == hq2.id) // prints false