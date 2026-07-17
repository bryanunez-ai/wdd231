const hamburgerBtn = document.querySelector('#hamburger-btn');
const navMenu = document.querySelector('nav');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburgerBtn.classList.toggle('show');
    // Accesibilidad: refleja si el menú está abierto o cerrado
    const isOpen = navMenu.classList.contains('show');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
});
