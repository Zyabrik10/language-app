import { elements, vars } from "../globalVariables.js";
import WordComponent from "../components/Word.js";

function getResembledWords(searchTerm) {
  const partsArray = searchTerm.split(",");
  let filteredWords = [
    ...new Set(
      partsArray
        .map((part) => {
          const wordsByPart = vars.dictionary.getWordsByPart(
            part.trimLeft()
          );

          const typedWords = vars.dictionary.getWordsByTypes(
            wordsByPart,
            ...Object.keys(vars.filters.dictionary).map(
              (key) => vars.filters.dictionary[key].used && `${key}`
            )
          );

          let favFiltered =
            typedWords.length !== 0
              ? typedWords
              : vars.dictionary.getFavorites();

          if (!vars.filters.dictionary.favorite.used) {
            favFiltered = favFiltered.filter(({ favorite }) => !favorite);
          }

          return favFiltered;
        })
        .flat()
    ),
  ];

  return filteredWords;
}

export default function renderDictionary(searchTerm = "") {
  const wordsByPart = getResembledWords(searchTerm);
  const sortedWords = vars.dictionary.getSorted(wordsByPart);

  elements.dictionary.listElement.innerHTML = "";

  const lis = sortedWords.map((word, index) => {
    const li = document.createElement("li");
    li.appendChild(WordComponent(word, index + 1));
    return li;
  });

  lis.forEach((li) => elements.dictionary.listElement.appendChild(li));
  elements.wordsCountEl.innerHTML = sortedWords.length;
}
