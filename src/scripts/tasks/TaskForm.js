import { saveTask, useTasks, getTasks } from "./TaskProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".create-container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveTask") {
        
        const taskName = document.querySelector("#taskName")
        const taskDate = document.querySelector("#taskDate")
        const taskDescription = document.querySelector("#taskDescription")
        
        const newTask = {
            title: taskName.value,
            description: taskDescription.value,
            date: taskDate.value
        }
        saveTask(newTask)
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
    </section>
    <button id="saveTask" class="saveTask">Save Task</button>
        `
}