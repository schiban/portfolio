document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de mudança para os botões de rádio
    document.querySelectorAll('input[name="filters"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            // Seleciona os elementos do DOM dentro da classe 'content-switch'
            const contentSwitches = document.querySelectorAll('.content-switch');

            // Itera sobre cada grupo de elementos para alternar o idioma
            contentSwitches.forEach(function (contentSwitch) {
                const ptContents = contentSwitch.querySelectorAll('.pt');
                const enContents = contentSwitch.querySelectorAll('.en');

                // Verifica qual botão está selecionado
                if (radio.value === 'pt') {
                    ptContents.forEach(function (element) {
                        element.style.display = 'initial';
                    });
                    enContents.forEach(function (element) {
                        element.style.display = 'none';
                    });
                } else if (radio.value === 'en') {
                    ptContents.forEach(function (element) {
                        element.style.display = 'none';
                    });
                    enContents.forEach(function (element) {
                        element.style.display = 'initial';
                    });
                }
            });
        });
    });

    // Fetch weather data for Porto once the page loads
    //fetchWeather('Vila Nova de Gaia');
});

const apiKey = 'APIKEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationElement = document.getElementById('location');
const countryElement = document.getElementById('country');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weatherIcon');
const forecastInfoElement = document.getElementById('forecastInfo');
const feelsLikeElement = document.getElementById('feelsLike');

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric&lang=pt`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro de conexão ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Erro encontrado:', error);
        });
}

function displayWeather(data) {
    locationElement.textContent = data.name;
    countryElement.textContent = data.sys.country;
    temperatureElement.textContent = `Temperatura: ${Math.round(data.main.temp)}°C`;
    descriptionElement.textContent = (data.weather[0].description);
    feelsLikeElement.textContent = `Sensação térmica: ${Math.round(data.main.feels_like)}°C`;
    const icon = data.weather[0].icon;
    weatherIconElement.innerHTML = `<img src="assets/img/4cast/${icon}.svg" alt="${data.weather[0].description}">`;
}
