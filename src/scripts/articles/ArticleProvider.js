let articles = []

const eventHub = document.querySelector(".container")

const dispatchArticlesStateChangeEvent = () => {
    const articlesStateChangedEvent = new CustomEvent("articlesStateChanged")

    eventHub.dispatchEvent(articlesStateChangedEvent)
}

export const saveArticle = (article) => {

  const jsonNote = JSON.stringify(article)

  return fetch('http://localhost:8088/articles', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: jsonNote
  })
    .then(getArticles)
      .then(dispatchArticlesStateChangeEvent)
}

export const editArticle = (articleId, editArticleObject) => {
  return fetch(`http://localhost:8088/articles/${articleId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editArticleObject)
  })
}

export const getSingleArticle = (articleId) => {
  return fetch(`http://localhost:8088/articles/${articleId}`)
      .then(response => response.json())
}

export const deleteArticle = (articleId) => {
  return fetch(`http://localhost:8088/articles/${ articleId }`, {
      method: "DELETE"
  })
  .then(getArticles)
    .then(dispatchArticlesStateChangeEvent)
      .catch(
        (error) => {
          console.log(error)
        }
      )
}

export const useArticles = () => {
  return articles.slice()
}

export const getArticles = () => {
  return fetch('http://localhost:8088/articles')
    .then(response => response.json())
      .then(parsedArticles => {
        articles = parsedArticles
      })
}
