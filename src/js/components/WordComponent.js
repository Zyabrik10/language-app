import { vars } from "../vars";

const { storage } = vars;

/**
 *
 * @param {*} word
 * @param {*} callback
 */

/*
`
  <span data-id="${word.id}" class="word-expression id-${id}">word</span><span style="user-select: none;"> [<span class="${
    word.type.includes("_") ? word.type.split("_").join(" ") : word.type
  }">${word.type}</span>] ${word.id}</span>${isFavorite ? ` ⭐` : ''}`;
*/

export default function WordComponent(word, callback = () => { }) {
    const { id, type, expression } = word;
    
  // <span class="word-component-wrapper"></span>
  const wordComponentWrapper = document.createElement("span");

  // <span data-id="123" class="word-expression">to feel free</span>
  const wordExpression = document.createElement("span");
  wordExpression.dataset.id = id;
  wordExpression.classList.add("word-expression");
  wordExpression.innerText = expression;

  // <span style="user-select: none;"></span>
  const extra = document.createElement("span");
  extra.style.userSelect = "user-select: none;";
  extra.innerText += " ";

  // <span class="verb phrase">verb_phrase</span>
  const wordType = document.createElement("span");
  const classes = type.includes("_") ? type.split("_").join(" ") : type;

  if (classes.includes(" ")) {
    classes.split(" ").forEach(cls => {
      wordType.classList.add(cls);
    });
  }
  else wordType.classList.add(classes);

  wordType.innerHTML = type;

  // <span style="user-select: none;"> [<span class="verb phrase">verb_phrase</span>] 123</span>
  extra.innerHTML += "[";
  extra.appendChild(wordType);
  extra.innerHTML += "] ";
  extra.innerHTML += id;

  // <span style="user-select: none;"> [<span class="verb phrase">verb_phrase</span>] 123 ⭐</span>
  const favoriteWordsIds = storage.getItem() || [];
  const isFavorite = favoriteWordsIds.some((favId) => favId === id);
  extra.innerHTML += isFavorite ? `⭐` : "";

  wordComponentWrapper.appendChild(wordExpression);
  wordComponentWrapper.appendChild(extra);

  callback(wordComponentWrapper);

  return wordComponentWrapper;
}
