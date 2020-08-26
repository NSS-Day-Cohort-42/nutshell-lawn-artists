import { findUserByUserId } from "../users/UserProvider.js"

export const FriendCard = friend => {

  const friendUserName = findUserByUserId(friend.following).username
  return `
  <div class="friend-card--${friend.id}">
    ${friendUserName}
    <button "btn button-delete-friend--${friend.id}">[X]</button>
  </div>
  `
}