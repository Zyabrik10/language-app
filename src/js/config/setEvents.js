import { elements, vars } from "../globalVariables.js";
// Modules import
import {
  throttle,
  renderFilteredWords,
  openWordModal,
  aiWritingReviewPrompt,
  wordsExamplesPrompt,
} from "../utils";
import { main } from "../main";
import initVars from "./initVars.js";

export default function setEvents() {
  // ========== Button which closes modal window ==========
  elements.closeModalBtn.addEventListener(
    "click",
    closeWordModal.bind(null, null, elements.modal, () =>
      renderFilteredWords.bind(elements.searchInput.value)
    )
  );

  // ========== Button which adds word to favorite list ==========
  elements.modalAddBtn.addEventListener("click", addWordToFavorite);

  // ========== Input which searches for words ==========
  elements.searchInput.addEventListener("input", throttle(searchWords, 100));

  // ========== Form train writing text ==========
  elements.trainWritingTextForm.addEventListener("submit", getAITextReview);

  // ========== Global clicking on word component to render modal window of it ==========
  window.addEventListener("click", handleGlobalViewportClicking);

  // ========== Feature changing languages ==========
  elements.langSwitchers.forEach((radioLanguage) =>
    radioLanguage.addEventListener("change", changeLanguage)
  );

  // ========== Renders numbers of words typed ==========
  elements.trainWritingTextTextArea.addEventListener(
    "input",
    countWordsOnTyping
  );
}

function closeWordModal(
  event,
  modalElement,
  callback = () => {}
) {
  modalElement.classList.remove("active");
  callback(event);
}


function addWordToFavorite() {
  const id = elements.modalAddBtn.dataset.wordId;
  const isFavoriteWord = vars.wordsInstance.getById(id).favorite;

  if (!isFavoriteWord) {
    vars.wordsInstance.setFavoriteById(id, true);
    vars.storage.setItem([...(vars.storage.getItem() || []), id]);
    elements.modalAddBtn.innerHTML = "Remove from Favorite";
  } else {
    vars.wordsInstance.setFavoriteById(id, false);
    vars.storage.setItem(
      vars.storage.getItem().filter(({ fId }) => id === fId)
    );
    elements.modalAddBtn.innerHTML = "Add to Favorite";
  }

  renderFilteredWords();
}

function searchWords(event) {
  const searchTerm = event.target.value;
  renderFilteredWords(searchTerm);
}

function getAITextReview(event) {
  event.preventDefault();
  const text = elements.trainWritingTextForm.train_writing_text_textarea.value;
  const prompt = aiWritingReviewPrompt(text, vars.langs[vars.lang]);

  elements.trainWritingTextAiReview.innerHTML = "Loading...";
  elements.trainWritingTextForm.submit.disabled = true;

  askAI(prompt).then((response) => {
    elements.trainWritingTextAiReview.innerHTML = response.message.content;
    elements.trainWritingTextForm.submit.disabled = false;
  });
}

function countWordsOnTyping() {
  elements.trainWritingTextTotalWords.innerText =
    elements.trainWritingTextTextArea.value.trim().split(" ").length;
}

function changeLanguage() {
  if (this.checked) {
    let lang = this.dataset.lang;
    initVars(
      `favorite${
        lang[0].toUpperCase() + lang.split("").splice(1).join("")
      }Words`,
      lang
    );
    main();
  }
}

function handleGlobalViewportClicking(event) {
  if (event.target.closest(".word-button")) {
    const id = event.target.closest(".word-button").dataset.id;
    const word = vars.wordsInstance.getById(id);

    openWordModal(word);

    const modalButtonAiGen = document.querySelector(".modal-button-ai-gen");
    const modalGenTextEl = document.querySelector(".modal-gen-text");

    modalButtonAiGen.addEventListener("click", () => {
      const { expression, type } = word;
      const prompt = wordsExamplesPrompt(
        expression,
        type,
        vars.langs[vars.lang]
      );

      modalGenTextEl.innerHTML = "Loading...";
      modalButtonAiGen.disabled = true;

      askAI(prompt).then((response) => {
        modalGenTextEl.innerHTML = response.message.content;
        modalButtonAiGen.disabled = false;
      });
    });
  } else if (event.target.closest(".link-button")) {
    const btn = event.target.closest(".link-button");

    elements.allLinkButtons.forEach((e) => e.classList.remove("active"));
    btn.classList.add("active");
  }
}

function askAI(prompt) {
  return puter.ai.chat(prompt);
}
