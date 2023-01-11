
// ? Primitivos (imutáveis) - string, number, boolean, undefined, null (bigInt, symbol) - Valores copiados 
var a = 'A';
var b = a; // * Cópia
console.log(a, b);
var a = 'B';
console.log(a, b);


// ? Referencia (Mutável) - array, object, function - Valores passados por referência
let c = [1, 2, 3];
let d = [...c]; // * spread operator  - copiando o valor de c e colocando o d com [...c]
let e = d;

console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

c.push('Vinicius');
console.log(c, e);

