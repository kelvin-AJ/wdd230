const windSpeed = document.querySelector("#wind-speed");
const windchill = document.querySelector("#wind-chill");
const temperature = document.querySelector("#temp");

function calcChill(){
    const mph = Number(windSpeed.textContent) / 1.609;
    const fahrenheit = (Number(temperature.textContent) * (9/5)) + 32
    // (<=50°F and >3.0mph)
    if((mph > 3) && (fahrenheit <= 50)){
        const value = 35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16));
        windchill.textContent = `${Math.round(value)}°F`
    }else{
        windchill = "N/A"
    }
}
calcChill()