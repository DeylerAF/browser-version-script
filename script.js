/*
*1. Crear un evento que cuando el navegador tenga un tamaño de 1000px, redirija a una página X.
*/
window.addEventListener('resize', () => {
    //? https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
    const WINDOW_WIDTH = window.innerWidth;
    console.log('Ancho de la ventana:', WINDOW_WIDTH);
    //? https://developer.mozilla.org/en-US/docs/Web/API/Window/location
    if (WINDOW_WIDTH === 1000) {
        window.location = 'https://deyleraf.com/';
    }
});

/*
*2. Crear un evento cuando se posicione encima de una imagen, salga una nueva ventana del navegador y redirija a una pagina X.(Evento Molesto).
*/
var image = document.getElementById('imagen');

image.addEventListener('mouseover', () => {
    //? https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    window.open('https://deyleraf.com/', '_blank');
});

/*
*3. Crear un evento que al transcurrir 20 segundos aparezca una ventana flotante (div con overlay), y muestre los siguientes datos:
*- Comprobar si tiene las cookies activadas.
*- Version del navegador que usa.
*/

//? https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
setTimeout(() => {
    // Crear el div overlay
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    // Crear el div mensaje
    let message = document.createElement('div');
    message.style.backgroundColor = 'white';
    message.style.padding = '20px';
    message.style.borderRadius = '10px';
    message.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    message.style.textAlign = 'center';

    // Comprobar si las cookies están activadas
    //? https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled
    let cookiesEnabled = navigator.cookieEnabled ? 'Las cookies están activadas' : 'Las cookies están desactivadas';
    let cookiesMessage = document.createElement('p');
    cookiesMessage.textContent = 'Cookies: ' + cookiesEnabled;
    message.appendChild(cookiesMessage);

    // Obtener la versión del navegador
    //? https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent
    //? https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser/5918791#5918791
    //? https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
    let browserInfo = navigator.userAgent.match(/\b(Edg*|Opera|Chrome|Safari|Firefox|MSIE|Trident|Brave|Vivaldi|YaBrowser)\b\/?\s*(\d+)/i);
    let browserName = browserInfo[1];
    let browserVersion = browserInfo[2];
    if (browserName === 'Chrome') {
        const REPLACE = navigator.userAgent.match(/\b(OPR|Edg*|Brave|Vivaldi|YaBrowser)\/(\d+)/);
        if (REPLACE != null) {
        browserName = REPLACE[1].replace('Edg', 'Edge').replace('OPR', 'Opera').replace('YaBrowser', 'Yandex');
        browserVersion = REPLACE[2];
        }
    }
    let browserMessage = document.createElement('p');
    browserMessage.textContent = 'Versión del navegador: ' + browserName + ' ' + browserVersion;
    message.appendChild(browserMessage);

    // Agregar el mensaje al overlay y el overlay al body
    overlay.appendChild(message);
    document.body.appendChild(overlay);
}, 20000);