import {getEvents, useEvents} from "./EventProvider.js"
import {eventHTML} from "./EventCard.js"
import {useFriendsByUserId, getFriends} from "../friends/FriendProvider.js"

const contentTarget=document.querySelector(".event-container")

export const eventList=()=>{
    //get events then get friends
    getEvents()
    .then(getFriends())
    .then(()=>{
        //assign friends to the friendsArray 
        const friendsArray=useFriendsByUserId(parseInt(sessionStorage.getItem("activeUser")))
        //assign events to eventsArray
        let eventArray=useEvents()
        /*convert the date string in the event object into a date object.
        Then assign the date object to the date key of the event object*/
        eventArray=eventArray.map(eventObj=>{
            const dateObj=new Date(eventObj.date)
            eventObj.date=dateObj
            return eventObj
        })
        /*sorting the eventObject based on date then reverse it*/
        const eventsSortedByDate=eventArray.sort((firstObj, secondObj)=>{
            console.log(secondObj.date-firstObj.date)
            return secondObj.date-firstObj.date
        }).reverse()

        const correctEvents=eventsSortedByDate.map(eventObj=>{
            let currentEvent={}
            if(friendsArray===[]){
                if(eventObj.userId===parseInt(sessionStorage.getItem("activeUser"))){
                    currentEvent=eventObj
                }
            }else{if(eventObj.userId===parseInt(sessionStorage.getItem("activeUser"))||eventObj.userId===friendObj.following){
                currentEvent=eventObj
            }
        }
        return currentEvent
        })
        contentTarget.innerHTML=correctEvents.map(eventObj=>eventHTML(eventObj)).join("")
})
}

