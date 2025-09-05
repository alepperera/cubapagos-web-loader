// Function to handle the loader's behavior
function handleLoader() {
    // Check if the current URL contains the payment page paths
    const currentPath = window.location.pathname;
    if (currentPath.includes('/pago-ok') || currentPath.includes('/pago-ko')) {
        // If it's a payment page, find the loader overlay and hide it immediately
        const existingOverlay = document.getElementById('loader');
        if (existingOverlay) {
            existingOverlay.style.display = 'none';
        }
        console.log('Loader disabled on this page.');
        return; // Exit the function
    }

    // --- This part runs ONLY on pages that are not /pago-ok or /pago-ko ---

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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    // Append the loader elements to the body
    document.body.appendChild(overlay);
    overlay.appendChild(lottieContainer);

    // Load the Lottie animation
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://alepperera.github.io/cubapagos-web-loader/imagen.json',
    });

    // Set a timeout to hide the loader after a few seconds.
    // This gives the app time to load.
    window.addEventListener('load', () => {
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 2000); // Hides after 2 seconds
    });
}

// Run the function when the script loads
handleLoader();
