// weather.js

// Sua chave de API do OpenWeatherMap
const apiKey = '05f760683307858609be5a5de22e5c7b';

// ID da cidade (Natal, RN, Brasil)
const cityId = '3394023';

// URL da API OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=imperial`; // Alterado para unidades imperiais (Fahrenheit)

// Elementos do DOM
const weatherCard = document.getElementById('weather-card');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const locationName = document.getElementById('location'); // Renomeada para locationName

// Função para buscar dados climáticos
async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Converter a temperatura de Celsius para Fahrenheit
        const fahrenheit = data.main.temp;

        // Atualize os elementos do DOM com os dados climáticos em Fahrenheit
        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `${Math.round(fahrenheit)}°F`; // Exibindo em Fahrenheit
        locationName.textContent = data.name;
    } catch (error) {
        console.error('Erro ao buscar dados climáticos:', error);
    }
}

// Chame a função para buscar dados climáticos quando a página carregar
window.addEventListener('load', getWeatherData);
