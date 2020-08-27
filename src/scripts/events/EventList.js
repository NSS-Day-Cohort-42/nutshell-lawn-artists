import {getEvents, useEvents} from "./EventProvider.js"
import {eventHTML} from "./EventCard.js"

const contentTarget=document.querySelector(".event-container")
export const eventList=()=>{
    getEvents()
    .then(()=>{
        const eventArray=useEvents()
        contentTarget.innerHTML=eventArray.map(eventObj=>{
            eventHTML(eventObj)
        }).join("")
    })
}