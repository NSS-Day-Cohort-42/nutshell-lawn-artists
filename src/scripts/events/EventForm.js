import {saveEvent} from "./EventProvider.js"

const eventHub=document.querySelector(".container")
const contentTarget=document.querySelector(".event-container")

export const eventForm=()=>{
    contentTarget.innerHTML=`
    <input id="event--name" type="text" placeholder="please enter the name of the event">
    <input id="event--date" type="date" placeholder="please enter the date of the event">
    <input id="event--location" type="text" placeholder="please enter the location of the event">
    <button id="submit--event">submit</button>
    `
}

eventHub.addEventListener("click", event=>{
    if(event.target.id==="submit--event"){
        const eventName=document.querySelector("#event--name")
        const eventDate=document.querySelector("#event--date")
        const eventLocation=document.querySelector("event--location")
        const eventobject={
            "userId":sessionStorage.getItem("activeUser"),
            "name":eventName.value,
            "date":eventDate.value,
            "location":eventLocation.value
        }
        
    }
})