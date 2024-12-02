// Inicializar Rellax
const rellax = new Rellax('.rellax');

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animación del fondo parallax
gsap.to('.parallax-bg', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
    },
    y: '30%',
    scale: 1.1
});

// Animación de la gradiente al hacer scroll
gsap.to('.gradient-overlay', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '30% top',
        scrub: true
    },
    opacity: 1
});

// Animación inicial del header
const headerTimeline = gsap.timeline();
headerTimeline
    .from('.logo', {
        scale: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
    })
    .from('.slogan', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.sub-slogan', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7');

// Animación de las secciones al hacer scroll
gsap.utils.toArray('.scroll-section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 100%',
            scrub: 1,
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 100,
        duration: 1
    });
});

// Animación de las tarjetas de servicios
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// Animación de testimonios con efecto stagger
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top center'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

// Efecto de parallax en imágenes
gsap.utils.toArray('img:not(.logo)').forEach(img => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: '20%'
    });
});

// Animación del botón de WhatsApp
gsap.to('.whatsapp-button', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1,
    ease: 'power3.out'
});

// Animación de los íconos sociales
gsap.from('.social-icons a', {
    scrollTrigger: {
        trigger: '.social-section',
        start: 'top center'
    },
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Efecto de hover mejorado para las tarjetas
const addHoverAnimation = (elements) => {
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                scale: 1.05,
                y: -10,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 20px 30px rgba(0,0,0,0.2)'
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            });
        });
    });
};

// Aplicar animaciones de hover
addHoverAnimation(document.querySelectorAll('.service-card'));
addHoverAnimation(document.querySelectorAll('.testimonial-card'));
