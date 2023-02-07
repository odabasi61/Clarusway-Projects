"use strict";

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=0f7086fd35384e42b5057f4acd39f2d0

// .env (environment) - gitignore  / nodejs ile çalışırken güvenlik gereği apikey burya konmaz. env dosyasına konur ve gitignore edilir.

const getNews = async () => {
  const API_KEY = "0f7086fd35384e42b5057f4acd39f2d0";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    // console.log(error);
    renderError(error);
  }
};

const renderNews = (news) => {
  console.log(news);
  const newsDiv = document.getElementById("news");
  // aşağıda sonuçlar çeşitli olabileceği için += kullandık
  news.forEach((item) => {
    const { title, description, urlToImage } = item;
    newsDiv.innerHTML += `<div class='newsCard'>
    <img src='${urlToImage}' />
    <h5>${title}</h5>
    <p>${description}</p>
    </div>`;
  });
};

const renderError = (err) => {
  console.log(err);
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = `<h2>${err}</h2>`;
  // burada tek bir sonuç basılacağı için sadece = koyuldu
};
getNews();
