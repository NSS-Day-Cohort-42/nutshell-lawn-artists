const eventHub = document.querySelector(".container")

let messages = []

export const useMessages = () => messages.slice()

export const useMessagesByUserId = userId => {
  userId = parseInt(userId)
  return messages.filter( m => m.userId === userId)
}


export const getMessages = () => {
  return fetch("http://localhost:8088/messages")
    .then(res => res.json())
    .then(messageData => messages = messageData)
}


export const deleteMessage = messageId => {
  return fetch(`http://localhost:8088/messages/${messageId}`, {
    method: "DELETE",
  })
    .then(getMessages)
    .then(dispatchChangeEvent)
}

export const saveMessage = messageData => {
  const jsonEntry = JSON.stringify(messageData)

  return fetch("http://localhost:8088/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonEntry
  })
    .then(getMessages)
    .then(dispatchChangeEvent)
}

const dispatchChangeEvent = () => {
  const messageChange = new CustomEvent("messageChange")
  eventHub.dispatchEvent(messageChange)
}
