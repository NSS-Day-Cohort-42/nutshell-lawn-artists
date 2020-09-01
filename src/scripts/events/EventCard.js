const eventHub = document.querySelector(".container")

export const eventHTML=(eventObj, isFirst, isOwn)=>{
    let monthString=""
    switch(eventObj.date.getMonth()){
        case 0:
            monthString="January"
            break
        case 1:
            monthString="February"
            break
            case 2:
                monthString="March"
                break
                case 3:
            monthString="April"
            break
            case 4:
            monthString="May"
            break
            case 5:
            monthString="June"
            break
            case 6:
            monthString="July"
            break
            case 7:
            monthString="August"
            break
            case 8:
            monthString="September"
            break
            case 9:
            monthString="October"
            break
            case 10:
            monthString="November"
            break
            case 11:
            monthString="December"
            break
    }


    if(isFirst&&isOwn){
        return `
        <section class="card event--first">
    <div class="event--name--first">Event name: ${eventObj.name}</div>
    <div class="event--date--first">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
    <div class="event--location--first" id="event-location--${eventObj.id}">${eventObj.location}</div>
    <div class="zipCode" id="event-zip--${eventObj.id}">${eventObj.zipCode}</div>
    <button class="btn show-weather-btn" id="event-weather--${eventObj.id}">Show Weather</button>
    <button class="btn event--edit" id="event--edit--${eventObj.id}">Edit</div>
    </section>
    `
    }else if(isFirst){
        return `
        <section class="card event--first">
    <div class="event--name--first">Event name: ${eventObj.name}</div>
    <div class="event--date--first">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
    <div class="event--location--first" id="event-location--${eventObj.id}">${eventObj.location}</div>
    <div class="zipCode" id="event-zip--${eventObj.id}">${eventObj.zipCode}</div>
    <button class="btn show-weather-btn" id="event-weather--${eventObj.id}">Show Weather</button>
    </section>
    `
    }else if(isOwn){
        return `
    <section class=" card event">
    <div class="event--name">Event name: ${eventObj.name}</div>
    <div class="event--date">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
    <div class="event--location" id="event-location--${eventObj.id}">${eventObj.location}</div>
    <div class="zipCode" id="event-zip--${eventObj.id}">${eventObj.zipCode}</div>
    <button class="btn show-weather-btn" id="event-weather--${eventObj.id}">Show Weather</button>
    <button class="btn event--edit" id="event--edit--${eventObj.id}">Edit</div>
    </section>
    `
    }else{
        return `
        <section class="event">
        <div class="event--name">Event name: ${eventObj.name}</div>
        <div class="event--date">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
        <div class="event--location" id="event-location--${eventObj.id}">${eventObj.location}</div>
        <div class="zipCode" id="event-zip--${eventObj.id}">${eventObj.zipCode}</div>
        <button class="btn show-weather-btn" id="event-weather--${eventObj.id}">Show Weather</button>
        </section>
        `
    }
}

eventHub.addEventListener("click", e => {
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

