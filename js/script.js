document.addEventListener('DOMContentLoaded', function() {
    
    AOS.init();
    gsap.from("#logo", {duration: 1, opacity: 0, y: -50});
    
    const images = document.querySelectorAll('.gallery img');
    images.forEach((img, index) => {
        img.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        img.addEventListener('mouseover', () => {
            img.style.opacity = '0.7';
            img.style.transform = 'translateY(10px)';
        });
        img.addEventListener('mouseout', () => {
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
        });
    });

        document.addEventListener('DOMContentLoaded', function() {
            const homeLink = document.querySelector('a[href="#home"]');
            homeLink.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
            });
        });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.transition = 'color 0.3s ease-in-out, transform 0.3s ease-in-out';
        link.addEventListener('mouseover', () => {
            link.style.color = '#0056b3';
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#007bff';
            link.style.transform = 'scale(1)';
        });
    });
});

