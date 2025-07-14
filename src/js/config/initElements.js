import { elements } from "../globalVariables";

export default function initElements() {
  initWordsTrainingElements();
  initWritingTrainingElements();
  initWordExtraInfoModal();
  initDictionary();
  initOtherElements();
}

function initWordsTrainingElements() {
  elements.trainWords = {
    wordsElement: document.querySelector(".train-word-allWords"),
    currentIndexElement: document.querySelector(".train-word-currentIndex"),
    randomWordElement: document.querySelector(".train-word-random-word"),
    filtersElement: document.querySelector(".train-words-filters"),
  }
}

function initWritingTrainingElements(){
  elements.writingTraining = {
    textForm: document.querySelector(".train-writing-text-form"),
    textAiReview: document.querySelector(".train-writing-text-ai-review"),
    textTotalWords: document.querySelector(".train-writing-text-total-words"),
    textTextArea: document.querySelector(".train-writing-text-textarea"),
  };
}

function initWordExtraInfoModal() {
  elements.wordExtraInfoModal = {
    addFavoriteWordButton: document.querySelector(".word-extra-info-modal .add-word-favorite"),
    word: document.querySelector(".word-extra-info-modal .word"),
    type: document.querySelector(".word-extra-info-modal .type"),
    wordId: document.querySelector(".word-extra-info-modal .word-id"),
    translation: document.querySelector(".word-extra-info-modal .translation"),
    description: document.querySelector(".word-extra-info-modal .description"),
    aiGeneratedText: document.querySelector(".word-extra-info-modal .ai-generated-text"),
    aiTextGenerationButton: document.querySelector(".word-extra-info-modal .ai-text-generation-button"),
  }
}

function initDictionary() {
  elements.dictionary = {
    listElement: document.querySelector(".dictionary-list"),
    filters: document.querySelector(".dictionary-filters"),
    searchInput: document.querySelector(".dictionary-input"),
  }
}

function initOtherElements() {
  elements.wordsCountEl = document.querySelector(".words-count");
  elements.langSwitchers = document.querySelectorAll(".lang-radio-switcher");
  elements.allLinkButtons = document.querySelectorAll(".link-button");
  elements.deleteAllWordsModalOpenButton = document.querySelector(".delete-all-words-modal-open-button");
  elements.deleteAllWordsButton = document.querySelector(".delete-all-words-button");
  elements.addWordModalButton = document.querySelector(".add-word-modal-open-button");
  elements.deleteWordButton = document.querySelector(".delete-word-button");
  elements.formAddNewWord = document.querySelector(".form-add-new-word");
}