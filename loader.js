// Get the current page's URL pathname.
const currentPath = window.location.pathname;

// Check if the current path is one of the payment callback pages.
// If it is, exit the script to prevent the loader from being created or displayed.
if (currentPath.includes('/pago-ok') || currentPath.includes('/pago-ko')) {
    console.log('Loader script is disabled for this page.');
    return;
}

const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 150px;
    max-height: 150px;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the loader elements to the document body.
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// This function will initialize and hide the loader when the page content is ready.
function hideLoaderAndLoadAnimation() {
    // Hide the loader container.
    overlay.style.display = 'none';
    
    // Show the Lottie container to prepare for the animation.
    lottieContainer.style.display = 'block';
    
    // Load the Lottie animation.
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // or 'canvas' if preferred
        loop: true,
        autoplay: true,
        path: 'https://alepperera.github.io/cubapagos-web-loader/imagen.json',
    });
}

// Attach the function to the 'load' event, which fires when the entire page is loaded.
// This is more reliable than 'DOMContentLoaded' for loading external resources like Lottie.
window.addEventListener('load', hideLoaderAndLoadAnimation);
