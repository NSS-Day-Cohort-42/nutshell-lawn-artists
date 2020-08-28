import { FriendCard } from "../friends/FriendCard"

export const MessageCard = message => {
  
  
  return `
  <div class="message-bubble">
    ${FriendCard(message.userId)}
    <span class="message-text">${message.message}</span>
  </div>
  `
}