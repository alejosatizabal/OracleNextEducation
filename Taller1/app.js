// Desafío 1
/*
alert('¡Bienvenida y bievenido a nuestro sitio web!');

let nombre = 'Luna';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert('¡Error! Completa todos los campos');
let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);
nombre = prompt("Nombre:");
edad = prompt("Edad:");
if(edad>18){
    alert(nombre + ' ¡Puedes obtener tu licencia de conducir!')
}
*/


//alert('Hola mundo');
//console.log('Hola mundo');

/*
// Desafio 2
let diaSemana = nombre = prompt("¿Qué día de la semana es?");

if(diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
}
//...
*/

///*

let numeroMaxPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaxPosible) + 1;
// parseInt(Math.random() * 3) + 1; Entre 1 y 3

let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maxIntentos = 6;

//console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    //console.log(numeroSecreto);
    numeroUsuario = parseInt(prompt(`Dame un número entre 1 y ${numeroMaxPosible}:`));

    //alert('El número ingresado fue: ' + numeroUsuario);

    console.log(typeof(numeroUsuario));
    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto){
        //alert('Acertaste el número');
        //alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${palabraVeces}`); // Dentro del símbolo dolar puede ir código JavaScript, se llama Template String
        alert(`Acertaste, el número es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); 
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('El número secreto es mayor');
        }
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        palabraVeces = 'veces';
        if(intentos > maxIntentos){
            alert(`Número máximo de intentos, llegaste: ${maxIntentos}`);
            break;
        }
        //alert('No acertaste');
    }
    //*/
}