import { TaskList } from "./tasks/TaskList.js";
import { TaskForm } from "./tasks/TaskForm.js";
import { ListFriends } from "./friends/FriendList.js"


export const Nutshell = () => {
    TaskForm() 
    TaskList() 
    ListFriends()
    // Render all your UI components here
}