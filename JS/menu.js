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

// Parallax effect for clouds, sun and sho
window.addEventListener('scroll', () => {
    const clouds = document.querySelector('.parallax-clouds');
    const sun = document.querySelector('.parallax-sun');
    const sho = document.querySelector('.parallax-sho');
    const scrollPosition = window.scrollY;
    
    // Cloud moves right
    const moveX = scrollPosition * 0.5;
    clouds.style.transform = `translateX(${moveX}px)`;
    
    // Sun moves down
    const moveY = scrollPosition * 0.3;
    sun.style.transform = `translateY(${moveY}px)`;

    // Sho moves left
    const moveShoX = scrollPosition * -0.4; // Negative value to move left
    sho.style.transform = `translateX(calc(-50% + ${moveShoX}px))`;
}); 