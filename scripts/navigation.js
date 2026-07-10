// JS for navigation menu toggle

// ********** HAMBURGER MENU BUTTON ***********
// Store nav elements in variables
const navBtn = document.querySelector('#ham-btn');
const navMenu = document.querySelector("#nav-bar");

// Toggle the show class off and on
navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('show');
  navMenu.classList.toggle('show');
});
