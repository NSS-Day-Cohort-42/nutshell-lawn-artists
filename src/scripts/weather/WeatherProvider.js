import keyObj from "../Settings.js";
import { ListWeather } from "./WeatherList.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("showWeatherHasBeenClicked", ce => {
  zipCode = ce.detail.eventZipCode
  ListWeather()
})

let weather = []
let zipCode = 37201

export const useWeather = () => {
    return weather.slice()
}

export const dispatchWeatherCaptured = () => {
    const weatherCaptured = new CustomEvent("dispatchedWeather")

    eventHub.dispatchEvent(weatherCaptured)
}


export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${keyObj.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
        .then(() => {useWeather()
        })
        .then(dispatchWeatherCaptured)
}