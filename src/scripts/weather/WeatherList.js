import { getWeather, useWeather } from "./WeatherProvider.js";

const contentTarget = document.querySelector(".current-weather-container")
const eventHub = document.querySelector(".container")

let location = "Nashville, TN"

eventHub.addEventListener("dispatchedWeather", () => {
    render()
})

eventHub.addEventListener("showWeatherHasBeenClicked", ce => {
    location = ce.detail.eventWeatherLocation
    ListWeather()
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

export const ListWeather = () => {
    getWeather()
    .then(render)
}

const render = () => {
    let forecastData = useWeather()

    const day1 = forecastData[0]
    const day2 = forecastData[8]
    const day3 = forecastData[16]
    const day4 = forecastData[24]
    const day5 = forecastData[32]
    
    const fiveDayForeCastArray = [day1, day2, day3, day4, day5]

    const weatherCards = fiveDayForeCastArray.map((day) => {
        return `
        <div class="weatherDayCard">
            <div class="weatherDayOfTheWeekCard">${dayOfTheWeek(day)}</div>
            <div class="forecast-card--details">
                <div class="forecast-card--image">
                <img class="image forecast-image" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                </div>
                <div class="temps">
                    <div class="temp--high">
                    ${Math.round(day.main.temp_max)}&deg; F
                    </div>
                    <div class="temp--low">
                    ${Math.round(day.main.temp_min)}&deg; F
                    </div>
                </div>
            </div>
        </div>
        `
    }).join("")

    contentTarget.innerHTML = `
    <h2 class="weather-location">${location}</h2>
    <div class="weatherCards">
            ${weatherCards}
    </div>
    `
}