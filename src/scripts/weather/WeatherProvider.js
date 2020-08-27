import keyObj from "../Settings.js"

//will use once event listener is created.
// let eventPostalCode

// const eventHub = document.querySelector(".container")
// eventHub.addEventListener("eventSelected", customEvent => {
//     eventPostalCode = customEvent.detail.zip.substring(0, 5)
// })

let weather = []

export const useWeatherCopy = () => {
    return weather.slice()
}

export const getWeather = () => {
// re-add ${eventPostalCode} to fetch argument once event listener is created
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=37201&units=imperial&appid=${keyObj.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
}