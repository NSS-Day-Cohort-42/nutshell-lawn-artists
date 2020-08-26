export const FriendCard = friend => {

  const friendUserName = "" //Get the username for the friend
  return `
  <div class="friend-card--${friend.id}">
    ${friendUserName}
    <button "button-delete-friend--${friend.id}"></button>
  </div>
  `
}