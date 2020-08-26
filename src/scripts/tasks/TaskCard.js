export const TaskCardHTML = (task) => {
    return `
    <section id="task--${task.id}">
        <div class="taskName">${task.title}</div>
        <div class="taskDesciption">${task.description}</div>
        <div class="taskDate">${task.date}</div>
    </section>
    `
}