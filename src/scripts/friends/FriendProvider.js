const eventHub = document.querySelector(".container")

let friends = []

export const useFriends = () => friends.slice()

export const useFriendsByUserId = userId => {
  userId = parseInt(userId)
  return friends.filter( f => f.userID === userId)
}

export const isFriendOfCurrentUser = userId => {
  userFriends = sessionStorage.activeUser
  return userFriends.some( f => f.following === userId )
}


export const getFriends = () => {
  return fetch("http://localhost:8088/friends")
    .then(res => res.json())
    .then(friendData => friends = friendData)
}

export const saveFriend = friendData => {
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

export const deleteFriend = friendId => {
  return fetch(`http://localhost:8088/friends/${friendId}`, {
    method: "DELETE",
  })
    .then(getFriends)
    .then(dispatchChangeEvent)
}

const dispatchChangeEvent = () => {
  const friendChange = new CustomEvent("friendChange")
  eventHub.dispatchEvent(friendChange)
}
