const sun = document.querySelector(".weather .sun");
const cloud = document.querySelector(".weather .cloud");
const button = document.querySelector(".search-box button");
const rain = document.querySelector(".rain");
const notFound = document.querySelector(".weather .not-found");
// weather details variable
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity span");
const wind = document.querySelector(".wind span");

button.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;
  const APIkey = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        notFound.src = "clouds.jpg";
        return;
      }

      notFound.src = "";

      //   weather details
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      switch (json.weather[0].main) {
        case "Clear":
          sun.style.transform = "scale(1) ";
          cloud.style.transform = " translateX(1000px)";
          rain.style.display = "none";
          break;
        case "Clouds":
          sun.style.transform = "scale(1) rotate(360deg) translateX(50px)";
          cloud.style.transform = " translateX(0)";
          break;
        case "Rain":
          sun.style.transform = "scale(0) ";
          cloud.style.transform = "scale(1.5) translateX(0) translateY(-50px)";
          rain.style.display = "flex";
          break;
        default:
          sun.style.transform = "scale(0)";
          cloud.style.transform = " translateX(1000px)";
      }
    });
});
