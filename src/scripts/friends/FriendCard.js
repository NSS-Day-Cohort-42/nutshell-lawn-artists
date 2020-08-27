import { findUserByUserId } from "../users/UserProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("button-friend-action")) {
    const [ prefix, friendUserId] = clickEvent.target.id.split("--")

    const friendAction = new CustomEvent("friendAction", {
      detail: {
        userId: parseInt(friendUserId)
      }
    })
    
    eventHub.dispatchEvent(friendAction)
  }
})

export const FriendCard = friendUserId => {

  const friendUserName = findUserByUserId(friendUserId).username
  return `
  <div class="friend-card--${friendUserId}">
    ${friendUserName}
    <button class="btn" id="button-friend-action--${friendUserId}">[X]</button>
  </div>
  `

}