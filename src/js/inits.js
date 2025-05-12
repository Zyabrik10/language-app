import words_array_en from "../words-en.json";
import words_array_pl from "../words-pl.json";

import {
  aiTopicDescriptionPrompt,
  aiWritingReviewPrompt,
  wordsExamplesPrompt,
} from "../prompts";
import LocalStorage from "./classes/LocalStorage";
import Words from "./classes/Words";
import { elements, vars } from "./vars.js";
import { throttle, renderFilteredWords, openWordModal, parseWords } from "./utils";
import { initTrainWords, TrainWords } from "./programs";
import { FilterComponent } from "./components";

const words = {
  en: words_array_en,
  pl: parseWords(words_array_pl),
};

export function initElements() {
  elements.dictionaryListElement = document.querySelector(".dictionary-list");
  elements.wordsCountEl = document.querySelector(".words-count");
  elements.searchInput = document.querySelector(".dictionary-input");
  elements.closeModalBtn = document.querySelector(".modal-close-btn");
  elements.modalAddBtn = document.querySelector(".modal-add-btn");
  elements.modal = document.querySelector(".modal");
  elements.modalContent = document.querySelector(".modal-content");
  elements.trainWordAllWordsElement = document.querySelector(
    ".train-word-allWords"
  );
  elements.trainWordCurrentIndexElement = document.querySelector(
    ".train-word-currentIndex"
  );
  elements.trainWordRandomWordElement = document.querySelector(
    ".train-word-random-word"
  );
  elements.dictionaryFilters = document.querySelector(".dictionary-filters");
  elements.trainWordsFiltersElement = document.querySelector(
    ".train-words-filters"
  );
  elements.generateTopicButton = document.querySelector(
    ".generate-topic-button"
  );
  elements.aiTopicDescription = document.querySelector(".ai-topic-description");
  elements.trainWritingTextForm = document.querySelector(
    ".train-writing-text-form"
  );
  elements.trainWritingTextAiReview = document.querySelector(
    ".train-writing-text-ai-review"
  );
  elements.langSwitchers = document.querySelectorAll(".lang-radio-switcher");
  elements.trainWritingTextTotalWords = document.querySelector(
    ".train-writing-text-total-words"
  );
  elements.trainWritingTextTextArea = document.querySelector(
    ".train-writing-text-textarea"
  );
}

export function initVars(localstorage, lang) {
  const language_grammar = {
    en: {
      noun: "Noun",
      verb: "Verb",
      adjective: "Adjective",
      adverb: "Adverb",
      verb_phrase: "Verb Phrase",
      phrasal_verb: "Phrasal Verb",
      noun_phrase: "Noun Phrase",
      adjective_phrase: "Adjective Phrase",
      phrase: "Phrase",
      proverb: "Proverb",
      conjunction: "Conjunction",
      adverbial_phrase: "Adverbial phrase",
      favorite: "Favorite",
    },
    pl: {
      noun: "Rzeczownik",
      noun_phrase: "Wyrażenie rzeczownikiem",
      verb: "Czasownik",
      verb_phrase: "Wyrażenie czasownikiem",
      adjective: "Przymiotnik",
      adjective_phrase: "Wyrażenie przymiotnikiem",
      adverb: "Przysłówek",
      adverbial_phrase: "Wyrażenie przysłówkiem",
      preposition: "Przyimek",
      conjunction: "Spójnik",
      interjection: "Wykrzyknik",
      phrase: "Wyrażenie",
      proverb: "Przysłowie",
      favorite: "Ulubione",
    },
  };
  vars.lang = lang;
  vars.wordsInstance = new Words(words[lang]);
  vars.storage = new LocalStorage(localstorage);
  vars.filters = language_grammar[lang];
  vars.dic_filters = {};
  vars.trainWordsFilters = {};
  vars.langs = {
    en: "English",
    pl: "Polish",
  };

  const keys = Object.keys(vars.filters);

for (const key in keys) {
    vars.dic_filters[key] = false;
    vars.trainWordsFilters[key] = false;
  }
}

export function setEvents() {
  // === Setup button which closes modal window ===
  elements.closeModalBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("active");
    renderFilteredWords(elements.searchInput.value);
  });

  // === Setup button which adds word to favorite list ===
  elements.modalAddBtn.addEventListener("click", () => {
    const id = elements.modalAddBtn.dataset.wordId;
    const favoriteWords = vars.storage.getItem() || [];
    const isFavoriteWord = favoriteWords.some((wordId) => wordId === id);

    if (!isFavoriteWord) {
      vars.storage.setItem([...favoriteWords, id]);
      elements.modalAddBtn.innerHTML = "Remove from Favorite";
    } else {
      const filteredWords = favoriteWords.filter((wordId) => wordId !== id);
      vars.storage.setItem(filteredWords);
      elements.modalAddBtn.innerHTML = "Add to Favorite";
    }
  });

  // ========== Setup input which searches for words ==========
  elements.searchInput.addEventListener(
    "input",
    throttle((event) => {
      const searchTerm = event.target.value;
      renderFilteredWords(searchTerm);
    }, 100)
  );

  // === Render AI Topic Description ===
  elements.generateTopicButton.addEventListener("click", () => {
    elements.aiTopicDescription.innerHTML = "Loading...";
    elements.generateTopicButton.disabled = true;
    const prompt = aiTopicDescriptionPrompt(vars.langs[vars.lang]);

    askAI(prompt).then((response) => {
      elements.aiTopicDescription.innerHTML = response.message.content;
      elements.generateTopicButton.disabled = false;
    });
  });

  // === Setup form train writing text ===
  elements.trainWritingTextForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text =
      elements.trainWritingTextForm.train_writing_text_textarea.value;
    const prompt = aiWritingReviewPrompt(text, vars.langs[vars.lang]);

    elements.trainWritingTextAiReview.innerHTML = "Loading...";
    elements.trainWritingTextForm.submit.disabled = true;

    askAI(prompt).then((response) => {
      elements.trainWritingTextAiReview.innerHTML = response.message.content;
      elements.trainWritingTextForm.submit.disabled = false;
    });
  });

  // Global clicking on word component to render modal window of it
  window.addEventListener("click", (event) => {
    if (!event.target.closest(".word-button")) return;
    
    const id = event.target.closest(".word-button").dataset.id;
    const word = vars.wordsInstance.getWordById(id);

    openWordModal(word);

    const modalButtonAiGen = document.querySelector(".modal-button-ai-gen");
    const modalGenTextEl = document.querySelector(".modal-gen-text");

    modalButtonAiGen.addEventListener("click", () => {
      const { expression, type } = word;
      const prompt = wordsExamplesPrompt(expression, type, vars.langs[vars.lang]);

      modalGenTextEl.innerHTML = "Loading...";
      modalButtonAiGen.disabled = true;

      askAI(prompt).then((response) => {
        modalGenTextEl.innerHTML = response.message.content;
        modalButtonAiGen.disabled = false;
      });
    });

  });

  // Setting up feature changing languages
  elements.langSwitchers.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        let lang = this.dataset.lang;
        initVars(`favorite${lang[0].toUpperCase() + lang.split("").splice(1).join("")}Words`, lang);
        onAllInits();
      }
    });
  });

  elements.trainWritingTextTextArea.addEventListener("input", () => {
    elements.trainWritingTextTotalWords.innerText =
      elements.trainWritingTextTextArea.value.trim().split(" ").length;
  });

  function askAI(prompt) {
    return puter.ai.chat(prompt);
  }
}

export function onAllInits() {
  // === rendering filters ===
  elements.dictionaryFilters.innerHTML = "";
  elements.trainWordsFiltersElement.innerHTML = "";
  elements.dictionaryFilters.appendChild(
    FilterComponent(vars.dic_filters, vars.filters, () =>
      renderFilteredWords(elements.searchInput.value)
    )
  );
  elements.trainWordsFiltersElement.appendChild(
    FilterComponent(vars.trainWordsFilters, vars.filters, () =>
      initTrainWords()
    )
  );

  // === Render dictionary && Render words amount === important so filter is initiated
  renderFilteredWords(elements.searchInput.value);
  elements.wordsCountEl.innerHTML = vars.wordsInstance.getWordCount();

  // === Render practices ===
  TrainWords();
}
