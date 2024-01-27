
let max = 10;
let numeroSecreto = generarNumeroSecreto()

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    //let numeroDeUsuario = document.querySelector('input')
    let numeroDeUsuario = document.getElementById('valorUsuario').value
    console.log(numeroDeUsuario)
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*max)+1;
}

asignarTextoElemento('h1', '¡Juego del número secreto!')
asignarTextoElemento('p', `Indica un número del 1 al ${max}`)