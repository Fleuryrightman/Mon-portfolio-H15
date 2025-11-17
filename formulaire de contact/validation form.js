const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi par défaut

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Expression régulière pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (nom === "" || email === "" || message === "") {
        formMessage.textContent = "Veuillez remplir tous les champs.";
        formMessage.style.color = 'red';
        return;
    }

    if (!emailRegex.test(email)) {
        formMessage.textContent = "Veuillez entrer une adresse email valide.";
        formMessage.style.color = 'red';
        return;
    }

    // Si tout est correct
    formMessage.textContent = "Merci pour votre demande ! Nous vous répondrons bientôt.";
    formMessage.style.color = 'green';
    form.reset();
});
