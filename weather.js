//Complete the Weather API Backend part using openweathermap api
var msg = document.getElementById("msg");

const weatherApi = {
    apiKey: "6d38078edebf4341b2230812475220eb",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const input = document.getElementById('search-box');

input.addEventListener('keypress', (event) => {

    if (event.keycode == 13) {
        console.log(input.value);
        getWeatherReport(input.value);
    }
});

// Get Weather Report

function getWeatherReport(city) {

    fetch(`${weatherApi.baseUrl}?q={city}&appid=${weatherApi.apiKey}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);

    /*.catch(()=>{
        msg.textContent="Please search for a valid city";
    });*/

}

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}`;

    let minMaxTemp = document.getElementById('hi-low');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)} ${Math.ceil(weather.main.temp_max)}`;

    let weatherType = document.getElementById('weather');
    weather.innerText = `${weather.weather[0].main}`;

    var icon = document.getElementById('icon');

    if (id < 250) {
        icon.src = `https://api.http://openweathermap.org/img/wn/ ${weather.weather[0].icon}.png`;
    } else if (id < 350) {
        icon.src = `https://api.http://openweathermap.org/img/wn/ ${weather.weather[0].icon}.png`;
    } else if (id < 550) {
        icon.src = `https://api.http://openweathermap.org/img/wn/ ${weather.weather[0].icon}.png`;
    } else if (id < 650) {
        icon.src = `https://api.http://openweathermap.org/img/wn/ ${weather.weather[0].icon}.png`;
    } else if (id < 800) {
        icon.src = `https://api.http://openweathermap.org/img/wn/ ${weather.weather[0].icon}.png`;
    } else if (id === 800) {
        icon.src = `https://api.http://openweathermap.org/img/wn/ ${weather.weather[0].icon}.png`;
    } else if (id > 800) {
        icon.src = `https://api.http://openweathermap.org/img/wn/ ${weather.weather[0].icon}.png`;
    }

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate);

}

// date

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${day} ${date} ${month} ${year}`;

}