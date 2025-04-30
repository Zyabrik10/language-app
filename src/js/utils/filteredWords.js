import { elements, vars } from "../vars.js";
import WordComponent from "../components/WordComponent.js";

const { wordsInstance, storage, filters } = vars;
const { dictionaryListElement, wordsCountEl } = elements;

export function getFavoriteWordsFrom(words, filters) {
  const favoriteWordsId = storage.getItem() || [];
  const favWords = favoriteWordsId.map((id) => wordsInstance.getWordById(id));

  if (filters.favorite) {
    words = [...new Set([...words, ...favWords])];
  } else {
    words = words.filter(
      ({ id: filteredWordId }) =>
        !favWords.some(
          ({ id: favoriteWordId }) => filteredWordId === favoriteWordId
        )
    );
  }

  return words;
}

export function getResembledWords(searchTerm) {
  const wordsArray = searchTerm.split(",");
  let filteredWords = [
    ...new Set(
      wordsArray
        .map((word) =>
          wordsInstance.getWordsByContains(word.trimLeft(), filters)
        )
        .flat()
    ),
  ];

  return filteredWords;
}

export function renderFilteredWords(searchTerm) {
  let filteredWords = getFavoriteWordsFrom(getResembledWords(searchTerm), filters);

  dictionaryListElement.innerHTML = '';

  const lis = filteredWords.map((word) => {
    const li = document.createElement("li");
    li.appendChild(WordComponent(word));
    return li;
  });

  lis.forEach(li => dictionaryListElement.appendChild(li));
  wordsCountEl.innerHTML = filteredWords.length;
}
