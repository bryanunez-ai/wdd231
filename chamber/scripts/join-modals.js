const modal = document.querySelector('#membership-modal');
const openModal = document.querySelectorAll('.open-button');

async function getMemberships() {
    try {
        const response = await fetch('data/memberships.json');

        if (!response.ok) throw new Error(`File error: ${response.status}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Data file not found:', error);
    }
}

async function init() {
    const membershipsData = await getMemberships();

    openModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.showModal();
            const level = btn.dataset.level;

            const levelData = membershipsData.find(item => item.level === level);

            modal.innerHTML = `
                <div class="modal-content">
                    <button class="close-button">×</button>
                    <h3>${levelData.title} Membership</h3>
                    <p>${levelData.description}</p>
                    <ul>
                        ${levelData.benefits.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>
            `;


            const closeModal = document.querySelector('.close-button');
            closeModal.addEventListener('click', () => {
                modal.close();
            });
            
        });

        
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
}

init();

// ANIMATIONS
const cards = document.querySelectorAll('.membership-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});
