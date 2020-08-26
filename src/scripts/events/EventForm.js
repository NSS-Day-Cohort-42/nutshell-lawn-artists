import {saveEvent} from "./EventProvider.js"

const eventHub=document.querySelector(".container")
const buttonTarget=document.querySelector(".event-button")
const contentTarget=document.querySelector(".popup-container")

export const eventForm=()=>{
    buttonTarget.innerHTML=`<button id="eventBtn" class="btn">New event</button>`
    contentTarget.innerHTML=`
    <div id="event--form" class="event--mobal" />
    <div class="event--form__content">
    <p>Name of event:</p>
    <input type="text" class="event--form__input" id="eventName">
    <p>Date of  event:</p>
    <input type="date" class="event--form__input" id="eventDate">
    <p>Location of event:</p>
    <input type="text" class="event--form__input" id="eventLocation">
    <button id="event--form__close" class="close">Close event form</button>
    <button id="create--event">submit</button>
    </div>
    </div>
    `
}

eventHub.addEventListener("click", event=>{
    if(event.target.id==="eventBtn"){
        const mobal=document.querySelector("#event--form")
        mobal.style.display="block"
    }else if(event.target.id=="event--form__close"){
        const mobal=document.querySelector("#event--form")
        mobal.style.display="none"
    }
    if(event.target.id==="create--event"){
        const eventName=document.querySelector("#eventName").value
        const eventDate=document.querySelector("#eventDate").value
        const eventLocation=document.querySelector("#eventLocation").value
        if(eventName===""){
            alert("Failed to enter an event name")
        }else if(eventDate===""){
            alert("Failed to enter an event date")
        }else if(eventLocation===""){
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