const eventHub = document.querySelector(".container")
export const eventHTML=(eventObj)=>{
    return `
    <div class="eventName">Event name: ${eventObj.name}</div>
    <div class="eventDate">Event date: ${eventObj.date}</div>
    <div class="eventLocation" id="event-location--${eventObj.id}">${eventObj.location}</div>
    <div class="zipCode" id="event-zip--${eventObj.id}">${eventObj.zipCode}</div>

    <button class="btn show-weather-btn" id="event-weather--${eventObj.id}">Show Weather</button>
    `
}

eventHub.addEventListener("click", e => {
  debugger
  if(e.target.id.startsWith("event-weather--")) {
    const eventId = e.target.id.split("--")[1]
    const eventZip = document.querySelector(`#event-zip--${eventId}`)
    const eventlocation = document.querySelector(`#event-location--${eventId}`)
    const showWeatherClicked = new CustomEvent("showWeatherHasBeenClicked", {
    detail: {
      eventZipCode: parseInt(eventZip.innerHTML),
      eventWeatherLocation: eventlocation.innerHTML
    }
  })
  eventHub.dispatchEvent(showWeatherClicked)
}
})

