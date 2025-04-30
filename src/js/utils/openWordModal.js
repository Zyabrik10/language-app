import { elements, vars } from "../vars";

const { modal, modalContent, modalAddBtn } = elements;
const { storage } = vars;

export default function openWordModal(word) {
  const { expression, type, description, translation, id } = word;
  const favoriteWords = storage.getItem() || [];
  const isFavoriteWord = favoriteWords.some((wordId) => wordId === id);

  modal.classList.add("active");
  modalAddBtn.dataset.wordId = id;

  if (isFavoriteWord) {
      modalAddBtn.innerHTML = "Remove";
  } else {
      modalAddBtn.innerHTML = "Add"; 
  }

  modalContent.innerHTML = `
        <h2>${expression}</h2>
        <p><span style="user-select: none;">[<span class="${
          type.includes("_") ? type.split("_").join(" ") : type
        }">${type}</span>] ${id}</span></p>
        <p style="margin-top: 10px;">${translation}</p>
        <hr />
        <p>${description}</p>
        <button style="margin-top: 20px;" class="app-button modal-button-ai-gen">Give me examples</button>
        <p style="margin-top: 20px;" class="modal-gen-text"></p>
          `;
}
