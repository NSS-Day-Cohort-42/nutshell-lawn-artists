import {saveEvent} from "./EventProvider.js"

const eventHub=document.querySelector(".container")
const buttonTarget=document.querySelector(".event-button")
const contentTarget=document.querySelector(".popup-container")

export const eventForm=()=>{
    buttonTarget.innerHTML=`<button id="eventBtn" class="btn">New event</button>`
    contentTarget.innerHTML=`
    <div id="event--form__content" class="event--form__content">
    <p>Name of event:</p>
    <input type="text" class="event--form__input" id="eventName">
    <p>Date of  event:</p>
    <input type="date" class="event--form__input" id="eventDate">
    <p>Location of event:</p>
    <input type="text" class="event--form__input" id="eventLocation">
    <button id="event--form__close" class="close">Close event form</button>
    <button id="create--event">submit</button>
    </div>
    `
}

eventHub.addEventListener("click", event=>{
    const mobal=document.querySelector(".popup-container")
    window.onclick=(windowEvent)=>{
        console.log(windowEvent)
        if(windowEvent.target.id===""&&windowEvent.target.localName!=="p"){
            mobal.style.display="none"    
        }
    }
    if(event.target.id==="eventBtn"){
        mobal.style.display="block"
    }else if(event.target.id=="event--form__close"){
        mobal.style.display="none"
    }else if(event.target.id==="window"){
        mobal.style.display="none"
    }
    else if(event.target.id==="create--event"){
        const eventName=document.querySelector("#eventName").value
        const eventDate=document.querySelector("#eventDate").value
        const eventLocation=document.querySelector("#eventLocation").value
        console.log(document.querySelector("#eventDate"))
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