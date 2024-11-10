const apiKey = "Your_API_Key";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weatherIcon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
  //console.log(response);
  var data = await response.json();
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
searchBtn.addEventListener("click", () => {
  // console.log(input.value);
  checkWeather(input.value);
});
