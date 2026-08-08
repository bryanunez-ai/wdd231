import {places} from '../data/places.mjs';
const grid = document.querySelector('.discover-grid');

places.forEach(place => {
    const item = document.createElement('div');
    item.classList.add('place')

    item.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.photo}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    grid.appendChild(item);
})

// ----- localStorage: last visit message -----
const messageEl = document.querySelector('#visitor-message');
const now = Date.now();
const lastVisit = localStorage.getItem('lastVisit');
const oneDay = 1000 * 60 * 60 * 24;

if (!lastVisit) {
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor((now - Number(lastVisit)) / oneDay);

    if (daysBetween < 1) {
        messageEl.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        messageEl.textContent = "You last visited 1 day ago.";
    } else {
        messageEl.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);

