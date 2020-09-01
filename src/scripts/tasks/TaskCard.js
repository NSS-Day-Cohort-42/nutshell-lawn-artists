import { deleteTask } from "./TaskProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {  
    if(clickEvent.target.id.startsWith("task-completed--")){
        const [prompt, taskId] = clickEvent.target.id.split("--")
        const taskTarget = document.querySelector(`#task--${taskId}`) 
            taskTarget.classList.toggle("strikethrough")

    } else if(clickEvent.target.id.startsWith("task-delete--")) {
        const taskId = clickEvent.target.id.split("--")[1]
        deleteTask(taskId)
    }
})

export const TaskCardHTML = (task) => {
    return `
    <section id="task--${task.id}" class="taskCard">
        <div class="task--name">${task.title}</div>
        <div class="task--desciption">${task.description}</div>
        <div class="task--date">${task.date}</div>
    <button class="btn" id="task-delete--${task.id}" type="button">Delete</button>
    </section>
    <div>Completed? <input type="checkbox" id="task-completed--${task.id}"></input></div>
    `
}