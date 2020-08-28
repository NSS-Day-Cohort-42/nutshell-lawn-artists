import { getFriends, useFriendsByUserId } from "./FriendProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { FriendCard } from "./FriendCard.js"
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friend-container")

export const ListFriends = () => {
  getUsers()
    .then(getFriends)
    .then( () => render())
}

const render = () => {
  const userFriends = useFriendsByUserId(sessionStorage.activeUser)
  const userFriendIds = userFriends.map(f => f.following)
  contentTarget.innerHTML = userFriendIds.map( f => {
    return FriendCard(f) + "<div></div>"
  }).join("")
}