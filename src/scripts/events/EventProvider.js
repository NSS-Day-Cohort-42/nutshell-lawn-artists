let events=[]

const eventHub=document.querySelector(".container")

export const getEvents=()=>{
    return fetch("http://localhost:8088/events")
    .then(response => response.json())
    .then(event=>events=event)
}

export const useEvent=()=>{
    return events.slice()
}

export const saveEvent=(eventObj)=>{
fetch("http://localhost:8088/events",{
    "method":"POST",
    "headers":{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(eventObj)
})
.then(getEvents)
    .then(dispatchStateChangeEvent)
}

export const deleteEvent=(id)=>{
    fetch(`http://localhost:8088/events/${id}`, {
        method:"DELETE"
    })
    .then(getEvents)
    .then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent=()=>{
    eventHub.dispatchEvent(new CustomEvent("eventChanged"))
}