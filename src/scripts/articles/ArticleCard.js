export const ArticleCard = ( articleEntry ) => {
  return `
    <section class="art--${ articleEntry.id }
      <a class="art-url" href="${ articleEntry.url }">
        ${articleEntry.title}
      </a>
      <div class="art-synopsis">
        ${ articleEntry.synopsis }
      </div>
      <button class="btn art-edit--${ articleEntry.id }" type="button">
        Edit
      </button>
    </section>
  `
}

