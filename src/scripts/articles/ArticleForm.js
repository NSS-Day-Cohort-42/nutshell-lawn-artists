const ArticleFormTarget = document.querySelector(".popup-container")
const eventHub = document.querySelector(".container")

export const EditArticleForm = (ArticleObj) => {
  const artTitleField = document.querySelector(".art-title")
  const artSynopsisField = document.querySelector(".art-synopsis")
  const artUrlField = document.querySelector(".art-url")

  artTitleField.value = ArticleObj.title
  artSynopsisField.value = ArticleObj.synopsis
  artUrlField.value = ArticleObj.url
}

export const CreateArticleForm = () => {
  ArticleFormTarget.innerHTML = `
  <div class="form--new-art">
    <h4 class="h4 form-heading">
      Create Article
    </h4>
    <input class="input art-title" type="text" placeholder="Article Title"></input>
    <input class="input art-synopsis" type="text" placeholder="Article Synopsis"></input>
    <input class="input art-url" type="text" placeholder="Article URL"></input>
    <button class="btn btn-save-art" type="button">Save Article</button>
  `
  ArtFormRendered()

  const SaveButton = document.querySelector(".btn-save-art")

  SaveButton.addEventListener("click", e =>{
   if(artId == ""){
     SaveNewArticle()
   }
   else {
     SaveEditedArticle()
   }
  })
}

const CreateArticleObject = (url, title, synopsis, userId) => {
  return {
      url: url,
      title: title,
      synopsis: synopsis,
      userId: userId
  }
}
export const ArtFormRendered = () => {
  const ArtFormHasRendered = new CustomEvent ("articleFormRendered")
  eventHub.dispatchEvent(ArtFormHasRendered)
}
