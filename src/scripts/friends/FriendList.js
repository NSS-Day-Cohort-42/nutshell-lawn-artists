import { getFriends, useFriendsByUserId, useFriends } from "./FriendProvider.js"
import { getUsers, findUserByUsername } from "../users/UserProvider.js"
import { FriendCard } from "./FriendCard.js"
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friend-container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "friend-search-submit-button") {
    const searchField = document.querySelector("#friend-search-input") 
    const findResult = findUserByUsername(searchField.value)
    if (findResult) {
      const friendAction = new CustomEvent("friendAction", {
        detail: {
          userId: parseInt(findResult.id)
        }
      })
      
      eventHub.dispatchEvent(friendAction)
    }
    else {
      window.alert("username not found")
    }

  }
})

eventHub.addEventListener("friendChange", customEvent => {
  render()
})

export const ListFriends = () => {
  getUsers()
    .then(getFriends)
    .then( () => render())
}

const render = () => {
  const userFriends = useFriendsByUserId(sessionStorage.activeUser)
  const userFriendIds = userFriends.map(f => f.following)
  
  contentTarget.innerHTML = `
  ${friendSearch()}
  <div></div>
  <h3 class="header friends-header"><strong>Friend List</strong></h3>
  <div class="friendsList">
    ${userFriendIds.map( f => {
      return FriendCard(f) + "<div></div>"
    }).join("")}
  </div>
  `
}

const friendSearch = () => {
  return `
  <div class="friendSearch">
  <h4 class="header friendSearch-header"><strong>Friend Search</strong></h4>
  <input type="text" id="friend-search-input" placeHolder="Search for a friend">
  <button id="friend-search-submit-button">submit</button>
  </div>
  `
}