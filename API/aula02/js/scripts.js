// Variáveis e seleção de elementos
const apiKey = "afeddb92a9abbf878c890227729fa62c";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search');

const cityElement = document.getElementById('city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');
const countryElement = document.getElementById('country');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind span');

// Funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid${apiKey}&lang=pt_br`;

   
}

const showWeatherData = (city) => {
    console.log(city);
}

// Eventos
searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);

})