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
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAoW4FySdAXW+UrZ0sjSrN
PSCCEvNIJNYcLBi8lowDF5oKCCS8yxzTf8l7AOWR4Dv1J0pxzMOL+HvVGTW4XHKC
xVbBt8u3tyk/EeWfuXWZBBQ5BuR1Ha4bSHbKKfdEkKTMarlH7tbFhrrbtAHHpgiT
aM3QB2Y3KlpMLyK0/g7K/48Nikt0z7FKSUgL0f23494TT9L97DeVt9gaj3FgTdey
1fcyI5fIPX7xAfJOoFjw8bkzh+5ztYmlETJ0KtiBJPx9njQ4RXIVeQYXWza/fr+V
T7nddLeyXb0ASgFO9kB39E0xpVmjEOUz14cp2yLrwu6EnY7YbS0SEohbqFCCdbGu
iK2Q2WOzyhycu/7De/B92zMtEPLbY5LabDEOkCF6ncafUroMImMn4ejZ71by7csp
YGSHBLLwPAMw+ldZkaalL/PRqoKNtMonc2YKbBKctyRp4pXWGFyxxXAbk3KkkAAi
MXitD35MXIaFiIXPWPlTRhm/CA8MCOk4FKlv3b8JOcdr9m6Ox/4Vyv3vveSoo19z
UY/3ds0HbmYVU06lkuA2E5V0JowsV0LC4gVEFq0ych1zNH0qnn+d9RYqzO11xbH4
WnnwLCvbBv/Fw5T2dOisKGLsqKDdUyFbRrEQ7vXyijYI6Ctw2inuA4KzRUoCCIFb
nbeqRyTDgz5dIb8E3maViGkCAwEAAQ==
-----END PUBLIC KEY-----`;

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