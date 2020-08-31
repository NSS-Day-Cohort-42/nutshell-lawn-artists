<<<<<<< HEAD
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
        <section class="event--first">
    <div class="event--name--first">Event name: ${eventObj.name}</div>
    <div class="event--date--first">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
    <div class="event--location--first">Event location: ${eventObj.location}</div>
    <button class="event--edit" id="event--edit--${eventObj.id}">Edit</div>
    </section>
    `
    }else if(isFirst){
        return `
        <section class="event--first">
    <div class="event--name--first">Event name: ${eventObj.name}</div>
    <div class="event--date--first">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
    <div class="event--location--first">Event location: ${eventObj.location}</div>
    </section>
    `
    }else if(isOwn){
        return `
    <section class="event">
    <div class="event--name">Event name: ${eventObj.name}</div>
    <div class="event--date">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
    <div class="event--location">Event location: ${eventObj.location}</div>
    <button class="event--edit" id="event--edit--${eventObj.id}">Edit</div>
    </section>
    `
    }else{
        return `
        <section class="event">
        <div class="event--name">Event name: ${eventObj.name}</div>
        <div class="event--date">Event date: ${monthString} ${eventObj.date.getDate()}, ${eventObj.date.getFullYear()}</div>
        <div class="event--location">Event location: ${eventObj.location}</div>
        </section>
        `   
    }
}
=======
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

>>>>>>> master
