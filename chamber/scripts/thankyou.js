const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
    <h2>Submission Details</h2>
    <p><strong>Membership:</strong> ${myInfo.get('membership').toUpperCase()}</p>
    <p><strong>Name:</strong> ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p><strong>Company:</strong> ${myInfo.get('company')}</p>
    <p><strong>Title:</strong> ${myInfo.get('title')}</p>
    <p><strong>Description:</strong> ${myInfo.get('description')}</p>
    <p><strong>Email:</strong> ${myInfo.get('email')}</p>
    <p><strong>Phone:</strong> ${myInfo.get('phone')}</p>
    <p><strong>Submitted on: </strong>${new Date(myInfo.get('timestamp')).toLocaleString()}</p>
`;