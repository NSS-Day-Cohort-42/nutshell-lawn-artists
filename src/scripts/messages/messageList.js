import { getMessages, useMessages } from "./MessageProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { getFriends } from "../friends/friendProvider.js"

const contentTarget = document.querySelector(".content-right")
const eventHub = document.querySelector(".container")

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
  ${messageForm()}
  `
}


const messageForm = () => {
  return `
  <input type="text" id="message-input"  placeHolder="...">
  <button id="message-submit-button">Send</button>
  `
}