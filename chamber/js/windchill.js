const windSpeed = document.querySelector("#wind-speed");
const windchill = document.querySelector("#wind-chill");
const temperature = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon")
const locationWeather = document.querySelector("#location-weather")
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=9759bf8ad638b8f6a851effbef8116f6";



async function getWeather(){
    const weatherFetch = await fetch(weatherURL);
    const weatherJson = await weatherFetch.json();
    const windSpeedjson = weatherJson.wind.speed;
    const temperatureC = weatherJson.main.temp;
    
    const weatherLocation = weatherJson.name;
    const weatherType = weatherJson.weather[0].main;

    temperature.textContent = Math.round(temperatureC)
    windSpeed.textContent = windSpeedjson
    locationWeather.textContent = `${weatherLocation} - ${weatherType}`;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${weatherJson.weather[0].icon}.png`);
}

function calcChill(){
    const mph = Number(windSpeed.textContent) / 1.609;
    const fahrenheit = (Number(temperature.textContent) * (9/5)) + 32;
    // (<=50°F and >3.0mph)
    if((mph > 3) && (fahrenheit <= 50)){
        const value = 35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16));
        windchill.textContent = `${Math.round(value)}°F`;
    }else{
        windchill.textContent = "N/A";
    }
}

getWeather();
calcChill();