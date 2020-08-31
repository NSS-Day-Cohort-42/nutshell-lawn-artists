
const eventHub = document.querySelector(".container")

export const ArticleCard = ( articleEntry ) => {
  return `
    <section class="art--${ articleEntry.id }">
      <a class="art-url" href="${ articleEntry.url }">
        ${articleEntry.title}
      </a>
      <div class="art-synopsis">
        ${ articleEntry.synopsis }
      </div>
      ${ ArticleEditButton(articleEntry) }
    </section>
  `
}

export const ArticleEditButton = ( articleEntry ) => {
  if(articleEntry.userId === parseInt(sessionStorage.getItem("activeUser"))) {
    return `
    <button class="btn art-edit" id="artEdit--${ articleEntry.id }" type="button">
      Edit
    </button>
    `
  }
  else{
    return ``
  }
}

eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("artEdit--")) {

    const artId = e.target.id.split("--")[1]

    const editArticleButtonClicked = new CustomEvent("editArticleClicked", {
      detail: {
        articleId: artId
      }
    })
    eventHub.dispatchEvent(editArticleButtonClicked)
  }
})

eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("artDelete--")) {

    const artId = e.target.id.split("--")[1]

    const deleteArticleButtonClicked = new CustomEvent("deleteArticleClicked", {
      detail: {
        articleId: artId
      }
    })
    eventHub.dispatchEvent(deleteArticleButtonClicked)
  }
})


