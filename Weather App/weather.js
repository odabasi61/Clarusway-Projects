const form = document.querySelector("form");
const input = document.querySelector("form input");
const msgSpan = form.querySelector(".msg");
const list = document.querySelector(".container .cities");

// localStorage.setItem(
//   "apiKey",
//   EncryptStringAES("e38336df8ed6ab9f4ba2f79bd7a0a104")
// );

// butona click fonksiyonu atama yöntemleri: html inline assign, addeventlistener, onclick, setattribute
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
  //form.reset();
  //input.value = '';
  //target vs currentTarget
  // e.target.reset();
  e.currentTarget.reset();
});

const getWeatherDataFromApi = async () => {
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  // yukarda local storage içinde şifreleyerek eklediğimiz api keyi burada deşifre edip ekliyoruz. başka ullanıcılar hala göremez.
  // console.log(apiKey);
  const cityName = input.value;
  const units = "metric";
  const lang = "en";

  // http request url
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  try {
    // fetch
    // const response = await fetch(url).then((response) => response.json());

    //axios
    const response = await axios(url);
    // console.log(response);

    // obj. destructuring
    const { main, name, sys, weather } = response.data; // axios ile yaptığımız için data ekledik. fetch ile yapsak dataya gerek yok
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
    // console.log(iconUrlAWS);

    // do not enter the same city again
    // filter, map, reduce, forEach ==> array
    // forEach ==> nodeList
    // name in 49. line is ${name}

    const cityNameSpans = list.querySelectorAll("span");
    if (cityNameSpans.length > 0) {
      const filteredArray = [...cityNameSpans].filter(
        (span) => span.innerText == name
      );
      if (filteredArray.length > 0) {
        msgSpan.innerText = `You have already got the weather info for ${name}`;
        setTimeout(() => {
          msgSpan.innerText = "";
        }, 3000);
        return;
      }
    }

    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = `<li class="city">
    <h2 class="city-name" data-name="${name}, ${sys.country}">
      <span>${name}</span>
      <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img class="city-icon" src="${iconUrlAWS}">
      <figcaption>${weather[0].description}</figcaption>
    </figure>
</li>`;

    // append - prepend
    list.prepend(createdLi);
  } catch (error) {
    // error logging
    //postErrorLog("weather.js", "getWeatherDataFromApi", date, error);
    msgSpan.innerText = `City not found!`;
    setTimeout(() => {
      msgSpan.innerText = "";
    }, 3000);
  }
};

// capturing => parent to child
// list.addEventListener('click', () => {
//   alert('list clicked');
// });

// bubbling => child to patent
// createdli.addEventListener('click', (e) => {
//   alert(e.target.tagName + 'element clicked');
// });
