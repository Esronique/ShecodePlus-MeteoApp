function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
function changeTheme() {
  let body = document.querySelector("body");
  let headerElement = document.querySelector("header");
  let footerElement = document.querySelector("footer");
  let searchElement = document.querySelector("#search-form-input");
  let searchButton = document.querySelector("#search-form-button");
  let bodyBackground = document.querySelector("video");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    headerElement.classList.remove("dark");
    footerElement.classList.remove("dark");
    searchElement.classList.remove("dark");
    searchButton.classList.remove("dark");
    bodyBackground.src = "videos/clouds.mp4";
  } else {
    body.classList.add("dark");
    headerElement.classList.add("dark");
    footerElement.classList.add("dark");
    searchElement.classList.add("dark");
    searchButton.classList.add("dark");
    bodyBackground.src = "videos/darkClouds.mp4";
  }
}

function refreshWeather(response) {
  let temperatureElement = document.querySelector("#currentTemp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "3af5d1040392d37b9oa8ta7a106b03d4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

let themeButton = document.querySelector("#themeButton");
themeButton.addEventListener("click", changeTheme);
