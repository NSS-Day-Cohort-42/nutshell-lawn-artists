import {saveEvent} from "./EventProvider.js"

const eventHub=document.querySelector(".container")
const buttonTarget=document.querySelector(".create-container")
const contentTarget=document.querySelector(".popup-container")

export const eventForm=()=>{
    buttonTarget.innerHTML+=`<button id="eventBtn" class="btn">New event</button>`
}

eventHub.addEventListener("click", event=>{
    const modal=document.querySelector(".popup-container")
    /*
    was a possible way to get the modal to close did not work
    window.onclick=(windowEvent)=>{
        console.log(windowEvent)
        if(windowEvent.target.id===""&&windowEvent.target.localName!=="p"){
            modal.style.display="none"
        }
    }*/
    if(event.target.id==="eventBtn"){
        contentTarget.innerHTML=`
    <div id="event--form__content" class="event--form__content">
    <p>Name of event: <input type="text" class="event--form__input" id="eventName"></p>
    <p>Date of  event: <input type="date" class="event--form__input" id="eventDate"></p>
    <p>Location of event: <input type="text" class="event--form__input" id="eventLocation"></p>
    <p>Event zipcode: <input type="text" class="event--form__input" id="eventZip"></p>
    <button id="event--form__close" class="close">Close event form</button>
    <button id="create--event">Submit</button>
    </div>
    `
    contentTarget.classList.add("visible")
    }else if(event.target.id=="event--form__close"){
        contentTarget.classList.remove("visible")
        contentTarget.innerHTML=""
    }
    else if(event.target.id==="create--event"){
        const eventName=document.querySelector("#eventName").value
        const eventDate=document.querySelector("#eventDate").value
        const eventLocation=document.querySelector("#eventLocation").value
        const eventZipCode = document.querySelector("#eventZipCode").value

        console.log(document.querySelector("#eventDate"))
        if(eventName===""){
            alert("Failed to enter an event name")
        }else if(eventDate===""){
            alert("Failed to enter an event date")
        }else if(eventLocation===""){
            alert("Failed to enter an event location")
        }else if(eventZipCode===""){
          alert("Failed to enter an event zip")
        }else{
            const eventObject={
                "userId":parseInt(sessionStorage.getItem("activeUser")),
                "name":eventName,
                "date":eventDate,
                "location":eventLocation,
                "zipCode":eventZipCode
            }
            saveEvent(eventObject)
        }
    }
})