const eventHub = document.querySelector(".container")
const friendChange = new CustomEvent("friendChange")
let friends = []

export const useFriends = () => friends.slice()

export const useFriendsByUserId = userId => {
  return friends.filter( f => f.id === userId)
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



const dispatchChangeEvent = () => eventHub.dispatchEvent(friendChange)


//Rename File