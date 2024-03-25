function somarNumeros (...numeros: number[]): number {
    let soma: number = 0;

    numeros.forEach(num => soma += num);

    return soma;
}


console.log(somarNumeros(10, 20, 30, 40));