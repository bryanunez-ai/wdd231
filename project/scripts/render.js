import { isFavorite } from './storage.js';

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('es-MX', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}

function articleCard(article) {
    const saved = isFavorite(article.id);
    return `
        <article class="blog-card">
            <figure>
                <img src="${article.image}" alt="${article.title}" loading="lazy" width="300" height="200">
            </figure>
            <div class="blog-card-body">
                <span class="badge">${article.category}</span>
                <h2>${article.title}</h2>
                <p class="date">${formatDate(article.date)}</p>
                <p>${article.excerpt}</p>
                <div class="blog-card-actions">
                    <button class="read-more" data-id="${article.id}">Leer más</button>
                    <button class="save-btn ${saved ? 'saved' : ''}" data-id="${article.id}" aria-pressed="${saved}" aria-label="Guardar artículo">${saved ? '♥' : '♡'}</button>
                </div>
            </div>
        </article>
    `;
}

export function renderCards(articles, container) {
    if (articles.length === 0) {
        container.innerHTML = '<p>No hay artículos en esta categoría.</p>';
        return;
    }
    container.innerHTML = articles.map(articleCard).join('');
}

export { formatDate };
