const apiKey = "Your_API_key";//get your free api key from openWeatherMap
//require('dotenv').config(); //api key from dotenv

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weatherIcon");
async function checkWeather(city) {
  //console.log(process.env.API_KEY);
  //apiKey = process.env.API_KEY;
  try{
    const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
  //console.log(response);
  let data = await response.json();
  console.log(data);
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent = data.main.temp + `ºc`;
  document.querySelector(".humidity").textContent = data.main.humidity + `%`;
  document.querySelector(".wind").textContent = data.wind.speed + `Km/h`;
  let iconId = data.weather[0].icon;
  //https://openweathermap.org/img/wn/02d@2x.png
  // weatherIcon.src = `https://openweathermap.org/img/wn/${iconId }2x.png`;

  weatherIcon.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  //   console.log(iconId);
}

catch(error){
  alert("City not found");
}
}
searchBtn.addEventListener("click", () => {
  // console.log(input.value);
  checkWeather(input.value);
});
