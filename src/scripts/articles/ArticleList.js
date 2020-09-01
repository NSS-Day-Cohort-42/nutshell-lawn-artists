import { getArticles, useArticles } from "./ArticleProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { ArticleCard } from "./ArticleCard.js"


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
  const arrayOfArticles = articles.map( a => ArticleCard(a)).join("")

  articleListTarget.innerHTML = `
  <h3 class="header articles-header"><strong>Articles</strong></h3>
  ${arrayOfArticles}`
}