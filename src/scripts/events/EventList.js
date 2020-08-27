import {getEvents, useEvents} from "./EventProvider.js"
import {eventHTML} from "./EventCard.js"
import {useFriendsByUserId, getFriends} from "../friends/FriendProvider.js"

const contentTarget=document.querySelector(".event-container")
export const eventList=()=>{
    getEvents()
    .then(getFriends())
    .then(()=>{
        const friendsArray=useFriendsByUserId(parseInt(sessionStorage.getItem("activeUser")))
        console.log(friendsArray)
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
        const correctEvents=friendsArray.map(friendObj=>{
            const currentevent=eventsSortedByDate.filter(eventObj=>eventObj.userId===parseInt(sessionStorage.getItem("activeUser"))||eventObj.userId===friendObj.following)
            return currentevent
        })
        contentTarget.innerHTML=correctEvents.map(eventObj=>eventHTML(eventObj)).join("")
})
}