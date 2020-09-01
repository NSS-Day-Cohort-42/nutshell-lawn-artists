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
  .then(getArticles)
      .then(dispatchArticlesStateChangeEvent)
}

export const useArticlesByUserId = (userId) => {
  userId = parseInt(userId)
  //filters down articles to only display articles that match the userId passed in
  return articles.filter((a) => {
    if(a.userId === userId) {
      return true
    }
    else{
      return false
    }
  })
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

export const useArticleById = articleId => {
  articleId = parseInt(articleId)
  return articles.find( a => a.id === articleId)
}

export const getArticles = () => {
  return fetch('http://localhost:8088/articles')
    .then(response => response.json())
      .then(parsedArticles => {
        articles = parsedArticles
      })
}
