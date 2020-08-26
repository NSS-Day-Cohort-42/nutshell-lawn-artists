let tasks = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const taskStateChangedEvent = new CustomEvent("taskStateChanged")

    eventHub.dispatchEvent(taskStateChangedEvent)
}

export const useTasks = () => {
    return tasks.slice()
}

export const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
    .then(response => response.json())
    .then(parsedTasks => {
        tasks = parsedTasks
    })
}

export const saveTask = (task) => {
    const jsonTask = JSON.stringify(task)

    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonTask
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

export const deleteTask = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}` {
        method: "DELETE",
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

export const editTask = (task) => {
    return fetch(`http://localhost:8088/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}