const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const apiKey = "ba87e1f04c9ccbe4f57b4cb024da6d64";

let cityBox = document.getElementById("cityBox");
let conditions = document.getElementById("conditions");
let temperature = document.getElementById("temperature");
let realCityName = document.getElementById("realCityName");

let tempBlock = document.getElementById('tempBlock');
let conditionsBlock = document.getElementById('conditionsBlock');
let cityBlock = document.getElementById('cityBlock');

async function getWeather() {
    let cityName = cityBox.value;
    if (cityName === "") {
        cityName = "New York City";
    }
    response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    data = await response.json();
    console.log(data);
    conditions.innerHTML = data.weather[0].main;
    temperature.innerHTML = Math.floor(data.main.temp) + "°F";
    realCityName.innerHTML = data.name;
}
getWeather();

cityBox.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        getWeather();

        tempBlock.style.animation = "none";
        conditionsBlock.style.animation = "none";
        cityBlock.style.animation = "none";

        requestAnimationFrame(() => {
            tempBlock.style.animation = "zoomInAndOut 0.4s forwards";
            conditionsBlock.style.animation = "zoomInAndOut 0.4s forwards";
            cityBlock.style.animation = "zoomInAndOut 0.4s forwards";
        });
    }
});