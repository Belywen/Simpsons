const burgerBtn = document.querySelector('#burger_button'); //Selectionne l'élément
const navLinks = document.querySelector('#navbar ul'); //Sélectionne ul

/*Permet le click*/
burgerBtn.addEventListener('click', () => { //Ecoute l'event
    burgerBtn.classList.toggle('open'); //Bascule la classe open et déclenche animations sur le bouton
    navLinks.classList.toggle('open'); //Idem sur le contenu
});

// Ajoutez cet événement pour fermer le menu lorsque la croix est cliquée
const closeButton = document.querySelector('#navbar ul::before');

closeButton.addEventListener('click', () => {
    burgerBtn.classList.remove('open');
    navLinks.classList.remove('open');
});