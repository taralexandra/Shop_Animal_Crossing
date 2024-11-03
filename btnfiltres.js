// Fonction de filtrage des produits par catégorie
function filterProducts(category) {
    // Sélectionne la section des produits dans ton HTML
    const productsSection = document.querySelector('.products');

    // Efface le contenu actuel de la section des produits
    productsSection.innerHTML = '';

    // Boucle à travers le tableau de produits
    products.forEach(product => {
        // Vérifie si la catégorie est "all" ou si le produit correspond à la catégorie sélectionnée
        if (category === 'all' || product.category === category) {
            // Crée un élément div pour chaque produit
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            // Remplis le contenu de chaque div de produit avec les données correspondantes
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}">
                <p>Prix: ${product.price} Clochettes</p>
                <p>Description: ${product.description}</p>
            `;

            // Ajoute le div du produit à la section des produits dans ton HTML
            productsSection.appendChild(productDiv);
        }
    });

    // Sélectionne tous les boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-button');

    // Parcourt tous les boutons de filtre
    filterButtons.forEach(button => {
        // Supprime la classe "selected" de tous les boutons de filtre
        button.classList.remove('selected');
    });

    // Sélectionne le bouton de filtre correspondant à la catégorie sélectionnée
    const selectedButton = document.querySelector(`.filter-button[data-category="${category}"]`);

    // Ajoute la classe "selected" au bouton sélectionné
    selectedButton.classList.add('selected');
}
