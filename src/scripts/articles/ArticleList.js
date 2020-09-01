import { getArticles, useArticles, useArticlesByUserId } from "./ArticleProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { ArticleCard } from "./ArticleCard.js"
import {  useFriendsByUserId } from "../friends/FriendProvider.js"


const eventHub = document.querySelector(".container")
const articleListTarget = document.querySelector(".news-container")
const createArticleButton = document.querySelector(".create-container")

eventHub.addEventListener("articlesStateChanged", () => {
  renderArticles()
})

eventHub.addEventListener("friendChange", () => {
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
  const arrayOfArticles = articles.map( a => ArticleCard(a)).join("")

  articleListTarget.innerHTML = `
  <h3 class="header articles-header"><strong>Articles</strong></h3>
  ${arrayOfArticles}`

  const usersFriends = useFriendsByUserId(sessionStorage.activeUser)
  const userFriendIds = usersFriends.map(f => f.following)

  let friendsArticles = []
  userFriendIds.forEach(f => {
    useArticlesByUserId(f).forEach(article => {
      friendsArticles.push(article)
    })
  })

  const usersArticles = articles.filter(article => {
    if(article.userId === parseInt(sessionStorage.activeUser)) {
      return true
    }
  })

  articleListTarget.innerHTML = usersArticles.map( a => ArticleCard(a)).join("")
  articleListTarget.innerHTML += friendsArticles.map( a => ArticleCard(a)).join("")
}

