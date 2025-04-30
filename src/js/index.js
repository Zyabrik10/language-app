import {
  aiTopicDescriptionPrompt,
  aiWritingReviewPrompt,
  wordsExamplesPrompt,
} from "../prompts";
import { logInfo, openWordModal, throttle, renderFilteredWords } from "./utils";
import { initTrainWords, TrainGrammar, TrainWords } from "./programs";
import { elements, vars } from "./vars.js";
import { FilterComponent } from "./components";

const { wordsInstance, storage, filters, trainWordsFilters } = vars;
const {
  wordsCountEl,
  searchInput,
  closeModalBtn,
  modalAddBtn,
  dictionaryFilters,
  trainWordsFiltersElement,
} = elements;

window.addEventListener("load", actionRightAfterPageIsLoad);

export function actionRightAfterPageIsLoad() {
  // === init && rendering filters ===
  dictionaryFilters.appendChild(FilterComponent(filters, () => renderFilteredWords(searchInput.value)));
  trainWordsFiltersElement.appendChild(FilterComponent(trainWordsFilters, () => initTrainWords()));

  // === Log examples ===
  logInfo();

  // === Render words amount ===
  wordsCountEl.innerHTML = wordsInstance.getWordCount();

  // === Setup button which closes modal window ===
  closeModalBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("active");
    renderFilteredWords(searchInput.value);
  });

  // === Setup button which adds word to favorite list ===
  modalAddBtn.addEventListener("click", () => {
    const id = modalAddBtn.dataset.wordId;
    const favoriteWords = storage.getItem() || [];
    const isFavoriteWord = favoriteWords.some((wordId) => wordId === id);

    if (!isFavoriteWord) {
      storage.setItem([...favoriteWords, id]);
      modalAddBtn.innerHTML = "Remove";
    } else {
      const filteredWords = favoriteWords.filter((wordId) => wordId !== id);
      storage.setItem(filteredWords);
      modalAddBtn.innerHTML = "Add";
    }
  });

  // === Render dictionary === important so filter is initiated
  renderFilteredWords(searchInput.value);

  // ========== Setup input which searches for words ==========
  searchInput.addEventListener(
    "input",
    throttle((event) => {
      const searchTerm = event.target.value;
      renderFilteredWords(searchTerm);
    }, 100)
  );

  // === Render practices ===
  TrainWords();
  TrainGrammar();

  // === Render AI Topic Description ===
  const generateTopicButton = document.querySelector(".generate-topic-button");
  const aiTopicDescription = document.querySelector(".ai-topic-description");
  generateTopicButton.addEventListener("click", () => {
    aiTopicDescription.innerHTML = "Loading...";
    generateTopicButton.disabled = true;
    const prompt = aiTopicDescriptionPrompt();

    askAI(prompt).then((response) => {
      aiTopicDescription.innerHTML = response.message.content;
      generateTopicButton.disabled = false;
    });
  });

  // === Setup form train writing text ===
  const trainWritingTextForm = document.querySelector(
    ".train-writing-text-form"
  );
  const trainWritingTextAiReview = document.querySelector(
    ".train-writing-text-ai-review"
  );

  trainWritingTextForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = trainWritingTextForm.train_writing_text_textarea.value;
    const prompt = aiWritingReviewPrompt(text);

    trainWritingTextAiReview.innerHTML = "Loading...";
    trainWritingTextForm.submit.disabled = true;

    askAI(prompt).then((response) => {
      trainWritingTextAiReview.innerHTML = response.message.content;
      trainWritingTextForm.submit.disabled = false;
    });
  });

  window.addEventListener("click", (event) => {
    if (!event.target.classList.contains("word-expression")) return;

    const id = event.target.dataset.id;
    const word = wordsInstance.getWordById(id);

    openWordModal(word);

    const modalButtonAiGen = document.querySelector(".modal-button-ai-gen");
    const modalGenTextEl = document.querySelector(".modal-gen-text");

    modalButtonAiGen.addEventListener("click", () => {
      const { expression } = word;
      const prompt = wordsExamplesPrompt(expression);

      modalGenTextEl.innerHTML = "Loading...";
      modalButtonAiGen.disabled = true;

      askAI(prompt).then((response) => {
        modalGenTextEl.innerHTML = response.message.content;
        modalButtonAiGen.disabled = false;
      });
    });
  });
}

async function askAI(prompt) {
  return puter.ai.chat(prompt);
}
