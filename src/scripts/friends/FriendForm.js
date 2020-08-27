import { isFriendOfCurrentUser } from "./FriendProvider.js"

const contentTarget = document.querySelector(".popup-container")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("friendAction", customEvent => {
  render(customEvent.detail.userId)
})

eventHub.addEventListener("click", clickEvent => {
  debugger
  if (clickEvent.target.classList.contains("cancel-friend-change")) {
    contentTarget.classList.remove("visible")
  }
})

const render = targetUserID => {

  if (isFriendOfCurrentUser(targetUserID)) {
    contentTarget.innerHTML = `
    <button class="btn remove-friend--${targetUserID}">Remove Friend</button>
    <button class="btn cancel-friend-change">Cancel</button>
  `
  }
  else {
    contentTarget.innerHTML = `
    <button class="add-friend--${targetUserID}">Add Friend</button>
    <button class="btn cancel-friend-change>Cancel</button>
  `
  }

  contentTarget.classList.add("visible")
}