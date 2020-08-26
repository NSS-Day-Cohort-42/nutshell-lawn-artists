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
  contentTarget.innerHTML = userFriends.map( f => FriendCard(f)).join("")
}