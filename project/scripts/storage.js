// ----- localStorage: favoritos del usuario -----
const KEY = 'favoritos';

export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function isFavorite(id) {
    return getFavorites().includes(id);
}

export function toggleFavorite(id) {
    const favs = getFavorites();
    const index = favs.indexOf(id);

    if (index === -1) {
        favs.push(id);
    } else {
        favs.splice(index, 1);
    }

    localStorage.setItem(KEY, JSON.stringify(favs));
    return favs.includes(id);
}
