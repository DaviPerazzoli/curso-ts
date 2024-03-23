// number

let num1: number = 23.0;
let num4: number = 0x78cf;
let num2: number = 0o577;
let num3: number = 0b10001010;

console.log('Number - Ponto flutuante '+num1)
console.log('Number - Octal '+num2)
console.log('Number - Binário '+num3)
console.log('Number - Hexa '+num4)

// bigint

let big1: bigint = 990132131239049012940192n;
let big2: bigint = 0b01000000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x9901321aaaaa390ccc012940192n;
let big4: bigint = 0o777700000000000000034n;

console.log(big1);
console.log(big2);
console.log(big3);
console.log(big4);