import { elements } from "../globalVariables";

export default function initElements() {
  initWordsTrainingElements();
  initWritingTrainingElements();
  initWordExtraInfoModal();
  initDictionary();
  initEditingWordModal();
  initOtherElements();
}

function initEditingWordModal(){
  elements.initEditingWordModal = {
    editWordInput: document.querySelector('.edit-word'),
    editTypeInput: document.querySelector('.edit-type'),
    editTypeExpressionInput: document.querySelector('.edit-type-expression'),
    editTranslationInput: document.querySelector('.edit-translation'),
    editDescriptionInput: document.querySelector('.edit-description'),
    applyEditingWordButton: document.querySelector('.apply-editing-word-button'),
  }
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
    addFavoriteWordButton: document.querySelector("#word-extra-info .add-word-favorite"),
    word: document.querySelector("#word-extra-info .word"),
    type: document.querySelector("#word-extra-info .type"),
    wordId: document.querySelector("#word-extra-info .word-id"),
    translation: document.querySelector("#word-extra-info .translation"),
    description: document.querySelector("#word-extra-info .description"),
    aiGeneratedText: document.querySelector("#word-extra-info .ai-generated-text"),
    aiTextGenerationButton: document.querySelector("#word-extra-info .ai-text-generation-button"),
    openEditingDictionaryWordModalButton: document.querySelector(".open-editing-dictionary-word-modal-button")
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
  elements.deleteWordButton = document.querySelector("#delete-word-warning .delete-word");
  elements.formAddNewWord = document.querySelector(".form-add-new-word");
}