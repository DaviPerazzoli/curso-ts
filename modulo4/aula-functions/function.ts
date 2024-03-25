function somarDoisNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

const resultado = somarNumeros(2,2);

const saudar = function( mensagem: string) {
    return mensagem;
}

console.log(saudar('Olá devs.'))

const saudar_02 = (mensagem: string) => {
    return mensagem;
}

const saudar_03 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(saudar_03('oi'));