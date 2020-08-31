import { getArticles, useArticles } from "./ArticleProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { ArticleCard } from "./ArticleCard.js"
import {  useFriendsByUserId } from "../friends/FriendProvider.js"


const eventHub = document.querySelector(".container")
const articleListTarget = document.querySelector(".news-container")
const createArticleButton = document.querySelector(".create-container")

eventHub.addEventListener("articlesStateChanged", () => {
  renderArticles()
})

export const ListArticles = () => {
  getUsers()
    .then(getArticles)
    .then( () => {
      renderArticles()
      renderCreateButton()
    })
}

const renderCreateButton = () => {

  createArticleButton.innerHTML += `
  <button class="btn btn-create-article" id="createArticleBtn">Create Article</button>
  `

}

const renderArticles = () => {

  const articles = useArticles()
  const usersFriends = useFriendsByUserId(sessionStorage.activeUser)
  const userFriendIds = usersFriends.map(f => f.following)

  const friendsArticles = userFriendIds.map(f => {
    return ArticleCard(f)
  }).join("")

  const usersArticles = articles.filter(article => {
    if(article.userId === parseInt(sessionStorage.activeUser)) {
      return true
    }
  })

  articleListTarget.innerHTML = usersArticles.map( a => ArticleCard(a)).join("")
  articleListTarget.innerHTML += friendsArticles
}