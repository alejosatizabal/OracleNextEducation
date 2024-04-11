const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".resultado");

const areaResultado = document.querySelector(".area-resultado");

const btnCopiar = document.querySelector(".btn-copiar");
const muneco = document.querySelector(".contenedor-muneco");
const vacio = document.querySelector(".contenedor-vacio");

var textareap = document.getElementById('textareap');
var main = document.querySelector("main");
var seccionResultado = document.querySelector(".seccion-resultado");
var contenedorResultado = document.querySelector(".contenedor-resultado");

//btnCopiar.style.display = "none";
//muneco.style.display = "none";
mensaje.style.display = "none";

console.log("mensaje: " + window.getComputedStyle(mensaje, null) );

textArea.addEventListener('input', function handleChange(event) {
    setTimeout(() => {
        let temporal
        temporal = event.target.value.toLowerCase()
        textArea.value = limpiarTexto( temporal )
     }, 150)
    //textArea.value = event.target.value.toLowerCase()
});

function limpiarTexto(cadena){
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','ç':'c'};

    // Quitar acentos
    // cadena = cadena.split('').map( letra => acentos[letra] || letra).join('').toString()

    // Quitar caracteres especiales
    cadena = cadena.replace(/[\´\`!@#$^&%*()¿¡°¬\-+=\[\]\\';,./{}|":<>?~_]/g, '')

    cadena = cadena.normalize("NFD").replace(/[\u0300-\u0302]/g, "")

    cadena = cadena.normalize("NFD").replace(/[\u0304-\u036f]/g, "")

	return cadena;
}

function respuestaVacia() {
    btnCopiar.style.display = "none";
    mensaje.style.display = "none";
    screen.width > 768 ? muneco.style.display = "flex" : null
    // muneco.style.display = "flex";
    vacio.style.display = "flex";

    // console.log('screen.width :>> ', screen.width);
}

function respuestaLlena() {
    btnCopiar.style.display = "block";
    mensaje.style.display = "block";
    muneco.style.display = "none";
    vacio.style.display = "none";
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado

    textareap.value = textoEncriptado
    ajustarAlturaTextarea()
    
    //areaResultado.style.height = `${133 + parseInt((mensaje.value.length / 62)*25)}px`

    //mensaje.style.height = 'auto'; // Restablecer la altura a auto para obtener el tamaño correcto
    //mensaje.style.height = (mensaje.scrollHeight + 133) + 'px';
    //areaResultado.style.height = (mensaje.scrollHeight + 133) + 'px';

    textArea.value = ""
    //mensaje.style.backgroundImage = "none"
    respuestaLlena()

    console.log("mensaje: " + window.getComputedStyle(mensaje, null)['line-height'] );
    console.log("mensaje: " + window.getComputedStyle(mensaje, null)['height'] );
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], `_${matrizCodigo[i][1]}_`)
        }
    }
    return stringEncriptada.replaceAll("_","")
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    respuestaLlena()
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptada.
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], `_${matrizCodigo[i][0]}_`)
        }
    }

    return stringDesencriptada.replaceAll("_","")
}

function copiarTexto() {
    //mensaje.style.height = "500px" // prueba
    // Get the text field
    //var copyText = document.getElementById("myInput");
    var copyText = document.querySelector('.resultado');
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    //alert("Texto copiado: " + copyText.value);

    textArea.value = copyText.value

    console.log('mensaje.value.length :>> ', mensaje.value.length);
    console.log(mensaje.value);
    // 62
    console.log('suma :>> ', parseInt((mensaje.value.length / 62)*25));
    //areaResultado.style.height = `${133 + parseInt((mensaje.value.length / 62)*25)}px`
    //mensaje.style.height = "500px"
    console.log('areaResultado.style.height :>> ', areaResultado.style.height);

    // mensaje.style.height = '133px';
    // areaResultado.style.height = '133px';

    mensaje.value = "El texto fue copiado al portapapeles"
    setTimeout(() => {
        if( mensaje.value == "El texto fue copiado al portapapeles" ){
            respuestaVacia()
        }
     }, 5000)
  }

function lowCase() {
    console.log('textArea.value :>> ', textArea.value);
    let textoIngresado = textArea.value.toLowerCase()
    textArea.value = textoIngresado
}

// Función para ajustar la altura del textarea basado en su contenido
function ajustarAlturaTextarea() {

    textareap.style.height = 'auto'; // Resetear la altura a 'auto' para obtener el tamaño deseado

    main.style.height = (700 + textareap.scrollHeight) + 'px';
    
    textareap.style.height = textareap.scrollHeight + 'px'; // Ajustar la altura al contenido

    seccionResultado.style.height = textareap.scrollHeight + 'px'
    areaResultado.style.height = textareap.scrollHeight + 'px'
    contenedorResultado.style.height = textareap.scrollHeight + 'px'
    mensaje.style.height = textareap.scrollHeight + 'px'
}

// Llamar a la función de ajuste de altura cuando se carga la página y cuando el contenido del textarea cambia
document.addEventListener('DOMContentLoaded', ajustarAlturaTextarea);
// document.getElementById('textareap').addEventListener('input', ajustarAlturaTextarea);
document.querySelector('.resultado').addEventListener('input', ajustarAlturaTextarea);
