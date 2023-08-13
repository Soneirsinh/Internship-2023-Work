const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c80ce77ebemsh4ac816c2668f51ap1db14ejsn8fdc9cbce0a8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function getWeather() {
    try {
        const location = document.getElementById('location').value;
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`;

        const response = await fetch(url, options);
        const result = await response.json();
        displayWeather(result);
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}

function displayWeather(weatherData) {
    const weatherDisplay = document.getElementById('weather-info');
    weatherDisplay.innerHTML = ` 
        <p>Max-Temperature: ${weatherData.temp} °C</p>
        <p>Humidity: ${weatherData.humidity} °C</p>
        <p>Wind speed: ${weatherData.wind_speed} °C</p>
        `;
}