// 0. CARGAR FUNCIONES

window.onload = function () {
    claroOscuro();
    writeText();
    actualizarReloj();
    crearTooltips();
}

// 1. MODO OSCURO / CLARO

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.className = 'dark-mode';
}
function claroOscuro() {
    const modeIcon = document.getElementById('mode-toggle');
    const homeIcon = document.getElementById('home-toggle');
    console.log(homeIcon);
    if (savedTheme === 'dark') {
        modeIcon.src = 'files/modo_claro.jpg';
        homeIcon.src = 'files/home_claro.png';
    } else {
        modeIcon.src = 'files/modo_oscuro.jpg';
        homeIcon.src = 'files/home_oscuro.png';
    }

    modeIcon.addEventListener('click', () => {
        if (document.documentElement.className === 'dark-mode') {
            document.documentElement.className = '';
            modeIcon.src = 'files/modo_oscuro.jpg';
            homeIcon.src = 'files/home_oscuro.png';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.className = 'dark-mode';
            modeIcon.src = 'files/modo_claro.jpg';
            homeIcon.src = 'files/home_claro.png';
            localStorage.setItem('theme', 'dark');
        }
    });
}
/*const savedTheme = localStorage.getItem('theme');

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

function writeText() {
    const title = "Victor Teleanu";
    const text = "FULL STACK DEVELOPER";
    const titleElement = document.getElementById('title');
    const holder = document.getElementById('holder');

    const fullText = title + " " + text;
    let currentIndex = 0;

    function typeText() {
        if (currentIndex < fullText.length) {
            if (currentIndex < title.length) {
                titleElement.innerHTML = fullText.substring(0, currentIndex + 1);
            } else {
                holder.innerHTML = fullText.substring(title.length, currentIndex + 1);
            }
            currentIndex++;
            setTimeout(typeText, 100);
        }
    }
    typeText();
}

// 3. RELOJ

function actualizarReloj() {
    const fechaHora = new Date();
    let horas = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();
    let segundos = fechaHora.getSeconds();

    if (horas < 10) { horas = '0' + horas; }
    if (minutos < 10) { minutos = '0' + minutos; }
    if (segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("reloj").innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);

// 4. TOOLTIP

function crearTooltips() {
    const tooltipsData = [
        { id: 'estudios', text: 'Haz clic para ver más sobre mis estudios.' },
        { id: 'masSobreMi', text: 'Haz clic para saber más sobre mí.' },
    ];

    tooltipsData.forEach(data => {
        const element = document.getElementById(data.id);
        if (element) {
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltip-text';
            tooltip.textContent = data.text;

            element.appendChild(tooltip);

            element.addEventListener('mouseover', () => {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            });

            element.addEventListener('mouseout', () => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            });
        }
    });
}
