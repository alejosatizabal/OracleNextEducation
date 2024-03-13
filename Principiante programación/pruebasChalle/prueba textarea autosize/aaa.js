// Función para ajustar la altura del textarea basado en su contenido
function ajustarAlturaTextarea() {
    var textarea = document.getElementById('textarea');
    textarea.style.height = 'auto'; // Resetear la altura a 'auto' para obtener el tamaño deseado
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar la altura al contenido
}

// Llamar a la función de ajuste de altura cuando se carga la página y cuando el contenido del textarea cambia
document.addEventListener('DOMContentLoaded', ajustarAlturaTextarea);
document.getElementById('textarea').addEventListener('input', ajustarAlturaTextarea);
