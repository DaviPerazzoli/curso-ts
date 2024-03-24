// Tipo Unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi, tudo bem?';

console.log(valorVariavel);

// Erro ao atribuir unknown a outros tipos

let valor1: boolean;

// valor1 = valorVariavel; //! erro

// Any e Unknown

let algoAny: any;
let algoUnknown: unknown;

// console.log(algoAny.toFixed(2)); //! erro no runtime
// console.log(algoUnknown.toFixed(2)); //! erro escrevendo

if(typeof algoUnknown === 'number'){
    console.log(algoUnknown.toFixed(2));
}