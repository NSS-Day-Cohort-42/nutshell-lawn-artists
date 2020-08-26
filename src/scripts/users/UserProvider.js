let users = []

export const useUsers = () => users.slice()

export const findUserByUserId = userId => {
  return users.find( f => f.id === userId)
}

export const getUsers = () => {
  return fetch("http://localhost:8088/users")
    .then(res => res.json())
    .then(userData => users = userData)
}

