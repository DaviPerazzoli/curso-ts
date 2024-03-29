export { }

function exibirPrecoFInal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1-desconto);

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}


const descontoFinal = exibirPrecoFInal(100, 0.05, true) as string;
let descontoFinal2: string = exibirPrecoFInal(100, 0.05, false) as string;

// descontoFinal2 = descontoFinal2.concat('oi') //! da erro pq essa bosta é ruim

console.log(descontoFinal);
console.log(typeof descontoFinal2);

// Ex2

// type Humano = {
//     nome: string;
//     idade: number;
//     idioma: string;
// }

// const humano = {
//     idade: 36,
//     idioma: 'Português'
// };

// const humano2 = humano as Humano;

// console.log(humano2.nome);

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {
    idade: 36,
    idioma: 'Português'
};

// const humano2: Humano = humano; //! erro

// console.log(humano2.nome);