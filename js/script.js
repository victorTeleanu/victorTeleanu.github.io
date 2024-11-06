// 1. MODO OSCURO / CLARO

// Configuración inicial de la clase de tema antes de renderizar
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.className = 'dark-mode'; // Configura dark-mode inmediatamente
}

// Esperar a que cargue la página para inicializar el evento de alternancia y la imagen
window.onload = function() {
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
};


// 2.