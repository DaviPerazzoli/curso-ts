// Throw Exception

function error(message: string): never {
    throw new Error(message);
}
console.log(error('Erro de mensagem - 01'));

// Implicito

function rejectMessage() {
    return error('Error de mensagem - 02');
}

console.log(rejectMessage());

// Loop infinito

const loopInfinito = () => {
    while (true){
        console.log('Oi, devs');
    }
}

// console.log(loopInfinito()) //! Loop infinito

// Never x Void

const algumaCoisaVoid: void = null;
// const algumaCoisaNever: never = null; //! erro