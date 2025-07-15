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
import {
  addNewWord,
  deleteWordById,
  delteAllWords,
  updateWord,
} from "../firebase.js";

export default function setEvents() {
  // ========== Button which adds word to favorite list ==========
  elements.wordExtraInfoModal.addFavoriteWordButton.addEventListener(
    "click",
    addWordToFavorite
  );

  // ========== Input which searches for words ==========
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
    countWordsOnTyping
  );

  // ========== Button which generate text example for a word ==========
  elements.wordExtraInfoModal.aiTextGenerationButton.addEventListener(
    "click",
    ({ currentTarget }) => {
      const { expression, type } = vars.dictionary.getById(
        currentTarget.dataset.id
      );
      const prompt = wordsExamplesPrompt(
        expression,
        type,
        vars.langs[vars.lang]
      );

      elements.wordExtraInfoModal.aiGeneratedText.innerHTML = "Loading...";
      elements.wordExtraInfoModal.aiTextGenerationButton.disabled = true;

      askAI(prompt).then((response) => {
        elements.wordExtraInfoModal.aiGeneratedText.innerHTML =
          response.message.content;
        elements.wordExtraInfoModal.aiTextGenerationButton.disabled = false;
      });
    }
  );

  // ========== Button that opens warning before deleting all words in the dictionary ==========
  elements.deleteAllWordsModalOpenButton.addEventListener(
    "click",
    vars.deleteAllWordsWarningModal.showModalWindow.bind(
      vars.deleteAllWordsWarningModal,
      null
    )
  );

  // ========== Button that opens add new word modal ==========
  elements.addWordModalButton.addEventListener(
    "click",
    vars.addNewWordModal.showModalWindow.bind(vars.addNewWordModal, null)
  );

  // ========== Button that opens add new word modal ==========
  elements.formAddNewWord.addEventListener("submit", async (e) => {
    e.preventDefault();
    const {
      expressionInput,
      typeInput,
      typeExpressionInput,
      descriptionInput,
      translationInput,
      favoriteInput,
    } = elements.formAddNewWord;

    const id = String(vars.dictionary.d.length);
    const expression = expressionInput.value.trim();
    const type = typeInput.value.trim();
    const typeExpression = typeExpressionInput.value.trim();
    const description = descriptionInput.value.trim();
    const translation = translationInput.value.trim();
    const favorite = favoriteInput.checked;

    const newWord = {
      id,
      expression,
      type,
      typeExpression,
      description,
      translation,
      favorite,
    };

    const lang = vars.lang;
    await addNewWord(lang, newWord);

    expressionInput.value = "";
    typeInput.value = "";
    typeExpressionInput.value = "";
    descriptionInput.value = "";
    translationInput.value = "";
    favoriteInput.checked = false;

    vars.addNewWordModal.hideModalWindow();
    vars.wordExtraInfoModal.hideModalWindow();
    initVars(
      `favorite${
        lang[0].toUpperCase() + lang.split("").splice(1).join("")
      }Words`,
      lang
    ).then(main);
  });

  // ========== Button that deletes the word ==========
  elements.deleteWordButton.addEventListener("click", async () => {
    const id = elements.deleteWordButton.dataset.wordId;
    const lang = vars.lang;
    await deleteWordById(lang, id);
    vars.wordExtraInfoModal.hideModalWindow();
    initVars(
      `favorite${
        lang[0].toUpperCase() + lang.split("").splice(1).join("")
      }Words`,
      lang
    ).then(main);
  });

  // ========== Delete All Words Button ==========
  elements.deleteAllWordsButton.addEventListener("click", async () => {
    const lang = vars.lang;
    await delteAllWords(lang);
    vars.deleteAllWordsWarningModal.hideModalWindow();
    console.log(`All Words were deleted from ${vars.lang} dictionary`);
    initVars(
      `favorite${
        lang[0].toUpperCase() + lang.split("").splice(1).join("")
      }Words`,
      lang
    ).then(main);
  });

  // ========== Open Editing Dictionary Word Modal ==========
  elements.wordExtraInfoModal.openEditingDictionaryWordModalButton.addEventListener(
    "click",
    () => {
      vars.editingWordModal.showModalWindow(() => {
        const id =
          elements.wordExtraInfoModal.openEditingDictionaryWordModalButton
            .dataset.wordId;
        const word = vars.dictionary.getById(id);
        elements.initEditingWordModal.editWordInput.value = word.expression;
        elements.initEditingWordModal.editTypeInput.value = word.type;
        elements.initEditingWordModal.editTranslationInput.value =
          word.translation;
        elements.initEditingWordModal.editTypeExpressionInput.value =
          word.type_expression;
        elements.initEditingWordModal.editDescriptionInput.value =
          word.description;
        elements.initEditingWordModal.cancelEditingWordButton.dataset.wordId =
          id;
        elements.initEditingWordModal.applyEditingWordButton.dataset.wordId =
          id;
      });
      vars.wordExtraInfoModal.hideModalWindow();
    }
  );

  // ========== Open Editing Dictionary Word Modal ==========
  elements.initEditingWordModal.cancelEditingWordButton.addEventListener(
    "click",
    () => {
      const id =
        elements.initEditingWordModal.cancelEditingWordButton.dataset.wordId;
      const word = vars.dictionary.getById(id);

      vars.editingWordModal.hideModalWindow();
      vars.wordExtraInfoModal.showModalWindow(
        initWordExtraInfo.bind(null, word)
      );
    }
  );

  // ========== Open Editing Dictionary Word Modal ==========
  elements.initEditingWordModal.applyEditingWordButton.addEventListener(
    "click",
    async () => {
      const id =
        elements.initEditingWordModal.applyEditingWordButton.dataset.wordId;
      const updatedWord = {
        expression: elements.initEditingWordModal.editWordInput.value.trim(),
        translation:
          elements.initEditingWordModal.editTranslationInput.value.trim(),
        type: elements.initEditingWordModal.editTypeInput.value.trim(),
        type_expression:
          elements.initEditingWordModal.editTypeExpressionInput.value.trim(),
        description:
          elements.initEditingWordModal.editDescriptionInput.value.trim(),
      };
      elements.initEditingWordModal.applyEditingWordButton.disabled = true;
      await updateWord(vars.lang, id, updatedWord);
      vars.dictionary.updateWordById(id, updatedWord);
      elements.initEditingWordModal.applyEditingWordButton.disabled = false;

      let lang = vars.lang;
      initVars(
        `favorite${
          lang[0].toUpperCase() + lang.split("").splice(1).join("")
        }Words`,
        lang
      ).then(main);
    }
  );
}

async function addWordToFavorite() {
  const id = elements.wordExtraInfoModal.addFavoriteWordButton.dataset.wordId;
  const isFavoriteWord = vars.dictionary.getById(id).favorite;

  if (!isFavoriteWord) {
    vars.dictionary.setFavoriteById(id, true);
    vars.storage.setItem([...(vars.storage.getItem() || []), id]);
    await updateWord(vars.lang, id, {
      ...vars.dictionary.getById(id),
      favorite: true,
    });
    elements.wordExtraInfoModal.addFavoriteWordButton.innerHTML =
      "Remove from Favorite";
  } else {
    vars.dictionary.setFavoriteById(id, false);
    vars.storage.setItem(
      vars.storage.getItem().filter(({ fId }) => id === fId)
    );
    await updateWord(vars.lang, id, {
      ...vars.dictionary.getById(id),
      favorite: false,
    });
    elements.wordExtraInfoModal.addFavoriteWordButton.innerHTML =
      "Add to Favorite";
  }

  renderDictionary();
}

function searchWords(event) {
  const searchTerm = event.target.value;
  renderDictionary(searchTerm);
}

function getAITextReview(event) {
  event.preventDefault();
  const text =
    elements.writingTraining.textForm.train_writing_text_textarea.value;
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
    vars.prefLanguage.setItem(lang);
    initVars(
      `favorite${
        lang[0].toUpperCase() + lang.split("").splice(1).join("")
      }Words`,
      lang
    ).then(main);
  }
}

function initWordExtraInfo(word) {
  const isFavoriteWord = vars.dictionary.getById(word.id).favorite;

  elements.wordExtraInfoModal.aiTextGenerationButton.dataset.id = word.id;
  elements.wordExtraInfoModal.addFavoriteWordButton.dataset.wordId = word.id;
  elements.wordExtraInfoModal.openEditingDictionaryWordModalButton.dataset.wordId =
    word.id;
  elements.deleteWordButton.dataset.wordId = word.id;
  elements.wordExtraInfoModal.addFavoriteWordButton.innerText = !isFavoriteWord
    ? "Add to Favorite"
    : "Remove from Favorite";

  elements.wordExtraInfoModal.word.innerText = word.expression;

  elements.wordExtraInfoModal.type.innerText = word.type;
  elements.wordExtraInfoModal.type.classList.add(word.type);

  elements.wordExtraInfoModal.wordId.innerText = word.id;

  elements.wordExtraInfoModal.translation.innerText = word.translation;
  elements.wordExtraInfoModal.description.innerText = word.description;
  elements.wordExtraInfoModal.aiGeneratedText.innerHTML = "";
}

function handleGlobalViewportClicking(event) {
  if (event.target.closest(".dictionary-word-button")) {
    const id = event.target.closest(".dictionary-word-button").dataset.id;
    const word = vars.dictionary.getById(id);

    vars.wordExtraInfoModal.showModalWindow(initWordExtraInfo.bind(null, word));
  } else if (event.target.closest(".link-button")) {
    const btn = event.target.closest(".link-button");

    elements.allLinkButtons.forEach((e) => e.classList.remove("active"));
    btn.classList.add("active");
  }
}

function askAI(prompt) {
  return puter.ai.chat(prompt);
}
