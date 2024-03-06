"use strict";
// interface for weather Data
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// defining query parameters
const inputBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".searchBtn");
const weatherBody = document.querySelector(".weather-body");
const weatherImg = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
//function to get weather data
function checkWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const apiKey = "017127c0c2e8c4681e1ffb73a76d7d31";
            const url = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}`;
            const response = yield fetch(url);
            const WeatherData = yield response.json();
            if (WeatherData.cod === "400") {
                handleNotFoundError();
                return;
            }
            displayWeatherInfo(WeatherData);
        }
        catch (error) {
            console.log("Error: ", error);
        }
    });
}
//functions handleNotFoundError
function handleNotFoundError() {
    locationNotFound.style.display = "flex";
    weatherBody.style.display = "none";
    console.log("Error: City not found or API request failed");
}
// displayWeatherData function
function displayWeatherInfo(weatherData) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log("WeatherData: ", weatherData);
    locationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
    // if the first data is found -> display other wise is nothing to display
    const temperatureValue = (_b = (_a = weatherData.main) === null || _a === void 0 ? void 0 : _a.temp) !== null && _b !== void 0 ? _b : null;
    const descriptionValue = (_d = (_c = weatherData.weather) === null || _c === void 0 ? void 0 : _c.description) !== null && _d !== void 0 ? _d : null;
    const humidityValue = (_f = (_e = weatherData.main) === null || _e === void 0 ? void 0 : _e.humidity) !== null && _f !== void 0 ? _f : null;
    const windSpeedValue = (_h = (_g = weatherData.wind) === null || _g === void 0 ? void 0 : _g.speed) !== null && _h !== void 0 ? _h : null;
    temperature.innerHTML = temperatureValue
        ? `${Math.round(temperatureValue - 273.15)} °C`
        : "";
    description.innerHTML = descriptionValue || "";
    humidity.innerHTML = humidityValue !== null ? `${humidityValue} %` : "";
    windSpeed.innerHTML = windSpeedValue !== null ? `${windSpeedValue} Km/h` : "";
}
