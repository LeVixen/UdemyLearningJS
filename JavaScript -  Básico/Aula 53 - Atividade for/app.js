const elements = [
   { tag: 'p', text: 'Frase 1' },
   { tag: 'div', text: 'Frase 2' },
   { tag: 'footer', text: 'Frase 3' },
   { tag: 'section', text: 'Frase 4' },
];

let container = document.querySelector('.container');

elements.forEach(element => {
   const addElement = document.createElement(element.tag);
   addElement.innerText = `${element.text}`
   container.appendChild(addElement);
});