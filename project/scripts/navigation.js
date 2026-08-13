// ----- Responsive menu (hamburger toggle) -----
const hamburgerBtn = document.querySelector('#hamburger-btn');
const navMenu = document.querySelector('nav');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburgerBtn.classList.toggle('show');
    // Accesibilidad: refleja si el menú está abierto o cerrado
    const isOpen = navMenu.classList.contains('show');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

// ----- Footer: current year and last modified -----
const year = document.querySelector('#year');
const lastModified = document.querySelector('#last-modified');

year.textContent = `${new Date().getFullYear()}`;
lastModified.textContent = `${document.lastModified}`;
