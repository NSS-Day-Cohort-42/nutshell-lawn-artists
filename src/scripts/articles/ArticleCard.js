const eventHub = document.querySelector(".container")
export const ArticleCard = ( articleEntry ) => {
  return `
    <section class="art--${ articleEntry.id }
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
  if(articleEntry.userId === sessionStorage.getItem("activeUser")) {
    return `
    <button class="btn art-edit art--${ articleEntry.id }" id="art" type="button">
      Edit
    </button>
    `
  }
}

eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith( "art-edit--") {
    const [_, articleIdString ] = clickEvent.target.id.split("--")

      editArticle()
    }
})
      const customEvent = new CustomEvent("editArticleClicked",)
      eventHub.dispatchEvent(customEvent)
  }
})
