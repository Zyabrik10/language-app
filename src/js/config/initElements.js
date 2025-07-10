import { elements } from "../globalVariables";

export default function initElements() {
  elements.dictionaryListElement = document.querySelector(".dictionary-list");
  elements.wordsCountEl = document.querySelector(".words-count");
  elements.searchInput = document.querySelector(".dictionary-input");
  elements.closeModalBtn = document.querySelector(".modal-close-btn");
  elements.modalAddBtn = document.querySelector(".modal-add-btn");
  elements.modal = document.querySelector(".modal");
  elements.modalContent = document.querySelector(".modal-content");
  elements.trainWordAllWordsElement = document.querySelector(".train-word-allWords");
  elements.trainWordCurrentIndexElement = document.querySelector(".train-word-currentIndex");
  elements.trainWordRandomWordElement = document.querySelector(".train-word-random-word");
  elements.dictionaryFilters = document.querySelector(".dictionary-filters");
  elements.trainWordsFiltersElement = document.querySelector(".train-words-filters");
  elements.trainWritingTextForm = document.querySelector(".train-writing-text-form");
  elements.trainWritingTextAiReview = document.querySelector(".train-writing-text-ai-review");
  elements.langSwitchers = document.querySelectorAll(".lang-radio-switcher");
  elements.trainWritingTextTotalWords = document.querySelector(".train-writing-text-total-words");
  elements.trainWritingTextTextArea = document.querySelector(".train-writing-text-textarea");
  elements.allLinkButtons = document.querySelectorAll(".link-button");
}