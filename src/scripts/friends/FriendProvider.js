const eventHub = document.querySelector(".container")
const currentUserId = parseInt(sessionStorage.activeUser)

let friends = []

export const useFriends = () => friends.slice()

export const useFriendsByUserId = userId => {
  userId = parseInt(userId)
  return friends.filter( f => f.userID === userId)
}

export const isFriendOfCurrentUser = userId => {
  userId = parseInt(userId)
  const userFriends = useFriendsByUserId(currentUserId)
  return userFriends.some( f => f.following === userId )
}


export const getFriends = () => {
  return fetch("http://localhost:8088/friends")
    .then(res => res.json())
    .then(friendData => friends = friendData)
}

export const addFriend = userId => {
  userId = parseInt(userId)

  const friend = {
    userID: currentUserId,
    following: userId
  }
  saveFriend(friend)
}

export const deleteFriend = userId => {
  userId = parseInt(userId)
  const friendId = useFriendsByUserId(currentUserId).find(f => f.following === userId).id
  return fetch(`http://localhost:8088/friends/${friendId}`, {
    method: "DELETE",
  })
    .then(getFriends)
    .then(dispatchChangeEvent)
}

const saveFriend = friendData => {
  const jsonEntry = JSON.stringify(friendData)

  return fetch("http://localhost:8088/friends", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonEntry
  })
    .then(getFriends)
    .then(dispatchChangeEvent)
}

const dispatchChangeEvent = () => {
  const friendChange = new CustomEvent("friendChange")
  eventHub.dispatchEvent(friendChange)
}
