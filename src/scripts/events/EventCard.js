export const eventHTML=(eventObj)=>{
    //console.log(eventObj.date.getMonth()+" "+eventObj.date.getDate()+" "+eventObj.date.getFullYear())
    return `
    <div class="eventName">Event name: ${eventObj.name}</div>
    <div class="eventDate">Event date: ${eventObj.date.getMonth()} ${eventObj.date.getDate()} ${eventObj.date.getFullYear()}</div>
    <div class="eventLocation">Event location: ${eventObj.location}</div>
    `
}