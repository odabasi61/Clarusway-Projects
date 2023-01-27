"use strict";

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");
const API_KEY = "e38336df8ed6ab9f4ba2f79bd7a0a104";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 13 ? "PM" : "AM";

  timeEl.innerHTML =
    hoursIn12HrFormat + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`;

  dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000); // this function will be called every 1 second

getWeatherData();

function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData();
      });
  });
}

function showWeatherData(data) {
  let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

  currentWeatherItemsEl.innerHTML = ` <div class="weather-item">
  <div>Humidity</div>
  <div>${humidity}%</div>
</div>
<div class="weather-item">
  <div>Pressure</div>
  <div>${pressure}</div>
</div>
<div class="weather-item">
  <div>Wind Speed</div>
  <div>${wind_speed}</div>
</div>
<div class="weather-item">
  <div>Sunrise</div>
  <div>${window.moment(sunrise * 1000).format("HH:mm a")}</div>
</div>
<div class="weather-item">
  <div>Sunset</div>
  <div>${window.moment(sunset * 1000).format("HH:mm a")}</div>
</div>`;
}
