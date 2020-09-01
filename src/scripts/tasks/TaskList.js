import { TaskCardHTML } from "./TaskCard.js";
import { useTasks, getTasks } from "./TaskProvider.js";
import { getUsers } from "../users/UserProvider.js";


const contentTarget = document.querySelector(".task-container")
const eventHub = document.querySelector(".container")
const createTaskTarget = document.querySelector(".create-container")

eventHub.addEventListener("taskStateChanged", () => {
    render()
})

const renderButton = () => {
    createTaskTarget.innerHTML += `<button class="btn" id="createTask">Create Task</button>`
}

const render = () => {
    const userTasks = useTasks().filter((task) => {
        if(parseInt(sessionStorage.activeUser) === task.userId) {
            return true
        } else {
            return false
        }
    })

    contentTarget.innerHTML = `
    <section class="taskList">
    <h3 class"header task--header"><strong>Tasks</strong></h3>
        <div class="card card--task task">
            ${
                userTasks.map(taskObj => {
                    return TaskCardHTML(taskObj)
                }).reverse().join("")
            }
        </div>
    </section>
    `
}

export const TaskList = () => {
    getUsers()
    .then(getTasks)
    .then(() => {
        render()
        renderButton()
    })


}
// task.userId === sessionStorage.getItem("activeUser")