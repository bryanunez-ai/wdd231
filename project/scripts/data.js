// ----- Articles Fetch -----
export async function getArticulos() {
    try {
        const response = await fetch('data/articulos.json');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Could not load the articles:', error);
        return [];
    }
}
