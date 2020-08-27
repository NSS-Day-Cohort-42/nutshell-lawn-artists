import { getArticles, useArticles } from "./Articleprovider.js"
import { getUsers } from "../users/UserProvider.js"
import { ArticleCard } from "./ArticleCard.js"
const eventHub = document.querySelector(".container")
const articleListTarget = document.querySelector(".news-container")

export const ListArticles = () => {
  getUsers()
    .then(getArticles)
    .then( () => renderArticles())
}

const renderArticles = () => {
  const articles = useArticles()
  articleListTarget.innerHTML = articles.map( a => ArticleCard(a)).join("")
}