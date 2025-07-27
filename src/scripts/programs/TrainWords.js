import { throttle } from "../utils";
import { elements, vars } from "../globalVariables";
import { Word } from "../components";

let filteredWords = [];
let currentWordIndex;
let inputValue, currentWord;

async function foo(word) {
  elements.trainWords.randomWordElement.innerHTML = "";
  elements.trainWords.randomWordElement.appendChild(await Word(word));
}

export function initTrainWords() {
  const typedWords = vars.dictionary.getWordsByTypes(
    vars.dictionary.d,
    ...Object.keys(vars.filters.trainWords).map(
      (key) => vars.filters.trainWords[key] && `${key}`
    )
  );

  filteredWords =
    typedWords.length !== 0 ? typedWords : vars.dictionary.getFavorites();

  if (!vars.filters.dictionary.favorite) {
    filteredWords = filteredWords.filter(({ favorite }) => !favorite);
  }

  currentWordIndex = 0;

  if (filteredWords.length > 0) {
    filteredWords.sort(() => 0.5 - Math.random());

    currentWord = filteredWords[currentWordIndex].translation.toLowerCase();

    elements.trainWords.wordsElement.innerHTML = filteredWords.length;
    elements.trainWords.currentIndexElement.innerHTML = currentWordIndex + 1;

    foo(filteredWords[currentWordIndex]);
  } else {
    elements.trainWords.wordsElement.innerHTML = 0;
    elements.trainWords.currentIndexElement.innerHTML = 0;
    elements.trainWords.randomWordElement.innerHTML = "No words found";
  }
}

export function getNextWord() {
  currentWordIndex = (currentWordIndex + 1) % filteredWords.length;
  elements.trainWords.currentIndexElement.innerHTML = currentWordIndex + 1;
  return filteredWords[currentWordIndex];
}

export function TrainWords() {
  const trainWordForm = document.querySelector(".train-word-form");
  const trainWordInput = document.querySelector(".train-word-input");

  initTrainWords();

  trainWordInput.addEventListener(
    "input",
    throttle(() => {
      inputValue = trainWordInput.value.trim().toLowerCase();

      if (currentWord === inputValue) {
        trainWordInput.style.border = "2px solid green";
      } else {
        trainWordInput.style.border = "2px solid red";
      }
    }, 50)
  );

  trainWordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputValue === currentWord) {
      foo(getNextWord());

      trainWordInput.style.border = "2px solid";
      trainWordInput.value = "";
      currentWord = filteredWords[currentWordIndex].translation.toLowerCase();
    }
  });
}
