
let numeroMaximo = 4;
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    
    //console.log(listaNumerosSorteados);
    //console.log("max: " + Math.max( ...listaNumerosSorteados ));

    //let numeroDeUsuario = document.querySelector('input')
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // Se selecciona por Id
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //let valorCaja = document.querySelector('#valorUsuario') // Se selecciona por Id con querySelector
    //valorCaja.value = ''
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if( listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon los números posibles');
        document.querySelector('#intentar').setAttribute('disabled','true');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#valorUsuario').value = '';
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); // El # se usa para ingresar un Id en querySelector
}

condicionesIniciales();