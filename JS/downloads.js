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
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAkxj1jWtYw2rTYTrjm+OW
6PUF9d/ocRWWqhhK3LJv2jTZMeZCspy/f8xfWebWMi0yauJvdGsZev3VCt7l2Fp3
uA7L7RHXLuci2/fphQQsacGH6nQkPOs+yt1fug8EGYReISpheoyylLw/56Izkz8p
aAEGhEdAkUN+vfxNAFFZvPYg3iT7G7ScLA0grLvPgfqN1mH39Fn0sDN6+PgU28IP
Ii7VEHstzap3ulRU/oIkw/Rq35A6VNMzI03y1v8Tu0/pFLI2WMAgZZHDYn1KEanX
at4iPhKkOp+JbkcJ+37BIIfhs7S3w8UC5QSweBy82W2lES7I+qoRY5DUcEG8ficE
gvzhNDuQShW8UZqtoLRfuzc8hYJ/nlXPfPusBYCCrestdbJkDRG+b9We7rxM8X3Y
kMiHKaQbEnZxiM7nyWzxUOZKXkyzPDLU/l4dDrtISdrNEMEP6xx61i5gDHWfldfQ
eLnHoHHJFYc4UWbDDZl0sqH0AHluYa8ZvBhW6JHyiFSAzroJfm5y1a9YNa7J1BVI
EFSIosjcdtVAg2yQ4dKmbYyotYmkhH+RZPKZ8t4+bgpt292Cu2wxSByee5RPAlRS
Gcsl7JEJ8Z5IsdHJ5OYgGyeWfffpR9jf4c19aaOJB9DPpAfADSmWi2AYuSXHEFme
1iFwR1vpop/fqSqXtNyFVZkCAwEAAQ==
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