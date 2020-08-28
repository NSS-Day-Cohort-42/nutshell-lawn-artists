const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {  
    if(event.target.id.startsWith("task-completed--")){
        const [prompt, taskId] = clickEvent.target.id.split("--")
        const taskTarget = document.querySelector(`#task--${taskId}`) 
            taskTarget.classList.toggle("strikethrough")
    } 
})

export const TaskCardHTML = (task) => {
    return `
    <section id="task--${task.id}" class="taskCard">
        <div class="task--name">${task.title}</div>
        <div class="task--desciption">${task.description}</div>
        <div class="task--date">${task.date}</div>
    <button class="btn task-edit--${task.id}" type="button">Edit</button>
    </section>
    <div>Completed? <input type="checkbox" id="task-completed--${task.id}"></input></div>
    `
}