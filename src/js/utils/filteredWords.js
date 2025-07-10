import { elements, vars } from "../globalVariables.js";
import WordComponent from "../components/WordComponent.js";

function getResembledWords(searchTerm) {
  const partsArray = searchTerm.split(",");
  let filteredWords = [
    ...new Set(
      partsArray
        .map((part) => {
          const wordsByPart = vars.wordsInstance.getWordsByPart(
            part.trimLeft()
          );

          const typedWords = vars.wordsInstance.getWordsByTypes(
            wordsByPart,
            ...Object.keys(vars.filters.dictionary).map(
              (key) => vars.filters.dictionary[key].used && `${key}`
            )
          );

          let favFiltered =
            typedWords.length !== 0
              ? typedWords
              : vars.wordsInstance.getFavorites();

          if (!vars.filters.dictionary.favorite) {
            favFiltered = favFiltered.filter(({ favorite }) => !favorite);
          }

          return favFiltered;
        })
        .flat()
    ),
  ];

  return filteredWords;
}

export function renderFilteredWords(searchTerm = "") {
  const wordsByPart = getResembledWords(searchTerm);

const typedWords = vars.wordsInstance.getWordsByTypes(
            wordsByPart,
            ...Object.keys(vars.filters.dictionary).map(
              (key) => vars.filters.dictionary[key].used && `${key}`
            )
          );

  let favFiltered =
    typedWords.length !== 0 ? typedWords : vars.wordsInstance.getFavorites();

  if (!vars.filters.dictionary.favorite) {
    favFiltered = favFiltered.filter(({ favorite }) => !favorite);
  }

  const sortedWords = vars.wordsInstance.getSorted(favFiltered);

  elements.dictionaryListElement.innerHTML = "";

  const lis = sortedWords.map((word, index) => {
    const li = document.createElement("li");
    li.appendChild(WordComponent(word, index + 1));
    return li;
  });

  lis.forEach((li) => elements.dictionaryListElement.appendChild(li));
  elements.wordsCountEl.innerHTML = sortedWords.length;
}
