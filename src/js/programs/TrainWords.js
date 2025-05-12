import { getFavoriteWordsFrom, throttle } from "../utils";
import { elements, vars } from "../vars";
import { WordComponent } from "../components";

let filteredWords = [];
let currentWordIndex;
let inputValue, currentWord;

function foo(word) {
  elements.trainWordRandomWordElement.innerHTML = "";
  elements.trainWordRandomWordElement.appendChild(WordComponent(word));
}

export function initTrainWords() {
  filteredWords = getFavoriteWordsFrom(
    vars.wordsInstance.getWordsByTypes(vars.trainWordsFilters),
    vars.trainWordsFilters
  );

  currentWordIndex = 0;

  if (filteredWords.length > 0) {
    filteredWords.sort(() => 0.5 - Math.random());

    currentWord = filteredWords[currentWordIndex].translation.toLowerCase();

    elements.trainWordAllWordsElement.innerHTML = filteredWords.length;
    elements.trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;

    foo(filteredWords[currentWordIndex]);
  } else {
    elements.trainWordAllWordsElement.innerHTML = 0;
    elements.trainWordCurrentIndexElement.innerHTML = 0;
    elements.trainWordRandomWordElement.innerHTML = "No words found";
  }
}

export function getNextWord() {
  currentWordIndex = (currentWordIndex + 1) % filteredWords.length;
  elements.trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;
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
