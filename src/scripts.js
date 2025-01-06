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

  // body.classList.toggle("dark");
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

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

let themeButton = document.querySelector("#themeButton");
themeButton.addEventListener("click", changeTheme);
