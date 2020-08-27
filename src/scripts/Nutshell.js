import {eventForm} from "./events/EventForm.js"
import {ListFriends } from "./friends/FriendList.js"
import {eventList} from "./events/EventList.js"
export const Nutshell = () => {
    // Render all your UI components here
    eventForm()
    ListFriends()
    eventList()
}