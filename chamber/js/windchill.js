const windSpeed = document.querySelector("#wind-speed").textContent;
const windchill = document.querySelector("#wind-chill");
const temperature = document.querySelector("#temp").textContent;

function calcChill(){
    const mph = Number(windSpeed) / 1.609;
    const fahrenheit = (Number(temperature) * (9/5)) + 32
    // (<=50°F and >3.0mph)
    if((mph > 3) && (fahrenheit <= 50)){
        const value = 35.74 + (0.6215 * fahrenheit) - (35.75 * (mph ** 0.16)) + (0.4275 * fahrenheit * (mph ** 0.16));
        windchill.textContent = `${Math.round(value)}°F`
    }else{
        windchill = "N/A"
    }
}
calcChill()