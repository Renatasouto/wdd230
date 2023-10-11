const apiKey = '05f760683307858609be5a5de22e5c7b';


const cityId = '3394023';


const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`; // Alterado para unidades imperiais (Fahrenheit)


const weatherCard = document.getElementById('weather-card');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const locationName = document.getElementById('location'); 


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
            temperature.textContent = `${Math.round(fahrenheit)}°F`; 
        }

        if (locationName) {
            locationName.textContent = data.name;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

window.addEventListener('load', getWeatherData);