// ? IIFE - Immediately invoked function expression
// * Maneira comun
function qualquerCoisa() {
   console.log('salve');
}
qualquerCoisa();


// * IIFE - Exemplo
(function () {
   const name = 'luiz';
   console.log(name)
})();

const name = 'pedro';