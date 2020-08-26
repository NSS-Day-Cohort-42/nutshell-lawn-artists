import { findUserByUserId } from "../users/UserProvider.js"

export const FriendCard = friend => {

  const friendUserName = findUserByUserId(friend.id)
  return `
  <div class="friend-card--${friend.id}">
    ${friendUserName}
    <button "button-delete-friend--${friend.id}"></button>
  </div>
  `
}