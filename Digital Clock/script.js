"use strict";

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
  const dates = time.getDate();
  const day = time.getDay();
  const year = time.getFullYear();

  const date = document.querySelector(".date");
  date.innerHTML = days[day] + ", " + dates + " " + months[month] + " " + year;
}, 1000);

setInterval(() => {
  const digitalHour = new Date();
  let hours = digitalHour.getHours();
  let minutes = digitalHour.getMinutes();
  let seconds = digitalHour.getSeconds();
  const amPm = document.querySelector(".ampm");
  amPm.innerHTML = hours < 10 ? "AM" : "PM";

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const digitalTime = document.querySelector(".digital-time");
  digitalTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);
