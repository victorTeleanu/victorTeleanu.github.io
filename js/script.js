// 1. MODO OSCURO / CLARO

// Configuración inicial de la clase de tema antes de renderizar
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.className = 'dark-mode'; // Configura dark-mode inmediatamente
}
window.onload = function () {
    claroOscuro();
    writeText();
}
// Esperar a que cargue la página para inicializar el evento de alternancia y la imagen
function claroOscuro() {
    const modeIcon = document.getElementById('mode-toggle');

    // Establecer la imagen correcta según el tema almacenado
    if (savedTheme === 'dark') {
        modeIcon.src = 'files/modo_oscuro.jpg';
    } else {
        modeIcon.src = 'files/modo_claro.jpg';
    }

    // Evento de clic para alternar entre modos
    modeIcon.addEventListener('click', () => {
        if (document.documentElement.className === 'dark-mode') {
            document.documentElement.className = ''; // Quita dark-mode
            modeIcon.src = 'files/modo_claro.jpg';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.className = 'dark-mode'; // Activa dark-mode
            modeIcon.src = 'files/modo_oscuro.jpg';
            localStorage.setItem('theme', 'dark');
        }
    });
}
/* Obtener el tema guardado en el almacenamiento local
const savedTheme = localStorage.getItem('theme');

// Aplicar el tema si es dark
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
}
document.addEventListener('DOMContentLoaded', function() {



    // Obtener el ícono para el cambio de modo
    const modeIcon = document.getElementById('mode-toggle');
    if (savedTheme === 'dark') {
        modeIcon.src = 'files/modo_oscuro.jpg';
    } else {
        modeIcon.src = 'files/modo_claro.jpg';
    }

    // Cambiar entre modo oscuro y claro al hacer clic
    modeIcon.addEventListener('click', function() {
        const isDark = document.documentElement.classList.contains('dark-mode');

        if (isDark) {
            document.documentElement.classList.remove('dark-mode');
            modeIcon.src = 'files/modo_claro.jpg';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark-mode');
            modeIcon.src = 'files/modo_oscuro.jpg';
            localStorage.setItem('theme', 'dark');
        }
    });
}); */



// 2. ANIMACIÓN DE TIPEO

// Función para animar el texto
function writeText() {
    const title = "Victor Teleanu";
    const text = "FULL STACK DEVELOPER";
    const titleElement = document.getElementById('title');
    const holder = document.getElementById('holder');

    const fullText = title + " " + text; // Concatenamos ambos textos
    let currentIndex = 0;

    function typeText() {
        if (currentIndex < fullText.length) {
            // Añadir un carácter al contenido actual
            if (currentIndex < title.length) {
                titleElement.innerHTML = fullText.substring(0, currentIndex + 1);
            } else {
                holder.innerHTML = fullText.substring(title.length, currentIndex + 1);
            }
            currentIndex++;
            setTimeout(typeText, 100); // Continuar con la animación
        }
    }

    typeText(); // Iniciar la animación
}