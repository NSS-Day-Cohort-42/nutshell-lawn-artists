import {getEvents, useEvents} from "./EventProvider.js"
import {eventHTML} from "./EventCard.js"
import {useFriendsByUserId} from "../friends/FriendProvider.js"

const contentTarget=document.querySelector(".event-container")
export const eventList=()=>{
    getEvents()
    .then(()=>{
        const freindsArray=useFriendsByUserId(parseInt(sessionStorage.getItem("activeUser")))
        let eventArray=useEvents()
        eventArray=eventArray.map(eventObj=>{
            const dateObj=new Date(eventObj.date)
            eventObj.date=dateObj
            return eventObj
        })
        const eventsSortedByDate=eventArray.sort((firstObj, secondObj)=>{
            console.log(secondObj.date-firstObj.date)
            return secondObj.date-firstObj.date
        }).reverse()
        const correctEvents=eventsSortedByDate.filter(eventObj=>eventObj.userId===parseInt(sessionStorage.getItem("activeUser")))
        contentTarget.innerHTML=correctEvents.map(eventObj=>eventHTML(eventObj)).join("")
})
}