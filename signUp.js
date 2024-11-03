// Fonction pour ouvrir la pop-up d'inscription
function openSignupPopup() {
    const modal = document.getElementById('signup-modal');
    modal.style.display = 'block';
}

// Fonction pour fermer la pop-up d'inscription
function closeSignupPopup() {
    const modal = document.getElementById('signup-modal');
    modal.style.display = 'none';
}
// Récupère le bouton d'inscription
const signupBtn = document.getElementById('signup-btn');

// Récupère la pop-up d'inscription
const signupModal = document.getElementById('signup-modal');

// Fonction pour ouvrir la pop-up d'inscription
function openModal() {
    signupModal.style.display = 'block';
}

// Associe la fonction openModal à l'événement clic sur le bouton d'inscription
signupBtn.addEventListener('click', openModal);

//validation des champs

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

// Fonction de validation de l'e-mail
function validateEmail() {
    const email = emailInput.value.trim();
    if (!email) {
        emailError.textContent = "L'e-mail est obligatoire";
        emailError.style.display = 'block';
        return false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "L'e-mail n'est pas valide";
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

// Fonction de vérification du format de l'e-mail
function isValidEmail(email) {
    // Utilise une expression régulière pour vérifier le format de l'e-mail
    // Retourne true si l'e-mail est valide, sinon false
}

// Ajoute un écouteur d'événement pour vérifier l'e-mail lorsqu'il change
emailInput.addEventListener('input', validateEmail);

//NOM

// Récupère l'élément du champ du nom
const nameInput = document.getElementById('name');
// Récupère l'élément pour afficher le message d'erreur du nom
const nameError = document.getElementById('name-error');

// Fonction de validation du nom
function validateName() {
    const name = nameInput.value.trim();
    if (!name) {
        nameError.textContent = "Le nom est obligatoire";
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

// Ajoute un écouteur d'événement pour vérifier le nom lorsqu'il change
nameInput.addEventListener('input', validateName);

//MP

// Récupère l'élément du champ du mot de passe
const passwordInput = document.getElementById('password');
// Récupère l'élément pour afficher le message d'erreur du mot de passe
const passwordError = document.getElementById('password-error');

// Fonction de validation du mot de passe
function validatePassword() {
    const password = passwordInput.value.trim();
    // Vérifie si le mot de passe a au moins 8 caractères
    if (password.length < 8) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères";
        passwordError.style.display = 'block';
        return false;
    } else {
        passwordError.style.display = 'none';
        return true;
    }
}

// Ajoute un écouteur d'événement pour vérifier le mot de passe lorsqu'il change
passwordInput.addEventListener('input', validatePassword);

//Nom user

// Récupère l'élément du champ du nom
const nameUser = document.getElementById('username');
// Récupère l'élément pour afficher le message d'erreur du nom
const UserError = document.getElementById('username-error');


// Fonction de validation du nom d'utilisateur
function validateUsername() {
    const username = usernameInput.value.trim();
    if (!username) {
        usernameError.textContent = "Le nom d'utilisateur est obligatoire";
        usernameError.style.display = 'block';
        return false;
    } else {
        usernameError.style.display = 'none';
        return true;
    }
}

// Ajoute un écouteur d'événement pour vérifier le nom d'utilisateur lorsqu'il change
usernameInput.addEventListener('input', validateUsername);

// Partie pour la validation Submit

// Récupère le formulaire
const signupForm = document.getElementById('signup-form');

// Ajoute un gestionnaire d'événements à l'événement submit du formulaire
signupForm.addEventListener('submit', function(event) {
    // Empêche l'envoi du formulaire par défaut
    event.preventDefault();

    // Vérifie si tous les champs sont valides
    if (validateEmail() && validateName() && validatePassword() && validateUsername()) {
        // Si tous les champs sont valides, traite les données (par exemple, envoi à un serveur)
        alert('Formulaire soumis avec succès !');
        // Réinitialise le formulaire après l'envoi réussi
        signupForm.reset();
    } else {
        // Si un champ n'est pas valide, affiche un message d'erreur approprié à l'utilisateur
        alert('Veuillez remplir tous les champs correctement.');
    }
});
// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupère les valeurs des champs du formulaire
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    const username = document.getElementById('username').value.trim();

    // Crée un objet contenant les données de l'utilisateur
    const newUser = {
        email: email,
        name: name,
        password: password,
        username: username
    };

    // Stocke les données de l'utilisateur dans le localStorage
    localStorage.setItem('newUser', JSON.stringify(newUser));

    // Affiche un message de succès
    alert('Nouvel utilisateur enregistré avec succès !');
}

// Ajoute un écouteur d'événements à l'événement submit du formulaire
signupForm.addEventListener('submit', handleSubmit);