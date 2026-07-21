const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.967691225035246&lon=-89.59429979228017&units=imperial&appid=c1f345cfce0d58304ad03087084bc576'; 

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp}°F</strong>`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description} icon`);
    captionDesc.innerHTML = data.weather[0].description;
}

async function loadWeather() {
    const data = await apiFetch(url);
    displayResults(data);
}

loadWeather();

