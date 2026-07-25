// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);
// myInfo.forEach(item => {
//     console.log(item);
// })

document.querySelector('#results').innerHTML = `
    <p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
    <p>Your Phone: ${myInfo.get('phone')}</p>
    <p>Email: ${myInfo.get('email')}</p>
`;