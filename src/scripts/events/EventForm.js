import {saveEvent} from "./EventProvider.js"

const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".event-button")

export const eventForm=()=>{
    contentTarget.innerHTML=`<button class="btn" id="create--event">New event</button>`
}

eventHub.addEventListener("click", event=>{
    if(event.target.id==="create--event"){
        const eventName=prompt("please enter the name of the event")
        const eventDate=prompt("please enter the date of the event","MM/DD/YYYY")
        const eventLocation=prompt("please enter the locatoin of the event")
        if(eventName===null||eventName===""){
            alert("Failed to enter an event name")
        }else if(eventDate===null||eventDate==="MM/DD/YYYY"){
            alert("Failed to enter an event date")
        }else if(eventLocation===null||eventLocation===""){
            alert("Failed to enter an event location")
        }else{
            const eventObject={
                "userId":parseInt(sessionStorage.getItem("activeUser")),
                "name":eventName,
                "date":eventDate,
                "location":eventLocation
            }
            saveEvent(eventObject)
        }
    }
})