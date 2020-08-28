import { getForecast, useForecastCopy } from "./WeatherProvider.js";

const contentTarget = document.querySelector(".current-weather-container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("dispatchedForecast", () => {
    filteredWeather()
})

export const dayOfTheWeek = (weather) => {
    const date = new Date(weather.dt*1000)

    const daysOfTheWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const day = date.getDay()

    return daysOfTheWeek[day]
}

export const filteredWeather = () => {
    let forecastData = useForecastCopy()

    const day1 = forecastData[0]
    const day2 = forecastData[8]
    const day3 = forecastData[16]
    const day4 = forecastData[24]
    const day5 = forecastData[32]
    
    const fiveDayForeCastArray = [day1, day2, day3, day4, day5]

    contentTarget.innerHTML = 
        fiveDayForeCastArray.map((day) => {
            return `<div class="weatherDayCard">${dayOfTheWeek(day)}</div>
            <div class="forecast-card--details">
                <span class="forecast-card--image">
                <img class="image forecast-image" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                    </span>
                    <span class="temp--high">
                    ${Math.round(day.main.temp_max)}&deg; F
                        </span>
                        <span class="temp--low">
                    ${Math.round(day.main.temp_min)}&deg; F
                    </span>
                    </div>
                    `
                }).join("")
            }