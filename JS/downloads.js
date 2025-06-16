document.addEventListener('DOMContentLoaded', function() {
    const keyButton = document.querySelector('.download-button');
    const cvButton = document.getElementById('cv-button');

    // Función para mostrar animación de descarga
    function showDownloadAnimation(button) {
        button.classList.add('downloading');
        const buttonText = button.querySelector('.button-text');
        const originalText = buttonText.textContent;
        buttonText.textContent = 'Descargando...';

        // Agregar barra de progreso
        const progressBar = document.createElement('div');
        progressBar.className = 'download-progress';
        progressBar.innerHTML = '<div class="progress-bar"></div>';
        button.appendChild(progressBar);

        // Simular tiempo de descarga
        setTimeout(() => {
            button.classList.remove('downloading');
            buttonText.textContent = originalText;
            progressBar.remove();

            // Mostrar mensaje de éxito
            const successMessage = document.createElement('div');
            successMessage.className = 'download-success';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>¡Descarga completada!</span>
            `;
            button.appendChild(successMessage);

            // Remover el mensaje después de 1.5 segundos
            setTimeout(() => {
                successMessage.remove();
            }, 1500);
        }, 2000);
    }

    // Función para descargar el archivo KEY
    keyButton.addEventListener('click', function(e) {
        e.preventDefault();
        showDownloadAnimation(this);

        const keyContent = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0vx7agoebGcQSuuPiLJX
ZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tS
oc/6es03NtnrbtxnMXLxMq6MgUQinhoVILaII6kR8aHu8Kzqdx1w9PxISpFFlD53
7bB7M32jstv1Q2eOyP4RlAcqFfhn+uEnwXwNcfwdzV7WgcoR0XQv4lz9kq5p8K4B
m1BFjIZeEuO7oK/9YLpcoQAdLe9ZseFDzoyZpmbfpLfg0T44RidM6fgc2u6kRfNT
4pLf4GRmktgK4urfhug1kCdmzdZxVK2f4HEqGPu0x2X5UaNq4FHHzUqB0K7U5A8z
8QIDAQAB
-----END PUBLIC KEY-----`;

        const blob = new Blob([keyContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'public_key.pem';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });

    // Función para descargar el CV
    cvButton.addEventListener('click', function(e) {
        e.preventDefault();
        showDownloadAnimation(this);

        const cvUrl = './CV/CV_Diego_Hernandez.pdf';
        const a = document.createElement('a');
        a.href = cvUrl;
        a.download = 'CV_Diego_Hernandez.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}); 