import { FriendCard } from "../friends/FriendCard.js"

export const MessageCard = message => {
  const activeUser = parseInt(sessionStorage.activeUser)
  let messageOwner = ""
  if(message.userId === activeUser){
    messageOwner = "active-user-message"
  }
  else{
    messageOwner = "other-user-message"
  }
  
  return `
    <div class="message-bubble ${messageOwner}">
      ${FriendCard(message.userId)}
      <span class="message-text">: </span>
      <span class="message-text">${message.message}</span>
    </div>
  `
}