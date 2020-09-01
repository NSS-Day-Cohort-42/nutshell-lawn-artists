import { getMessages, useMessages, saveMessage } from "./MessageProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { getFriends } from "../friends/FriendProvider.js"
import { MessageCard } from "./MessageCard.js"

const contentTarget = document.querySelector(".content-right")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "message-submit-button") {
    const messageField = document.querySelector("#message-input")
    const newMessage = {
      userId: parseInt(sessionStorage.activeUser),
      message: messageField.value
    }
    saveMessage(newMessage)
  }
})

eventHub.addEventListener("messageChange", customEvent => {
  render()
})


export const ListMessages = () => {
  getMessages()
    .then(getUsers)
    .then(getFriends)
    .then(() => {
      render()
    })
}

const render = () => {
  const allMessages = useMessages()

  contentTarget.innerHTML = `
  <h3 class="header messages-header"><strong>Message Board</strong></h3>
  <div class="message-container">
    <div class="messages">
      ${allMessages.map(m => MessageCard(m)).join("")}
    </div>
    ${messageForm()}
  </div>
  `
}


const messageForm = () => {
  return `
  <div class="form--message">
    <input type="text" class="input input--message" id="message-input"  placeHolder="...">
    <button class="btn message-submit-button" id="message-submit-button">Send</button>
  </div>
  `
}