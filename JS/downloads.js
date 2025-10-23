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

        const keyContent = `
# Llave Pública ECDSA
# Curva: y² = x³ + 1x + 10 (mod 11)
# Generador G = (6, 1)
# Orden q = 10

p=11
a=1
b=10
Gx=6
Gy=1
q=10
Qx=1
Qy=1
`;

        const blob = new Blob([keyContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Diego(Alicia)_public_key.pem';
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