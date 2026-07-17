// Display current year and last modified on footer
const year = document.querySelector('#year');
const lastModified = document.querySelector('#last-modified');
const currentYear = new Date().getFullYear();


year.textContent = `${currentYear}`;
lastModified.textContent = `${document.lastModified}`;