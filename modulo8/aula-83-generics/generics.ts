export { };

function returnRandomElements<T> (items: T[]): T {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(returnRandomElements<number>(numeros));

let countries = ['Brasil', 'Alemanha', 'EUA', 'Inglaterra'];
console.log(returnRandomElements<string>(countries));


let elements = ['Brasil', 2, 3, 4, 5, 'EUA', 'Inglaterra'];
console.log(returnRandomElements<string | number>(elements));

console.log('-'.repeat(50));

function showElementsOf<T>(array: T[]): void {
    array.forEach(element => console.log(element));
}

showElementsOf<any>(elements);