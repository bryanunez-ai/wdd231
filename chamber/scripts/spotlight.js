async function getMembers() {
    try{
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error(`File error: ${response.status}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Data file not found:', error);
    }
}

function displayMembers(members) {
    const membersContainer = document.querySelector('#members-container');

    const topMembers = members.filter(member => member['membership-level'] === 1 || member['membership-level'] === 2).sort(() => Math.random() - 0.5).slice(0, 3);


    topMembers.forEach(member => {
        const memberCard = document.createElement('article');
        memberCard.classList.add('member-grid');

        const level = member['membership-level'] === 1 ? 'Gold' : 'Silver';

        memberCard.innerHTML = `
            <h3>${member['company-name']}</h3>
            <p class="buss-tag">${member['tag-line']}</p>
            <div class="member-data-container">
                <img src="${member['image-path']}" alt="${member['company-name']} logo" loading="lazy">
                <div class="member-info">
                    <p><strong>Membership: </strong>${level}</p>
                    <p><strong>Phone: </strong><span><a href="tel:${member.phone}">${member.phone}</a></span></p>
                    <p><strong>Website: </strong><span><a href="https://${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></span></p>
                    <p><strong>Address: </strong>${member.address}</p>
                </div>
            </div>
        `;

        membersContainer.appendChild(memberCard);
    })

    
}

getMembers().then(members => {
    displayMembers(members);
});