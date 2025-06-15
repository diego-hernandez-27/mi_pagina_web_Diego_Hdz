// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Función para alternar el menú
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    }

    // Agregar el evento click al botón
    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
}); 