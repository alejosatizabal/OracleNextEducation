let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let max = 100;

let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';
parrafo.innerHTML = `Indica un número del 1 al ${max}`;