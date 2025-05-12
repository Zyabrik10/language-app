import { elements, vars } from "../vars";

export default function openWordModal(word) {
  const { expression, type, description, translation, id } = word;
  const favoriteWords = vars.storage.getItem() || [];
  const isFavoriteWord = favoriteWords.some(
    (wordId) => String(wordId) === String(id)
  );

  elements.modal.classList.add("active");
  elements.modalAddBtn.dataset.wordId = id;

  if (isFavoriteWord) {
    elements.modalAddBtn.innerHTML = "Remove from Favorite";
  } else {
    elements.modalAddBtn.innerHTML = "Add to Favorite";
  }

  elements.modalContent.innerHTML = `
        <h2 class="modal-title"> <span class="modal-word">${expression}</span><span class="modal-info"><span class="${type} type">${type}</span> ${id}</span></h2>
        <p style="margin-top: 10px;">${translation}</p>
        <hr />
        <p>${description}</p>
        <button style="margin-top: 20px;" class="app-button modal-button-ai-gen">Give me examples</button>
        <p style="margin-top: 20px;" class="modal-gen-text"></p>`;
}
