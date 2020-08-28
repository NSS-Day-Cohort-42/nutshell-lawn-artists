import keyObj from "../Settings.js"

const eventHub = document.querySelector(".container")

//will use once event listener is created.
// let eventPostalCode

// const eventHub = document.querySelector(".container")
// eventHub.addEventListener("eventSelected", customEvent => {
//     eventPostalCode = customEvent.detail.zip.substring(0, 5)
// })

let weather = []

eventHub.addEventListener("showEventWeather", (event) => {
    event.target.detail === zipCode
})

export const useForecastCopy = () => {
    return weather.slice()
}

export const dispatchForecastCaptured = () => {
    const forecastCaptured = new CustomEvent("dispatchedForecast")

    eventHub.dispatchEvent(forecastCaptured)
}

let zipCode = 37201

export const getForecast = () => {
// re-add ${eventPostalCode} to fetch argument once event listener is created
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${keyObj.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
        })
        .then(() => {useForecastCopy()
        })
        .then(dispatchForecastCaptured)
}