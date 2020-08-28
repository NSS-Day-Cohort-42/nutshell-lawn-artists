let users = []

export const useUsers = () => users.slice()

export const findUserByUserId = userId => {
  userId = parseInt(userId)
  return users.find( f => f.id === userId)
}

export const findUserByUsername = username => {
  return users.find( f => f.username === username)
}


export const getUsers = () => {
  return fetch("http://localhost:8088/users")
    .then(res => res.json())
    .then(userData => users = userData)
}

