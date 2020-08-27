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

export const FriendCard = userId => {
  const currentUserId = parseInt(sessionStorage.activeUser)
  const friendUserName = findUserByUserId(userId).username

  let button = ''
  
  if (userId !== currentUserId) {
    button = `<button class="btn" id="button-friend-action--${userId}">[X]</button>`
  }

  return `
  <div class="friend-card--${userId}">
    ${friendUserName}
    ${button}
  </div>
  `

}