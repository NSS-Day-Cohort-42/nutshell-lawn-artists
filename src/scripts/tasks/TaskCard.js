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
    <section id="card card--tasktask--${task.id}" class="taskCard">
        <div class="card-details task--name">${task.title}</div>
        <div class="card-details task--desciption">${task.description}</div>
        <div class="card-details task--date">${task.date}</div>
    <button class="btn btn--delete-task" id="task-delete--${task.id}" type="button">Delete</button>
    </section>
    <div>Completed? <input type="checkbox" class="checkbox checkbox--task" id="task-completed--${task.id}"></input></div>
    `
}