// 1. MODO OSCURO / MODO CLARO

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
}

window.onload = function() {
    // Referencia al botón del toggle
    const button = document.getElementById('mode-button');

    // Función para cambiar el tema
    button.addEventListener('click', () => {
        // Alterna la clase dark-mode en el body
        document.documentElement.classList.toggle('dark-mode');

        // Guarda la preferencia del usuario en localStorage
        if (document.documentElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.style.transition = 'background-color 0.5s ease-in';
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.style.transition = 'background-color 0.5s ease-in';
        }
    });
}