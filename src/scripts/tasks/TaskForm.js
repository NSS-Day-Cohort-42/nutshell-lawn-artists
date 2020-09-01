import { saveTask, getTasks } from "./TaskProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".popup-container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveTask") {

        const taskName = document.querySelector("#taskName")
        const taskDate = document.querySelector("#taskDate")
        const taskDescription = document.querySelector("#taskDescription")

        const newTask = {
            userId: parseInt(sessionStorage.getItem("activeUser")),
            title: taskName.value,
            description: taskDescription.value,
            date: taskDate.value
        }
        saveTask(newTask)
        .then(TaskForm)
    } else if (clickEvent.target.id === "closeTask") {
        contentTarget.classList.remove("visible")

    } else if (clickEvent.target.id === "createTask") {
        contentTarget.classList.add("visible")
        TaskForm()
    }
})

export const TaskForm = () => {
    getTasks()
    .then(() => {
        render()
    })
}

const render = () => {
    contentTarget.innerHTML =  `
    <section class="form taskForm">
        <input type="text" id="taskName" class="input input--task-title taskFormTitle" placeHolder="Enter task title"/>
        <textarea id="taskDescription" class="input input-task-content taskFormContent" placeHolder="Enter description of task"></textarea>
        <input type="date" class="input input--task-date" id="taskDate" placeholder="Choose Task End Date" />
        <button id="saveTask" class="btn saveTask">Save Task</button>
        <button class="btn" id="closeTask">Exit</button>
    </section>
    `
}