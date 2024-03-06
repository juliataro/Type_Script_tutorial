// interface for weather Data

interface WeatherData {
  cod: string;
  main?: {
    temp: number;
    humidity: number;
  };
  weather?: {
    description: string;
    main: string;
  };
  [key: string | number]: unknown;

  wind?: {
    speed: number;
    deg: number;
  };
}

// defining query parameters
const inputBox = document.querySelector(".search-box") as HTMLInputElement;
const searchBtn = document.querySelector(".searchBtn") as HTMLButtonElement;
const weatherBody = document.querySelector(".weather-body") as HTMLElement;
const weatherImg = document.querySelector(".weather-img") as HTMLImageElement;

const temperature = document.querySelector(".temperature") as HTMLElement;
const description = document.querySelector(".description") as HTMLElement;
const humidity = document.getElementById("humidity") as HTMLElement;
const windSpeed = document.getElementById("wind-speed") as HTMLElement;

const locationNotFound = document.querySelector(
  ".location-not-found"
) as HTMLElement;

//function to get weather data

async function checkWeather(city: string) {
  try {
    const apiKey = "017127c0c2e8c4681e1ffb73a76d7d31";
    const url = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    const WeatherData: WeatherData = await response.json();

    if (WeatherData.cod === "400") {
      handleNotFoundError();
      return;
    }
    displayWeatherInfo(WeatherData);
  } catch (error) {
    console.log("Error: ", error);
  }
}

//functions handleNotFoundError

function handleNotFoundError() {
  locationNotFound.style.display = "flex";
  weatherBody.style.display = "none";
  console.log("Error: City not found or API request failed");
}

// displayWeatherData function
function displayWeatherInfo(weatherData: WeatherData) {
  console.log("WeatherData: ", weatherData);
  locationNotFound.style.display = "none";
  weatherBody.style.display = "flex";

  // if the first data is found -> display other wise is nothing to display
  const temperatureValue = weatherData.main?.temp ?? null;
  const descriptionValue = weatherData.weather?.description ?? null;
  const humidityValue = weatherData.main?.humidity ?? null;
  const windSpeedValue = weatherData.wind?.speed ?? null;
  temperature.innerHTML = temperatureValue
    ? `${Math.round(temperatureValue - 273.15)} °C`
    : "";
  description.innerHTML = descriptionValue || "";
  humidity.innerHTML = humidityValue !== null ? `${humidityValue} %` : "";
  windSpeed.innerHTML = windSpeedValue !== null ? `${windSpeedValue} Km/h` : "";
}
