import { TaskList } from "./tasks/TaskList.js";
import "./tasks/TaskForm.js";
import { ListFriends } from "./friends/FriendList.js"
import { ListArticles } from "./articles/ArticleList.js"
import "./friends/FriendForm.js"
import { eventForm } from "./events/EventForm.js";
import { eventList } from "./events/EventList.js";


export const Nutshell = () => {
    eventForm()
    TaskList() 
    ListFriends()
    ListArticles()
    eventForm()
    eventList()
    // Render all your UI components here
}