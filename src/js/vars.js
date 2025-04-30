import Words from "./classes/Words";
import words from "../words.json";
import LocalStorage from "./classes/LocalStorage";

export const vars = {
  wordsInstance: new Words(words),
  storage: new LocalStorage("favoriteWords"),
  filters: {},
  trainWordsFilters: {}
};

export const elements = {
  dictionaryListElement: document.querySelector(".dictionary-list"),
  wordsCountEl: document.querySelector(".words-count"),
  searchInput: document.querySelector(".dictionary-input"),
  closeModalBtn: document.querySelector(".modal-close-btn"),
  modalAddBtn: document.querySelector(".modal-add-btn"),
  modal: document.querySelector(".modal"),
  modalContent: document.querySelector(".modal-content"),
  trainWordAllWordsElement: document.querySelector(".train-word-allWords"),
  trainWordCurrentIndexElement: document.querySelector(".train-word-currentIndex"),
  trainWordRandomWordElement: document.querySelector(".train-word-random-word"),
  dictionaryFilters: document.querySelector(".dictionary-filters"),
  trainWordsFiltersElement: document.querySelector(".train-words-filters"),
};