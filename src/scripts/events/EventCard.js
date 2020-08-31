const eventHub = document.querySelector(".container")
export const eventHTML=(eventObj)=>{
    return `
    <div class="eventName">Event name: ${eventObj.name}</div>
    <div class="eventDate">Event date: ${eventObj.date}</div>
    <div class="eventLocation">Event location: ${eventObj.location}</div>

    <button class="btn show-weather-btn" id="weather--${eventObj.zipCode}">Show Weather</button>
    `
}

eventHub.addEventListener("click", e => {
  if(e.target.id.startsWith("weather--")) {
    const eventZip = e.target.id.split("--")[1]
    const showWeatherClicked = new CustomEvent("showWeatherHasBeenClicked", {
    detail: {
      eventZipCode: parseInt(eventZip)
    }
  })
  eventHub.dispatchEvent(showWeatherClicked)
}
})

