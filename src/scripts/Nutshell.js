import { eventForm } from "./events/EventForm.js"
import { TaskList } from "./tasks/TaskList.js";
import { ListFriends } from "./friends/FriendList.js"
import { ListArticles } from "./articles/ArticleList.js"
import { ListMessages } from "./messages/messageList.js";
import "./tasks/TaskForm.js";
import "./friends/FriendForm.js"
import "./articles/ArticleForm.js"


export const Nutshell = () => {

    eventForm()
    TaskList()
    ListFriends()
    ListArticles()
    ListMessages()

}