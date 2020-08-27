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
        const modal = document.querySelector(".taskForm")
        modal.style.display = "none"

    } else if (clickEvent.target.id === "createTask") {
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
    <section class="taskForm">
        <input type="text" id="taskName" class="taskFormTitle" placeHolder="Enter task title"/>
        <textarea id="taskDescription" class="taskFormContent" placeHolder="Enter desciption of task"></textarea>           
        <input type="date" id="taskDate" placeholder="Choose Task End Date" />
        <button id="saveTask" class="saveTask">Save Task</button>
        <button id="closeTask">Exit</button>
    </section>
        `
}