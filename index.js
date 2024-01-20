const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const apiKey = "ba87e1f04c9ccbe4f57b4cb024da6d64";
let dropdown = document.getElementById("citiesDropdown");
let conditions = document.getElementById("conditions");
let temperature = document.getElementById("temperature");

async function getWeather() {
    let cityName = dropdown.value;
    response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    data = await response.json();
    conditions.innerHTML = data.weather[0].main;
    temperature.innerHTML = Math.floor(data.main.temp) + "°F";
}
getWeather();

dropdown.onchange = function animateBlocks() {
    getWeather();

    let tempBlock = document.getElementById('tempBlock');
    tempBlock.style.animation = "none"

    let conditionsBlock = document.getElementById('conditionsBlock');
    conditionsBlock.style.animation = "none"

    requestAnimationFrame(() => {
        tempBlock.style.animation="zoomInAndOut 0.4s forwards";
        conditionsBlock.style.animation="zoomInAndOut 0.4s forwards"
    });
}