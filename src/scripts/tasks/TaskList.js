import { TaskCardHTML } from "./TaskCard.js";
import { useTasks, getTasks } from "./TaskProvider.js";
import { getUsers } from "../users/UserProvider.js";


const contentTarget = document.querySelector(".task-container")
const eventHub = document.querySelector(".container")
const createTaskTarget = document.querySelector(".create-container")

eventHub.addEventListener("taskStateChanged", () => {
    TaskList()
})


const render = () => {
    const userTasks = useTasks().filter((task) => {
        if(parseInt(sessionStorage.activeUser) === task.userId) {
            return true
        } else {
            return false
        }
    })
    createTaskTarget.innerHTML = `<button id="createTask">Create Task</button>`

    contentTarget.innerHTML = `
    <section class="taskList">
        ${
            userTasks.map(taskObj => {
                return TaskCardHTML(taskObj)
            }).reverse().join("")
        }
    </section>
    `
}

export const TaskList = () => {
    getUsers()
    .then(getTasks)
    .then(render)
    
}
// task.userId === sessionStorage.getItem("activeUser")