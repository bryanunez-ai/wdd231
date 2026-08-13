import { formatDate } from './render.js';

const modal = document.querySelector('#article-modal');

// Cerrar al hacer clic en el backdrop (fuera del contenido)
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
});

export function openModal(article) {
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" aria-label="Cerrar">✕</button>
            <span class="badge">${article.category}</span>
            <h2>${article.title}</h2>
            <p class="date">${formatDate(article.date)} · ${article.author}</p>
            <img src="${article.image}" alt="${article.title}" width="300" height="200">
            <p>${article.body}</p>
        </div>
    `;

    modal.querySelector('.close-modal').addEventListener('click', () => modal.close());
    modal.showModal();
}
