// JavaScript para interactividad del sitio estático

// Variables globales
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
let autoPlayInterval;

// Función para mostrar un slide específico
function showSlide(n) {
    // Remover clase active de todos los slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Agregar clase active al slide actual
    if (slides[n]) {
        slides[n].classList.add('active');
    }
    if (dots[n]) {
        dots[n].classList.add('active');
    }
    
    currentSlide = n;
}

// Función para ir a un slide específico
function goToSlide(n) {
    clearInterval(autoPlayInterval);
    showSlide(n);
    startAutoPlay();
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Iniciar reproducción automática del carrusel
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Cambiar cada 5 segundos
}

// Toggle menú móvil
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}

// Toggle submenú de oferta educativa
function toggleOfertaMenu() {
    const submenu = document.getElementById('ofertaSubmenu');
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

// Toggle submenú móvil de oferta educativa
function toggleOfertaSubmenu() {
    const submenu = document.getElementById('ofertaSubmenuMobile');
    const chevron = document.getElementById('chevronOferta');
    
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
        chevron.style.transform = 'rotate(180deg)';
    } else {
        submenu.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
    }
}

// Cerrar menú móvil al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carrusel
    if (slides.length > 0) {
        showSlide(0);
        startAutoPlay();
    }

    // Cerrar menú móvil al hacer clic en un enlace
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.remove('open');
        });
    });

    // Cerrar dropdown de oferta educativa al hacer clic fuera
    document.addEventListener('click', function(event) {
        const ofertaButton = event.target.closest('.nav-link');
        const ofertaSubmenu = document.getElementById('ofertaSubmenu');
        
        if (!ofertaButton && ofertaSubmenu) {
            ofertaSubmenu.style.display = 'none';
        }
    });

    // Hacer que los enlace mobile nav lleven a las páginas correspondientes
    // Esto se hace automáticamente con los href en el HTML

    // Scroll suave para enlaces internos (si es necesario)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Función para marcar el enlace activo basado en la página actual
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Obtener href del link
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Ejecutar cuando se carga el DOM
document.addEventListener('DOMContentLoaded', setActiveNavLink);
