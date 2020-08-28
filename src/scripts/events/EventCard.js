export const eventHTML=(eventObj)=>{
    return `
    <div class="eventName">Event name: ${eventObj.name}</div>
    <div class="eventDate">Event date: ${eventObj.date}</div>
    <div class="eventLocation">Event location: ${eventObj.location}</div>
    `
}