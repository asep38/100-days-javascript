const search = document.querySelector(".search-box button");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity span");
const wind = document.querySelector(".wind span");
const image = document.querySelector(".weather-box img");
const container = document.querySelector(".container");
const notFound = document.querySelector(".not-found");
const body = document.querySelector("body");

search.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;
  const APIkey = "b0a08e58fa1df296a2560dcd07ce3e90";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        notFound.classList.add(".fadeIn");
        notFound.style.display = "";

        temperature.style.display = "none";
        description.style.display = "none";
        humidity.style.display = "none";
        wind.style.display = "none";
        image.style.display = "none";
        return;
      }

      container.style.height = "600px";

      notFound.style.display = "none";
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./clear.png";
          body.style.background = "yellow";
          break;
        case "Rain":
          image.src = "./rain.png";
          body.style.background = "blue";
          break;
        case "Clouds":
          image.src = "./cloud.png";
          body.style.background = "cyan";
          break;
        case "Haze":
          image.src = "./mist.png";
          body.style.background = "red";
          break;
        case "Snow":
          image.src = "./snow.png";
          body.style.background = "blue";
          break;
        default:
          image.src = "default.png";
      }
    });
});
