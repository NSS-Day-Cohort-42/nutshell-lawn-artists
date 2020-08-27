import { TaskList } from "./tasks/TaskList.js";
import "./tasks/TaskForm.js";
import { ListFriends } from "./friends/FriendList.js"
import "./friends/FriendForm.js"


export const Nutshell = () => {
    TaskList() 
    ListFriends()
    // Render all your UI components here
}