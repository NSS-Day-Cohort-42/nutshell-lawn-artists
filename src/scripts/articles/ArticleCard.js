import { EditArticleForm } from "./ArticleForm.js"
import { getSingleArticle } from "./ArticleProvider.js"

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
  if (e.target.id.startsWith( "art-edit--")) {
    const articleId = e.target.id.split("--")[1]

      getSingleArticle(articleId)
        .then(articleObj => EditArticleForm(articleObj))
  }
})
