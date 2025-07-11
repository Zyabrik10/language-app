import { vars } from "../globalVariables";

/**
 *
 * @param {*} word
 * @param {*} callback
 */

/*
<button class="word-button" data-id="1">
  <span class="index">1</span>
  <span class="expression">word</span>
  <span class="favorite">⭐</span>
  <span class="type verb phrase">verb</span>
</button>
*/

export default function WordComponent(word, index = 0, callback = () => {}) {
  // HOT FIX
  if (!word) {
    const div = document.createElement("div");
    return div;
  }
  const { id, type, expression } = word;

  // <button class="word-button" data-id="1"></button>
  const wordButton = document.createElement("button");
  wordButton.classList.add("word-button");
  wordButton.classList.add("app-button");
  wordButton.dataset.id = id;

  // <span class="index">1</span>
  const indexSpan = document.createElement("span");
  indexSpan.classList.add("index");
  indexSpan.innerText = index;

  // <span class="expression">to feel free</span>
  const wordExpressionText = document.createElement("span");
  wordExpressionText.classList.add("expression");
  wordExpressionText.innerText = expression;

  // <span class="type verb phrase">verb_phrase</span>
  const wordType = document.createElement("span");
  wordType.classList.add("type");
  wordType.classList.add(type);

  wordType.innerText = type;


  wordButton.appendChild(indexSpan);
  wordButton.appendChild(wordExpressionText);

  // <span class="favorite">⭐</span>
  const isFavorite = vars.dictionary.getById(id).favorite;

  if (isFavorite) {
    const favSpan = document.createElement("span");
    favSpan.classList.add("favorite");

    favSpan.innerText = "⭐";
    wordButton.appendChild(favSpan);
  }

  wordButton.appendChild(wordType);

  callback(wordButton);

  return wordButton;
}
