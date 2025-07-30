import ModalWindow from "../classes/ModalWindow.js";
import {
  localStorageGetItem,
  localStorageSetItem,
} from "../utils/localStorage.utils.js";
import {
  translate,
  askAI,
  throttle,
  renderDictionary,
  aiWritingReviewPrompt,
  asyncWrapper,
  wordsExamplesPrompt,
  askExpressionTranslationPrompt,
  askExpressionTypePrompt,
  askExpressionTypeExpressionPrompt,
  askExpressionDescriptionPrompt
} from "../utils";
import { elements, vars } from "../globalVariables.js";
import {
  addNewWord,
  deleteWordById,
  delteAllWords,
  updateWord,
} from "../firebase.js";
import { main } from "../main";
import initVars from "./initVars.config";

export function initModals() {
  // modal warning init
  new ModalWindow("delete-all-words-warning").init();

  // modal warning init
  new ModalWindow("add-word").init();

  // modal warning init
  new ModalWindow("delete-word-warning").init();
}

export async function addWordToFavorite() {
  const id = elements.wordExtraInfoModal.addFavoriteWordButton.dataset.wordId;
  const isFavoriteWord = vars.dictionary.getById(id).favorite;

  if (!isFavoriteWord) {
    vars.dictionary.setFavoriteById(id, true);
    localStorageSetItem(`favorite-${vars.lang}-words`, [
      ...(localStorageGetItem(`favorite-${vars.lang}-words`) || []),
      id,
    ]);
    await updateWord(vars.lang, id, {
      ...vars.dictionary.getById(id),
      favorite: true,
    });
    elements.wordExtraInfoModal.addFavoriteWordButton.innerHTML =
      "Remove from Favorite";
  } else {
    vars.dictionary.setFavoriteById(id, false);
    localStorageSetItem(
      `favorite-${vars.lang}-words`,
      localStorageGetItem(`favorite-${vars.lang}-words`).filter(
        ({ fId }) => id === fId
      )
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

export function searchWords(event) {
  const searchTerm = event.target.value;
  renderDictionary(searchTerm);
}

export function getAITextReview(event) {
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

export function countWordsOnTyping() {
  elements.writingTraining.textTotalWords.innerText =
    elements.writingTraining.textTextArea.value.trim().split(" ").length;
}

export function changeLanguage() {
  if (this.checked) {
    let lang = this.dataset.lang;
    localStorageSetItem("pref-lang", lang);
    initVars(`favorite-${lang}-words`, lang).then(main);
  }
}

export function initWordExtraInfo(word) {
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

  elements.wordExtraInfoModal.type.innerText = word.type_expression;
  elements.wordExtraInfoModal.type.classList.add(word.type);

  elements.wordExtraInfoModal.wordId.innerText = word.id;

  elements.wordExtraInfoModal.translation.innerText = word.translation;
  elements.wordExtraInfoModal.description.innerText = word.description;
  elements.wordExtraInfoModal.aiGeneratedText.innerHTML = "";
}

export function initWordExtraInfoModal(word) {
  vars.wordExtraInfoModal.showModalWindow(initWordExtraInfo.bind(null, word));
}

export function handleGlobalViewportClicking(event) {
  if (event.target.closest(".dictionary-word-button")) {
    const id = event.target.closest(".dictionary-word-button").dataset.id;
    const word = vars.dictionary.getById(id);

    initWordExtraInfoModal(word);
  } else if (event.target.closest(".link-button")) {
    const btn = event.target.closest(".link-button");

    elements.allLinkButtons.forEach((e) => e.classList.remove("active"));
    btn.classList.add("active");
  }
}

export function initAddNewWordForm() {
  const addWordFormInputs = localStorageGetItem("add-word-form", {});

  const form = document.querySelector(".form-add-new-word");
  const inputs = form.querySelectorAll(".form-label-input");

  const expressionInput = form.expressionInput;
  const translationInput = form.translationInput;
  const typeInput = form.typeInput;
  const typeExpressionInput = form.typeExpressionInput;
  const descriptionInput = form.descriptionInput;

  const typeSelect = form.querySelector('select[data-type="select-type"]');
  const typeExpressionSelect = form.querySelector(
    'select[data-type="select-type-expression"]'
  );

  const translateButton = form.querySelector('button[data-role="translate"]');
  
  const fillTranslationAIButton = form.querySelector('button[data-role="fillTranslationAI"]');
  const fillTypeAIButton = form.querySelector('button[data-role="fillTypeAI"]');
  const fillTypeExpressionAIButton = form.querySelector('button[data-role="fillTypeExpressionAI"]');
  const fillDescriptionAIButton = form.querySelector('button[data-role="fillDescriptionAI"]');

  inputs.forEach((input) => {
    input.value = addWordFormInputs[input.name] || "";
    input.value.length !== 0 && input.classList.add("active");

    input.addEventListener(
      "input",
      throttle(() => saveValues(input), 100)
    );
  });

  vars.dictionary.types.forEach((type) => {
    if (type === "favorite") return;

    typeSelect.insertAdjacentHTML("beforeend", `<option>${type}</option>`);
  });

  vars.dictionary.types_expression.forEach((type) => {
    if (type === "favorite") return;

    typeExpressionSelect.insertAdjacentHTML(
      "beforeend",
      `<option>${type}</option>`
    );
  });

  typeSelect.addEventListener("change", function () {
    typeInput.value = this.value;
    saveValues(typeInput);
  });

  typeExpressionSelect.addEventListener("change", function () {
    typeExpressionInput.value = this.value;
    saveValues(typeExpressionInput);
  });

  translateButton.addEventListener(
    "click",
    asyncWrapper(async () => {
      const expression = expressionInput.value.trim();
      const translation = await translate(expression);

      if (!translation) return;

      translationInput.value = translation;
      saveValues(translationInput);
    })
  );

  fillTranslationAIButton.addEventListener('click', ()=>{
    fillTranslationAIButton.disabled = true;

    const expression = expressionInput.value.trim();

    askAI(askExpressionTranslationPrompt(vars.lang, expression)).then(res =>{
      fillTranslationAIButton.disabled = false;
      translationInput.value = res;
    }).catch(()=> {
      fillTranslationAIButton.disabled = false;
    });
  });

  fillTypeAIButton.addEventListener('click', ()=>{
    fillTypeAIButton.disabled = true;

    const expression = expressionInput.value.trim();

    askAI(askExpressionTypePrompt(vars.lang, expression, vars.dictionary.types)).then(res =>{
      fillTypeAIButton.disabled = false;
      typeInput.value = res;
    }).catch(()=> {
      fillTypeAIButton.disabled = false;
    });
  });

  fillTypeExpressionAIButton.addEventListener('click', ()=>{
    fillTypeExpressionAIButton.disabled = true;

    const expression = expressionInput.value.trim();

    askAI(askExpressionTypeExpressionPrompt(vars.lang, expression, vars.dictionary.types_expression)).then(res =>{
      fillTypeExpressionAIButton.disabled = false;
      typeExpressionInput.value = res;
    }).catch(()=> {
      fillTypeExpressionAIButton.disabled = false;
    });
  });

  fillDescriptionAIButton.addEventListener('click', ()=>{
    fillDescriptionAIButton.disabled = true;

    const expression = expressionInput.value.trim();

    askAI(askExpressionDescriptionPrompt(vars.lang, expression, vars.dictionary.types_expression)).then(res =>{
      fillDescriptionAIButton.disabled = false;
      descriptionInput.value = res;
    }).catch(()=> {
      fillDescriptionAIButton.disabled = false;
    });
  });

  function saveValues(...inputs) {
    inputs.forEach(input => {
      input.value.trim().length !== 0
        ? input.classList.add("active")
        : input.classList.remove("active");
      localStorageSetItem("add-word-form", {
        ...addWordFormInputs,
        [input.name]: input.value.trim(),
      });
      addWordFormInputs[input.name] = input.value.trim();
    })
  }
}

export function handleGenerateUsingExpressionExampleButton({ currentTarget }) {
  const { expression, type } = vars.dictionary.getById(
    currentTarget.dataset.id
  );
  const prompt = wordsExamplesPrompt(expression, type, vars.langs[vars.lang]);

  elements.wordExtraInfoModal.aiGeneratedText.innerHTML = "Loading...";
  elements.wordExtraInfoModal.aiTextGenerationButton.disabled = true;

  askAI(prompt).then((response) => {
    elements.wordExtraInfoModal.aiGeneratedText.innerHTML =
      response.message.content;
    elements.wordExtraInfoModal.aiTextGenerationButton.disabled = false;
  });
}

export const addNewWordHandler = asyncWrapper(async (e) => {
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
  const type = typeInput.value.trim() || "undefined";
  const typeExpression = typeExpressionInput.value.trim() || "undefined";
  const description = descriptionInput.value.trim() || "undefined";
  const translation = translationInput.value.trim() || "undefined";
  const favorite = favoriteInput.checked;

  if (!expression.length) {
    console.log("expression length is 0");
    return;
  }

  const newWord = {
    id,
    expression,
    type,
    type_expression: typeExpression,
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

  initVars(`favorite-${lang}-words`, lang).then(main);
});

export const deleteWordHandler = asyncWrapper(async () => {
  const id = elements.deleteWordButton.dataset.wordId;
  const lang = vars.lang;
  await deleteWordById(lang, id);
  vars.wordExtraInfoModal.hideModalWindow();
  initVars(`favorite-${lang}-words`, lang).then(main);
});

export const deleteAllWordsHandler = asyncWrapper(async () => {
  const lang = vars.lang;
  await delteAllWords(lang);
  vars.deleteAllWordsWarningModal.hideModalWindow();
  console.log(`All Words were deleted from ${vars.lang} dictionary`);
  initVars(`favorite-${lang}-words`, lang).then(main);
});

export function renderEditModalHandler() {
  vars.editingWordModal.showModalWindow(() => {
    const id =
      elements.wordExtraInfoModal.openEditingDictionaryWordModalButton.dataset
        .wordId;
    const word = vars.dictionary.getById(id);
    elements.initEditingWordModal.editWordInput.value = word.expression;
    elements.initEditingWordModal.editTypeInput.value = word.type;
    elements.initEditingWordModal.editTranslationInput.value = word.translation;
    elements.initEditingWordModal.editTypeExpressionInput.value =
      word.type_expression;
    elements.initEditingWordModal.editDescriptionInput.value = word.description;
    elements.initEditingWordModal.applyEditingWordButton.dataset.wordId = id;
  });
  vars.wordExtraInfoModal.hideModalWindow();
}

export const editWordHandler = asyncWrapper(async () => {
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
  initVars(`favorite-${lang}-words`, lang).then(main);
  initWordExtraInfoModal({ id, ...updatedWord });
});
