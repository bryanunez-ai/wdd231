async function getEvents() {
    try {
        const response = await fetch('data/events.json');
        if (response.ok) {
            const data =await response.json();
            return data;
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
        return;
    }
}

function getOrdinal(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function formatEventDate(dateString) {
    const date = new Date(dateString);
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.getDate();
    return `${weekday}, ${month} ${day}${getOrdinal(day)}`;
}

function formatEventTime(time) {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(Number(hours), Number(minutes));
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function displayEvents(events) {
    const eventsContainer = document.querySelector('#events-container');

    events.forEach(event => {
        const eventCard = document.createElement('article');
        eventCard.classList.add('event-card');

        const badge = event.isOnline
            ? '<span class="event-badge online">Online</span>'
            : '<span class="event-badge in-person">In person</span>';

        const location = event.isOnline
            ? ''
            : `<p class="event-location">${event.location}</p>`;

        eventCard.innerHTML = `
            ${badge}
            <h3>${event.title}</h3>
            <p class="event-date">${formatEventDate(event.date)}</p>
            <p class="event-time">${formatEventTime(event.time)}</p>
            ${location}
        `;

        eventsContainer.appendChild(eventCard);
    });
}

async function init() {
    const events = await getEvents();

    if (events) {
        displayEvents(events);
    } else {
        console.log('No events found');
    }
}

init();

// Show events cards
const container = document.querySelector('#events-container');

document.querySelector('#events-next').addEventListener('click', () => {
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth'});
});

document.querySelector('#events-prev').addEventListener('click', () => {
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth'});
});

window.addEventListener('resize', () => {
    container.scrollLeft = 0;
});