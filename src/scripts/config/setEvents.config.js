import { elements } from "../globalVariables.js";
import { throttle } from "../utils/index.js";
import {
  addWordToFavorite,
  changeLanguage,
  countWordsOnTyping,
  getAITextReview,
  handleGlobalViewportClicking,
  initModals,
  searchWords,
  initAddNewWordForm,
  handleGenerateUsingExpressionExampleButton,
  addNewWordHandler,
  deleteWordHandler,
  deleteAllWordsHandler,
  editWordHandler,
  renderEditModalHandler,
} from "./events.config.js";

export default function setEvents() {
  initModals();
  initAddNewWordForm();

  // ========== adds word to favorite list ==========
  elements.wordExtraInfoModal.addFavoriteWordButton.addEventListener(
    "click",
    addWordToFavorite
  );

  // ========== Searches for words in dictionary ==========
  elements.dictionary.searchInput.addEventListener(
    "input",
    throttle(searchWords, 100)
  );

  // ========== Form train writing text ==========
  elements.writingTraining.textForm.addEventListener("submit", getAITextReview);

  // ========== Global clicking on word component to render modal window of it ==========
  window.addEventListener("click", handleGlobalViewportClicking);

  // ========== Switching languages ==========
  elements.langSwitchers.forEach((radioLanguage) =>
    radioLanguage.addEventListener("change", changeLanguage)
  );

  // ========== Renders numbers of words typed ==========
  elements.writingTraining.textTextArea.addEventListener(
    "input",
    throttle(countWordsOnTyping, 100)
  );

  // ========== Generate text example for a word ==========
  elements.wordExtraInfoModal.aiTextGenerationButton.addEventListener(
    "click",
    handleGenerateUsingExpressionExampleButton
  );

  // ========== Add new word ==========
  elements.formAddNewWord.addEventListener("submit", addNewWordHandler);

  // ========== Delete the word ==========
  elements.deleteWordButton.addEventListener("click", deleteWordHandler);

  // ========== Delete All Words Button ==========
  elements.deleteAllWordsButton.addEventListener(
    "click",
    deleteAllWordsHandler
  );

  // ========== Render Editing Dictionary Word Modal ==========
  elements.wordExtraInfoModal.openEditingDictionaryWordModalButton.addEventListener(
    "click",
    renderEditModalHandler
  );

  // ========== Edit Dictionary Word ==========
  elements.initEditingWordModal.applyEditingWordButton.addEventListener(
    "click",
    editWordHandler
  );
}
