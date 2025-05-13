import { elements, vars } from "../vars.js";
import WordComponent from "../components/WordComponent.js";

export function getFavoriteWordsFrom(words, filters) {
  const favoriteWordsId = vars.storage.getItem() || [];
  const favWords = favoriteWordsId.map((id) =>
    vars.wordsInstance.getWordById(id)
  );


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
          vars.wordsInstance.getWordsByContains(
            word.trimLeft(),
            vars.dic_filters
          )
        )
        .flat()
    ),
  ];

  return filteredWords;
}

export function renderFilteredWords(searchTerm) {
  let filteredWords = getFavoriteWordsFrom(
    getResembledWords(searchTerm),
    vars.dic_filters
  );

  elements.dictionaryListElement.innerHTML = "";

  const lis = filteredWords.map((word, index) => {
    const li = document.createElement("li");
    li.appendChild(WordComponent(word, index + 1));
    return li;
  });

  lis.forEach((li) => elements.dictionaryListElement.appendChild(li));
  elements.wordsCountEl.innerHTML = filteredWords.length;
}
