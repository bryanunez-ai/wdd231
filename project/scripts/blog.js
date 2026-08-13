import { getArticulos } from './data.js';
import { renderCards } from './render.js';
import { openModal } from './modal.js';
import { toggleFavorite } from './storage.js';

const grid = document.querySelector('#blog-grid');
const filter = document.querySelector('#category-filter');

let articulos = [];

function showFiltered() {
    const category = filter.value;
    const list = category === 'todas'
        ? articulos
        : articulos.filter(a => a.category === category);
    renderCards(list, grid);
}

// Filtro por categoría
filter.addEventListener('change', showFiltered);

// Clicks delegados en las cards (leer más / guardar)
grid.addEventListener('click', (e) => {
    const readBtn = e.target.closest('.read-more');
    const saveBtn = e.target.closest('.save-btn');

    if (readBtn) {
        const id = Number(readBtn.dataset.id);
        const article = articulos.find(a => a.id === id);
        openModal(article);
    }

    if (saveBtn) {
        const id = Number(saveBtn.dataset.id);
        const nowSaved = toggleFavorite(id);
        saveBtn.classList.toggle('saved', nowSaved);
        saveBtn.setAttribute('aria-pressed', nowSaved);
        saveBtn.textContent = nowSaved ? '♥' : '♡';
    }
});

async function init() {
    articulos = await getArticulos();
    renderCards(articulos, grid);
}

init();
