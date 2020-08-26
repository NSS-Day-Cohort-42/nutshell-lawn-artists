let articles = []

const eventHub = document.querySelector(".main")

const dispatchNewsStateChangeEvent = () => {
    const newsStateChangedEvent = new CustomEvent("newsStateChanged")

    eventHub.dispatchEvent(newsStateChangedEvent)
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
    .then(getNews)
      .then(dispatchNewsStateChangeEvent)
}

export const deleteArticle = (articleId) => {
  return fetch(`http://localhost:8088/articles/${ articleId }`, {
      method: "DELETE"
  })
  .then(getNews)
    .then(dispatchNewsStateChangeEvent)
      .catch(
        (error) => {
          console.log(error)
        }
      )
}

export const useNews = () => {
  return articles.slice()
}

export const getNews = () => {
  return fetch('http://localhost:8088/articles')
    .then(response => response.json())
      .then(parsedNews => {
        articles = parsedNews
      })
}