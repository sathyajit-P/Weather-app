const apiKey = '';          // use your api key here
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const weatherDiv = document.querySelector('.weather');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', () => {
    const city = searchInput.value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data)
        displayWeather(data);
    } catch (error) {
        console.error(error);
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    
    weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°K</p>
        <p>Description: ${description}</p>
    `;
}
