import {getEvents, useEvents} from "./EventProvider.js"
import {eventHTML} from "./EventCard.js"
import {useFriendsByUserId, getFriends, useFriends} from "../friends/FriendProvider.js"

const contentTarget=document.querySelector(".event-container")

export const eventList=()=>{
    //get events then get friends
    getEvents()
    .then(getFriends)
    .then(()=>{
        //assign friends to the friendsArray
        const friendsArray=useFriendsByUserId(sessionStorage.getItem("activeUser"))
        //assign events to eventsArray
        let eventArray=useEvents()
        /*convert the date string in the event object into a date object.
        Then assign the date object to the date key of the event object*/
        if(eventArray.length!==0){
            eventArray=eventArray.map(eventObj=>{
            const dateObj=new Date(eventObj.date)
            eventObj.date=dateObj
            return eventObj
        })
        /*sorting the eventObject based on date then reverse it*/
        const eventsSortedByDate=eventArray.sort((firstObj, secondObj)=>{
            return secondObj.date-firstObj.date
        }).reverse()
        let correctEvents=[]
        if(friendsArray.length===0){
            correctEvents=eventsSortedByDate.filter(eventObj=>eventObj.userId===parseInt(sessionStorage.getItem("activeUser")))
        }else{
            eventsSortedByDate.map(eventObj=>{
                if(eventObj.userId===parseInt(sessionStorage.getItem("activeUser"))){
                    correctEvents.push(eventObj)
                }else(
                    friendsArray.map(friendObj=>{
                    if(eventObj.userId===friendObj.following){
                        correctEvents.push(eventObj)
                    }
                }) 
                
                )
        })
        }
        /*const correctEvents=eventsSortedByDate.map(eventObj=>{
            let currentEvent={}
            if(friendsArray===undefined||friendsArray.length===0){
                if(eventObj.userId===parseInt(sessionStorage.getItem("activeUser"))){
                    currentEvent=eventObj
                }
            }else{
                friendsArray.map(friendObj=>{
                    if(eventObj.userId===parseInt(sessionStorage.getItem("activeUser"))||eventObj.userId===friendObj.following){
                        console.log(eventObj)
                        currentEvent=eventObj
                }
    })
                }
        return currentEvent
        })*/
        console.log(correctEvents)
        if (correctEvents===undefined||correctEvents.length===0){
            contentTarget.innerHTML=`
            <p>There are no events right now</p>
            `    
        }else{
            contentTarget.innerHTML=correctEvents.map(eventObj=>eventHTML(eventObj)).join("")
        }
}
})
}

