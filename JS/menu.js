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

// Hobbies Modal Functionality
const hobbyCards = document.querySelectorAll('.hobby-card');
const modal = document.getElementById('hobbyModal');
const closeModal = document.querySelector('.close-modal');
const modalVideo = document.getElementById('hobbyVideo');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

const hobbyData = {
    dibujo: {
        video: 'https://www.youtube.com/embed/4MgQKB9BgU0?si=fkaktTv8PcJxPZW4',
        title: 'Dibujo',
        description: 'No soy muy bueno dibujando pero es algo que me apasiona, cada día intento tener una mejora en mi estilo, y obviamente que hay. Últimamente no he tenido tiempo de retomarlo, pero eso no significa que le haya perdido el amor, al contrario, se ha hecho más grande.'
    },
    videojuegos: {
        video: 'https://www.youtube.com/embed/Ldu6Ipo8Xg8?si=CZvkqqugAEsQMSjj',
        title: 'Videojuegos',
        description: 'Los videojuegos son mi parte favorita del día, los juego con amigos, solo o incluso con desconocidos. Es como envolverte en otros mundos, la verdad tampoco es que sea un pro player pero ahí voy. No puedo omitir que esta es la razón por la que me metí a esta carrera :)'
    },
    piano: {
        video: 'https://www.youtube.com/embed/MALQhf5D6ls?si=bdSOvi6QlKnGUuij',
        title: 'Piano',
        description: 'He estado tocando el piano por más de 3 años, y quiero decir que ha sido de las mejores formas en las que puedo expresar lo que siento, me siento tan libre y tan en sintonía con la música. Lamentablemente y por factores de tiempo no puedo dedicarle el tiempo que se merece :('
    }
};

hobbyCards.forEach(card => {
    card.addEventListener('click', () => {
        const hobby = card.dataset.hobby;
        const data = hobbyData[hobby];
        
        modalVideo.src = data.video;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalVideo.src = '';
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modalVideo.src = '';
        document.body.style.overflow = '';
    }
}); 