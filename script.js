// ===== Smooth Scroll =====
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Hero Typing Effect =====
const heroText = document.querySelector('.hero-content h1');
if(heroText) {
    const text = heroText.innerText;
    heroText.innerText = '';
    let index = 0;
    function typeHero() {
        if(index < text.length) {
            heroText.innerText += text.charAt(index);
            index++;
            setTimeout(typeHero, 70);
        }
    }
    typeHero();
}

// ===== Back to Top =====
const btnTop = document.getElementById('backTop');
btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
    btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// ===== Skill Boxes Hover Effect =====
document.querySelectorAll('.skill-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'rotateY(10deg) scale(1.05)';
        box.style.boxShadow = '0 10px 20px rgba(0,51,102,0.3)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'rotateY(0) scale(1)';
        box.style.boxShadow = 'none';
    });
});

// ===== Gallery Lightbox =====
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        while(lightbox.firstChild) lightbox.removeChild(lightbox.firstChild);
        lightbox.appendChild(lightboxImg);
    });
});
lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
