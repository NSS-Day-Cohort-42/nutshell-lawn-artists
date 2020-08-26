import { TaskCardHTML } from "./TaskCard.js";
import { useTasks, getTasks } from "./TaskProvider.js";
import { getUsers } from "../users/UserProvider.js";


const contentTarget = document.querySelector(".task-container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("taskStateChanged", () => {
    TaskList()
})


const render = (taskArray) => {
    const userTasks = 

    contentTarget.innerHTML = `
    <section class="taskList">
    ${
        taskArray.map(taskObj => {
            return TaskCardHTML(taskObj)
        }).reverse().join("")
    }
    </section>
    `
}

export const TaskList = () => {
    getUsers()
    .then(getTasks)
    .then(() => render())
}