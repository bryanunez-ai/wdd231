// ----- Fetch de los artículos (JSON local) -----
export async function getArticulos() {
    try {
        const response = await fetch('data/articulos.json');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('No se pudieron cargar los artículos:', error);
        return [];
    }
}
