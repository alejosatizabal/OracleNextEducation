
const removeAccents = (str) => {
    //return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // return str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    // return str.normalize("NFD").replace(/[\u0300-\u036f&&[^\u00F1]]/g, "")
    return str.normalize("NFKD").replace(/[\u0300-\u036f&&[^\u00F1]]/g, "")
}

function limpiarTexto(cadena){
	// const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','ç':'c'};

    // Quitar acentos
    cadena = cadena.split('').map( letra => acentos[letra] || letra).join('').toString()

    // Quitar caracteres especiales
    cadena = cadena.replace(/[!@#$^&%*()+=\[\]\\';,./{}|":<>?~_]/g, '')

	return cadena;
}

let cadena = 'pingüino, La uña se me romṕió después de beber cachaça, especiales $%&/%&#('

//var resultado = removeAccents(cadena);

//console.log( resultado );
// console.log( quitarAcentos( cadena ) );
// console.log( ( limpiarTexto( cadena ) ).replace(/[!@#$^&%*()+=\[\]\\';,./{}|":<>?~_]/g, '') );
// console.log( limpiarTexto( cadena ) );

//console.log(cadena.normalize("NFD"));

//console.log( cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "") )

// console.log( cadena.normalize("NFD").replace(/[\u0300-\u0302]/g, "") )

// console.log( cadena.normalize("NFD").replace(/[\u0304-\u036f]/g, "") )

// console.log( cadena.normalize("NFD").replace(/[\u0300-\u0302&&\u0304-\u036f]/g, "") )

// console.log( caneda.normalize("NFKD").replace(/[\u0300-\u036f&&[^\u00F1]]/g, "") )

// console.log( cadena.normalize("NFD").replace(/[\u0300-\u036f&&[^\u0303]]/g, "") )

console.log('cadena :>> ', cadena);

// cadena = cadena.normalize("NFD").replace(/[\u0300-\u0302]/g, "")

// cadena = cadena.normalize("NFD").replace(/[\u0304-\u036f]/g, "")

cadena = cadena.normalize("NFD").replace(/[\u0300-\u0302]AND[\u0304-\u036f]/g, "")

console.log('cadena2 :>> ', cadena);