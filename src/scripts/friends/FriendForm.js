import { isFriendOfCurrentUser, deleteFriend, addFriend } from "./FriendProvider.js"
import { findUserByUserId } from "../users/UserProvider.js"

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
    deleteFriend(unfriendUserId)
      .then( () => contentTarget.classList.remove("visible") )
  }
  else if (clickEvent.target.id.startsWith("add-friend")) {
    const [prefix, addFriendUserID] = clickEvent.target.id.split("--")
    addFriend(addFriendUserID)
    contentTarget.classList.remove("visible")
  }

})


const render = targetUserID => {
  const targetUser = findUserByUserId(targetUserID)
  // contentTarget.innerHTML = `
  // <!-- <div class ="selected-friend"></div> -->
  // `

  if (isFriendOfCurrentUser(targetUserID)) {
    contentTarget.innerHTML = `
    <div class="form form--friend form--friend-remove">
    <h4 class="h4 heading heading--friend-form">
      You're currently following ${targetUser.username}.
    </h4>
    <button class="btn" id="remove-friend--${targetUserID}">Unfollow ${targetUser.username}</button>
    <button class="btn" id="cancel-friend-change">Cancel</button>
    </div>
  `
  }
  else {
    contentTarget.innerHTML = `
    <div class="form form--friend form--friend-new">
    <h4 class="h4 heading heading--friend-form">
      You are not following ${targetUser.username} yet. Would you like to follow them?
    </h4>
    <button class="btn" id="add-friend--${targetUserID}">Follow ${targetUser.username}</button>
    <button class="btn" id="cancel-friend-change">Cancel</button>
    </div>
  `
  }

  contentTarget.classList.add("visible")
}