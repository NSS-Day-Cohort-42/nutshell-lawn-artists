
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
  if(articleEntry.userId === sessionStorage.getItem("activeUser")) {
    return `
    <button class="btn art-edit art--${ articleEntry.id }" id="art" type="button">
      Edit
    </button>
    `
  }
  else{
    return ``
  }
}

eventHub.addEventListener("click", e => {
  //listens for click event on edit article button and opens pop-up box with edit form
  })
