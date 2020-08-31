import { getArticles, useArticles } from "./ArticleProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { ArticleCard } from "./ArticleCard.js"


const eventHub = document.querySelector(".container")
const articleListTarget = document.querySelector(".news-container")
const createArticleButton = document.querySelector(".create-container")

eventHub.addEventListener("articlesStateChanged", () => {
  ListArticles()
})

export const ListArticles = () => {
  getUsers()
    .then(getArticles)
    .then( () => renderArticles())
}

export const renderArticles = () => {

  createArticleButton.innerHTML += `
  <button class="btn btn-create-article" id="createArticleBtn">Create Article</button>
  `
  const articles = useArticles()
  articleListTarget.innerHTML = articles.map( a => ArticleCard(a)).join("")
}

