import { elements, vars } from "../globalVariables.js";
// Modules import
import {
  throttle,
  renderDictionary,
  aiWritingReviewPrompt,
  wordsExamplesPrompt,
} from "../utils";
import { main } from "../main";
import initVars from "./initVars.js";

export default function setEvents() {
  // ========== Button which adds word to favorite list ==========
  elements.wordExtraInfoModal.addFavoriteWordButton.addEventListener("click", addWordToFavorite);

  // ========== Input which searches for words ==========
  elements.dictionary.searchInput.addEventListener("input", throttle(searchWords, 100));

  // ========== Form train writing text ==========
  elements.writingTraining.textForm.addEventListener("submit", getAITextReview);

  // ========== Global clicking on word component to render modal window of it ==========
  window.addEventListener("click", handleGlobalViewportClicking);

  // ========== Feature changing languages ==========
  elements.langSwitchers.forEach((radioLanguage) =>
    radioLanguage.addEventListener("change", changeLanguage)
  );

  // ========== Renders numbers of words typed ==========
  elements.writingTraining.textTextArea.addEventListener(
    "input",
    countWordsOnTyping
  );
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

  renderDictionary();
}

function searchWords(event) {
  const searchTerm = event.target.value;
  renderDictionary(searchTerm);
}

function getAITextReview(event) {
  event.preventDefault();
  const text = elements.writingTraining.textForm.train_writing_text_textarea.value;
  const prompt = aiWritingReviewPrompt(text, vars.langs[vars.lang]);

  elements.writingTraining.textAiReview.innerHTML = "Loading...";
  elements.writingTraining.textForm.submit.disabled = true;

  askAI(prompt).then((response) => {
    elements.writingTraining.textAiReview.innerHTML = response.message.content;
    elements.writingTraining.textForm.submit.disabled = false;
  });
}

function countWordsOnTyping() {
  elements.writingTraining.textTotalWords.innerText =
    elements.writingTraining.textTextArea.value.trim().split(" ").length;
}

function changeLanguage() {
  if (this.checked) {
    let lang = this.dataset.lang;
    initVars(
      `favorite${lang[0].toUpperCase() + lang.split("").splice(1).join("")
      }Words`,
      lang
    );
    main();
  }
}

function initWordExtraInfo(word) {
  const isFavoriteWord = vars.wordsInstance.getById(word.id).favorite;

  elements.wordExtraInfoModal.addFavoriteWordButton.dataset.wordId = word.id;
  elements.wordExtraInfoModal.addFavoriteWordButton.innerText = !isFavoriteWord ? "Add to Favorite" : "Remove from Favorite";

  elements.wordExtraInfoModal.word.innerText = word.expression;
  
  elements.wordExtraInfoModal.type.innerText = word.type;
  elements.wordExtraInfoModal.type.classList.add(word.type);
  
  elements.wordExtraInfoModal.wordId.innerText = word.id;
  
  elements.wordExtraInfoModal.translation.innerText = word.translation;
  elements.wordExtraInfoModal.description.innerText = word.description;
  elements.wordExtraInfoModal.aiGeneratedText.innerHTML = ''; 
}

function handleGlobalViewportClicking(event) {
  if (event.target.closest(".word-button")) {
    const id = event.target.closest(".word-button").dataset.id;
    const word = vars.wordsInstance.getById(id);

    vars.wordExtraInfoModal.showModalWindow(initWordExtraInfo.bind(null, word));

    const modalButtonAiGen = document.querySelector(
      ".ai-text-generation-button"
    );
    const modalGenTextEl = document.querySelector(".ai-generated-text");

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
