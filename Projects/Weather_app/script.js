const apiKey = "63461aba15ccef51996b39231fed537a";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"63461aba15ccef51996b39231fed537a"}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
    weatherResult.style.display = "none";
  }
}

function displayWeather(data) {
  const { name } = data;
  const { icon: iconCode, description: desc } = data.weather[0];
  const { temp } = data.main;

  cityName.textContent = `${name}`;
  temperature.textContent = `🌡️ ${temp.toFixed(1)} °C`;
  description.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
  icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  weatherResult.style.display = "block";
}
