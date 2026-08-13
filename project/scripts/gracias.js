// Lee los datos enviados por el formulario usando URLSearchParams
const params = new URLSearchParams(window.location.search);

const labels = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    correo: 'Correo',
    telefono: 'Teléfono',
    servicio: 'Servicio',
    modalidad: 'Modalidad',
    fecha: 'Fecha preferida',
    mensaje: 'Mensaje'
};

const nombre = params.get('nombre');
const greeting = document.querySelector('#greeting');

if (greeting) {
    greeting.textContent = nombre
        ? `Hola ${nombre}, recibí tu solicitud. Te contactaré muy pronto.`
        : 'Recibí tu solicitud. Te contactaré muy pronto.';
}

const summary = document.querySelector('#summary');

for (const [key, label] of Object.entries(labels)) {
    const value = params.get(key);
    if (value) {
        const dt = document.createElement('dt');
        dt.textContent = label;
        const dd = document.createElement('dd');
        dd.textContent = value;
        summary.append(dt, dd);
    }
}
