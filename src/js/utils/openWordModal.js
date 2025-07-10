import { WordInfoComponent } from "../components";
import { elements, vars } from "../globalVariables";

export default function openWordModal(word) {
  const isFavoriteWord = vars.wordsInstance.getById(word.id).favorite;

  elements.modal.classList.add("active");
  elements.modalAddBtn.dataset.wordId = word.id;

  if (isFavoriteWord) {
    elements.modalAddBtn.innerHTML = "Remove from Favorite";
  } else {
    elements.modalAddBtn.innerHTML = "Add to Favorite";
  }

  elements.modalContent.innerHTML = WordInfoComponent(word);
}
