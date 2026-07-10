// Display current year and last modified on footer
const year = document.querySelector('#current-year');
const lastModified = document.querySelector('#last-modified');
const currentYear = new Date().getFullYear();


year.textContent = `©${currentYear} Bryan Núñez | Mérida, Yucatán, México`;
lastModified.textContent = `Last Modified: ${document.lastModified}`;