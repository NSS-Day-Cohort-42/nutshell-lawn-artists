import {RegisterForm} from "./RegisterForm.js"

const contentTarget = document.querySelector(".auth--login")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = ""
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "login--button") {
        const username = document.querySelector("#login--username").value
        const password = document.querySelector("#login--password").value

        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(response => response.json())
            .then(users => {
                if (users.length > 0) {
                    const user = users[0]

                    if (user.password === password) {
                        sessionStorage.setItem("activeUser", user.id)
                        eventHub.dispatchEvent(new CustomEvent("userAuthenticated"))
                    }
                }
            })
    }
})
 eventHub.addEventListener("click", event=>{
     if (event.target.id==="switch--register"){
        RegisterForm()
     }
 })

const render = () => {
    contentTarget.innerHTML = `
        <section class="login form">
        <p>Login</p>
            <input id="login--username" type="text" placeholder="Enter your username">
            <input id="login--password" type="password" placeholder="Enter your password">

            <button id="login--button">Log In</button>
            <button id ="switch--register">Register</button>
        </section>
    `
}

export const LoginForm = () => {
    render()
}