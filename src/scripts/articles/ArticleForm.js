import { saveArticle, getArticles, editArticle, deleteArticle, useArticleById } from "./ArticleProvider.js";

const eventHub = document.querySelector(".container")
const popup = document.querySelector(".popup-container")
const newArticleId = 0
eventHub.addEventListener("click", e => {

  if(e.target.classList.contains("btn-save-art")) {
    const hiddenArticleId = document.querySelector(".art-hidden-id").value
    const articleTitle = document.querySelector(".art-title-input")
    const articleSynopsis = document.querySelector(".art-synopsis-input")
    const articleUrl = document.querySelector(".art-url-input")

    if (hiddenArticleId === "0") {
      const newArticle = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        title: articleTitle.value,
        synopsis: articleSynopsis.value,
        url: articleUrl.value
      }

      saveArticle(newArticle)
      .then( () => {
        popup.classList.remove("visible")
      })
    }
    else {
      const updatedArticle = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        title: articleTitle.value,
        synopsis: articleSynopsis.value,
        url: articleUrl.value
      }

      editArticle(hiddenArticleId, updatedArticle)
      .then( () => {
        popup.classList.remove("visible")
      })

    }
  }
  else if (e.target.classList.contains("btn-close-form")) {
    popup.classList.remove("visible")
  }

  else if (e.target.classList.contains("btn-create-article")) {
    popup.classList.add("visible")
    renderArticleForm(newArticleId)
  }
})

export const ArticleForm = () => {
  getArticles()
    .then(() => {
        renderArticleForm(newArticleId)
    })
}

eventHub.addEventListener("deleteArticleClicked", ce => {
  const articleId = ce.detail.articleId
  deleteArticle(articleId)
  popup.classList.remove("visible")
})
eventHub.addEventListener("editArticleClicked", ce => {

  const articleId = ce.detail.articleId
  renderArticleForm(articleId)
  popup.innerHTML += `
    <button class="btn btn-delete-article" id="artDelete--${articleId}">
      Delete Article
    </button>`
  const article = useArticleById(articleId)
  const titleTarget = document.querySelector("#articleTitle")
  const synopsisTarget = document.querySelector("#articleSynopsis")
  const urlTarget = document.querySelector("#articleUrl")

  titleTarget.value = article.title
  synopsisTarget.value = article.synopsis
  urlTarget.value = article.url
  popup.classList.add("visible")
})

const renderArticleForm = (articleId) => {

  popup.innerHTML = `
    <section class="form form-create-art">
      <input type="hidden" class="input art-hidden-id" name="articleId" id="articleId" value="${articleId}"></input>
      <input type="text" class="input art-title-input" id="articleTitle" placeholder="Article title"></input>
      <textarea type="text" class="input art-synopsis-input" id="articleSynopsis" placeholder="Article Synopsis"></textarea>
      <input type="url" class="input art-url-input" id="articleUrl" placeholder="Article URL"></input>
      <button class="btn btn-save-art" id="saveArticle">Save Article</button>
      <button class="btn btn-close-form" id="closeForm">Cancel</button>
    </section>
    `

}
