// Rellena el campo oculto timestamp al cargar (para formularios GET)
const timestampField = document.querySelector('input[name="timestamp"]');

if (timestampField) {
    timestampField.value = new Date().toISOString();
}
