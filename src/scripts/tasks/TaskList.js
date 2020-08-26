import { TaskCardHTML } from "./TaskCard.js";
import { useTasks, getTasks } from "./TaskProvider.js";


const contentTarget = document.querySelector(".task-container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("taskStateChanged", () => {
    TaskList()
})


const render = (taskArray) => {
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
    getTasks()
    .then(() => {
        const allTasks = useTasks()
        render(allTasks)
    })
}