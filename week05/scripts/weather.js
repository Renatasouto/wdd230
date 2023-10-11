// Selecione os elementos HTML no documento
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Defina a URL da API com a chave de API e o nome da cidade
const apiKey = '05f760683307858609be5a5de22e5c7b';
const cityName = 'Trier,DE'; // DE representa o código do país (Alemanha)
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;

// Declare a função assíncrona para buscar dados da API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Para testar
      displayResults(data); // Chama a função para exibir os resultados
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Chame a função para buscar dados da API
apiFetch();

// Função para exibir os resultados na página
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = desc;
}
