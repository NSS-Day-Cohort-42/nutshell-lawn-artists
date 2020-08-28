export const TaskCardHTML = (task) => {
    return `
    <section id="task--${task.id}">
        <div class="task--name">${task.title}</div>
        <div class="task--desciption">${task.description}</div>
        <div class="task--date">${task.date}</div>
    <button class="btn task-edit--${task.id}" type="button">Edit</button>
    <div>Completed? <input type="checkbox" id="task-completed--${task.id}"></input></div>
    </section>
    `
}