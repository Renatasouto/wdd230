const apiKey = '05f760683307858609be5a5de22e5c7b';
const cityId = '3394023';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=imperial`;

const weatherCard = document.getElementById('weather-card');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const locationName = document.getElementById('location');

const forecastDay1 = document.getElementById('forecast-day-1');
const forecastDay2 = document.getElementById('forecast-day-2');
const forecastDay3 = document.getElementById('forecast-day-3');
const webDescription = document.getElementById('web-description'); // Adicione este elemento HTML

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    if (date.getDate() === today.getDate()) {
        return 'Today, ' + daysOfWeek[date.getDay()];
    }
    return daysOfWeek[date.getDay()];
}

async function getWebDescription() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (webDescription) {
            webDescription.textContent = data.weather[0].description;
        }
    } catch (error) {
        console.error('Error fetching web description:', error);
    }
}

async function getThreeDayForecast() {
    try {
        const response = await fetch(forecastApiUrl);
        const data = await response.json();

        if (forecastDay1 && data.list[0]) {
            const date = new Date(data.list[0].dt * 1000);
            forecastDay1.textContent = getDayOfWeek(date) + ': ' + Math.round(data.list[0].main.temp) + '°F';
        }

        if (forecastDay2 && data.list[8]) {
            const date = new Date(data.list[8].dt * 1000);
            forecastDay2.textContent = getDayOfWeek(date) + ': ' + Math.round(data.list[8].main.temp) + '°F';
        }

        if (forecastDay3 && data.list[16]) {
            const date = new Date(data.list[16].dt * 1000);
            forecastDay3.textContent = getDayOfWeek(date) + ': ' + Math.round(data.list[16].main.temp) + '°F';
        }
    } catch (error) {
        console.error('Error fetching three-day temperature forecast:', error);
    }
}

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const fahrenheit = data.main.temp;

        if (weatherIcon) {
            weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        }

        if (weatherDescription) {
            weatherDescription.textContent = data.weather[0].description;
        }

        if (temperature) {
            temperature.textContent = Math.round(fahrenheit) + '°F';
        }

        if (locationName) {
            locationName.textContent = data.name;
        }

        getThreeDayForecast();
        getWebDescription(); // Chame a função para obter a descrição do clima da web
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

window.addEventListener('load', getWeatherData);
