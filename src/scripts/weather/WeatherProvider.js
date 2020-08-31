//import keyObj from "../Settings.js"

const eventHub = document.querySelector(".container")

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
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=ddc6d5ca082edc99454726cfe8e61d3b`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
        .then(() => {useWeather()
        })
        .then(dispatchWeatherCaptured)
    }
        //${keyObj.weatherKey}