const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.967691225035246&lon=-89.59429979228017&units=imperial&appid=c1f345cfce0d58304ad03087084bc576'; 
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.967691225035246&lon=-89.59429979228017&units=imperial&appid=c1f345cfce0d58304ad03087084bc576';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Today's weather
function displayWeather(data) {
    const currentTemp = document.querySelector('#current-temp');
    const humidity = document.querySelector('#humidity');
    const feelsLike = document.querySelector('#feels-like');
    const windSpeed = document.querySelector('#wind');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');


    currentTemp.textContent = data.main.temp;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} mph`;
    feelsLike.textContent = `${data.main.feels_like} °F`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description} icon`);
    captionDesc.textContent = data.weather[0].description;
}

// Forecast

function getOrdinal(day) { // Date Formating
    if (day > 3 && day < 21) return 'th'; 
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}


function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast-container');

    const daily = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    const nextDays = daily.slice(1, 4);
    
    nextDays.forEach(day => {
        const forecastCard = document.createElement('div');

        const date = new Date(day.dt * 1000);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
        const month   = date.toLocaleDateString('en-US', { month: 'long' });
        const theDay     = date.getDate();
        const formatted = `${weekday}, ${month} ${theDay}${getOrdinal(theDay)}`;



        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
            <figure>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="${day.weather[0].description} icon" class="weather-icon" loading="lazy">
                <figcaption>${day.weather[0].description}</figcaption>
            </figure>
            <div class="weather-info">
                <h4>${formatted}</h4>
                <p><strong>Temp: </strong>${day.main.temp} °F</p>
                <p><strong>Humidity: </strong>${day.main.humidity}%</p>
                <p><strong>Wind: </strong>${day.wind.speed} mph</p>
            </div>
        `;
        forecastContainer.appendChild(forecastCard);
    })
}


async function loadWeather() {
    const weatherData = await apiFetch(url);
    const forecastData = await apiFetch(forecastUrl);
    displayWeather(weatherData);
    displayForecast(forecastData);
}

loadWeather();




