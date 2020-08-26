import { findUserByUserId } from "../users/UserProvider.js"


export const FriendCard = friend => {

  const friendUserName = findUserByUserId(friend.following).username
  return `
  <div class="friend-card--${friend.following}">
    ${friendUserName}
    <button "btn button-friend-action--${friend.following}">[X]</button>
  </div>
  `

}