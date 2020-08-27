import { isFriendOfCurrentUser } from "./FriendProvider.js"

const contentTarget = document.querySelector(".popup-container")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("friendAction", customEvent => {
  render(customEvent.detail.userId)
})

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "cancel-friend-change") {
    contentTarget.classList.remove("visible")
  }
  else if (clickEvent.target.id.startsWith("remove-friend")) {
    const [prefix, unfriendUserId] = clickEvent.target.id.split("--")
    //TODO: unfriend this user
    contentTarget.classList.remove("visible")
  }
  else if (clickEvent.target.id.startsWith("add-friend")) {
    const [prefix, addFriendUserID] = clickEvent.target.id.split("--")
    //TODO: add friendship to this user
    contentTarget.classList.remove("visible")
  }

})


const render = targetUserID => {

  if (isFriendOfCurrentUser(targetUserID)) {
    contentTarget.innerHTML = `
    <button class="btn" id="remove-friend--${targetUserID}">Remove Friend</button>
    <button class="btn" id="cancel-friend-change">Cancel</button>
  `
  }
  else {
    contentTarget.innerHTML = `
    <button class="btn" id="add-friend--${targetUserID}">Add Friend</button>
    <button class="btn" id="cancel-friend-change">Cancel</button>
  `
  }

  contentTarget.classList.add("visible")
}