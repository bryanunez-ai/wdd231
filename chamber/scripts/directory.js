function displayView(view) {

    if (view === 'grid') {
        document.querySelector('.members-list').style.display = 'none';
        document.querySelectorAll('.member-grid').forEach(member => {
            member.style.display = '';
        });
        document.querySelector('#members-container').style.display = 'grid';
    } else if (view === 'list') {
        document.querySelectorAll('.member-grid').forEach(member => {
            member.style.display = 'none';
        });
        document.querySelector('.members-list').style.display = 'flex';
        document.querySelector('#members-container').style.display = 'block';
    }

}

displayView('grid');
document.querySelector('#grid-btn').classList.add('active');

document.querySelector('#grid-btn').addEventListener('click', () => {
    displayView('grid');
    document.querySelector('#grid-btn').classList.add('active');
    document.querySelector('#list-btn').classList.remove('active');
});
document.querySelector('#list-btn').addEventListener('click', () => {
    displayView('list');
    document.querySelector('#list-btn').classList.add('active');
    document.querySelector('#grid-btn').classList.remove('active');
});

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
    const container = document.querySelector('#members-container');
    const tableBody = document.querySelector('#table-body');


    members.forEach(member => {
        const memberCard = document.createElement('section');
        memberCard.classList.add('member-grid');
        memberCard.innerHTML = `
            <h2>${member['company-name']}</h2>
            <p class="buss-tag">${member['tag-line']}</p>
            <div class="member-data-container">
                <img src="${member['image-path']}" alt="Business Image" loading="lazy">
                <div class="member-info">
                    <p><strong>Email: </strong><span><a href="mailto:${member.email}">${member.email}</a></span></p>
                    <p><strong>Phone: </strong><span><a href="tel:${member.phone}">${member.phone}</a></span></p>
                    <p><strong>Website: </strong><span><a href="https://${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></span></p>
                    <p><strong>Address: </strong>${member.address}</p>
                </div>
            </div>
        `;

        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${member['company-name']}</td>
            <td>${member['tag-line']}</td>
            <td><a href="mailto:${member.email}">${member.email}</a></td>
            <td><a href="tel:${member.phone}">${member.phone}</a></td>
            <td><a href="https://${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></td>
            <td>${member.address}</td>
        `;
            container.appendChild(memberCard);
            tableBody.appendChild(tableRow);
    });    
}

getMembers().then(members => {
    displayMembers(members);
});


