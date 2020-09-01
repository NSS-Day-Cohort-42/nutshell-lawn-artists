
const contentTarget = document.querySelector(".user-container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "logout-button") {
    sessionStorage.clear()
    window.location.reload()
  }
})


export const ListLogout = () => {
  contentTarget.innerHTML = `
  <div>
    <img src="../images/logo.png" id="logo-image">
  </div>
  <button class="btn logout-button" id="logout-button">Logout</button>
  `
}