import { findUserByUserId } from "../users/UserProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("button-friend-action")) {
    const [ prefix, friendUserID] = clickEvent.target.id.split("--")

    const friendAction = new CustomEvent("friendAction", {
      detail: {
        userId: parseInt(friendUserID)
      }
    })
    
    eventHub.dispatchEvent(friendAction)
  }
})

export const FriendCard = friend => {

  const friendUserName = findUserByUserId(friend.following).username
  return `
  <div class="friend-card--${friend.following}">
    ${friendUserName}
    <button class="btn" id="button-friend-action--${friend.following}">[X]</button>
  </div>
  `

}