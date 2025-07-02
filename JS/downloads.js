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
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAw5W7b3uDeOhHH9bmHeFd
NoMlR/NbmtMSPN6mQJYPftX3N9o98TDc9AR9ryADG95005TTqxwV+r0OYsI16rwu
c9qjjNaqcKuFsTnlVZdka3lS59XeoEf1ps9Z9lft1yrSHumsMqaadUgVVosYRSZI
JI0fGYy25weN4vN4NE5mnzjsWQHDxKpS58bwmEcRPNQr+Q/1Ik0A39/WC3fuJe4W
uxzxcSlLUZG/3rc+TkLh40yLVF/D0QzONWhRR+G1A1NUn9hWXqEIwYN/R1FqX0HX
0SPVg2PYFZs7BGW9fk6CUFhwR7dJAyyTNgwYlvW8QrVD5FnoMaAe8/7QxhxRB5Q2
bHybhrwKnXtMBJeyjGEQPlHCob+vWbk3+Nf7ARw3Qr5QvzkXU2kr0u3OH5bNcEMk
M9hXa6W7zdjOqZ+IhOuW5GKdU44+wIsj+8Kr5w0aO0l3/RIOBMMegRtxK8vmYMXR
ZAO2JK67Liawv61E4oUF952hmEtUEP5dMxyKkmpYsERMGRQILgPRviR0Zn83yK8N
lPyxHNmw4ANfGdXz9n6iwpsNp+h8nxiwzH6TlFH1P+pZ8PuTafrxfGbus3qtFGJZ
cnA/49B6tR1Kh+7zW9GY4a8prAOWnHUnaEXH69H15uJfMJsss0YGr8QZnFi2X2tV
69yJXtlfb1NyUaLMblmMlfECAwEAAQ==
-----END PUBLIC KEY-----
`;

        const blob = new Blob([keyContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Diego_public_key.pem';
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