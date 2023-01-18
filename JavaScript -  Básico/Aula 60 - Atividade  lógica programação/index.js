
// ? Utilizando if comum
function max1(x, y) {
   if (x > y) {
      console.log(x);
   } else {
      console.log(y)
   }
}
max1(1, 3);

// ? Utilizando if compactado
function max1(x, y) {
   if (x > y) console.log(x); return console.log(y)
}
max1(1, 5);

// ? Utilizando operador ternário
function max2(x, y) {
   x > y ? console.log(x) : console.log(y);
}
max2(5, 10);

// ? Utilizando arrow function
const max3 = (x, y) => x > y ? x : y;
console.log(max3(10, 15));
