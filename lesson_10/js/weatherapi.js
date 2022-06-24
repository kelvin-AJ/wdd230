const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherBody = document.querySelector("body")
const url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=9759bf8ad638b8f6a851effbef8116f6";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

function capitalize(string){
    let split = string.toLowerCase().split(" ")
    return split.map((word => word[0].toUpperCase() + word.slice(1))).join(" ")  
}  

function  displayResults(weatherData) {
    weatherBody.insertAdjacentHTML("afterbegin", 
    `
    <h1>OpenWeatherMap.org API Test</h1>
    <p>The current temperature in ${weatherData.name}, ${weatherData.sys.country} is <span id="current-temp"><strong>${weatherData.main.temp.toFixed(0)}</strong></span> &deg;C</p>
    <h3>Current Condition Icon</h3>
    <figure>
    <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="${weatherData.weather[0].description}" id="weather-icon" />
    <figcaption><strong>${capitalize(weatherData.weather[0].description)}</strong></figcaption>
    </figure>`);
    // currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    // const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    // const desc = weatherData.weather[0].description;

    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc);
    // captionDesc.textContent = desc;
}

apiFetch();
