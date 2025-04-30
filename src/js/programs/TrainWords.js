import { getFavoriteWordsFrom, throttle } from "../utils";
import { elements, vars } from "../vars";
import { WordComponent } from "../components";

const { wordsInstance, trainWordsFilters } = vars;
const {
  trainWordAllWordsElement,
  trainWordCurrentIndexElement,
  trainWordRandomWordElement,
} = elements;

let filteredWords = [];
let currentWordIndex;
let inputValue, currentWord;

function foo(word) {
  trainWordRandomWordElement.innerHTML = "";
  trainWordRandomWordElement.appendChild(WordComponent(word));
}

export function initTrainWords() {
  filteredWords = getFavoriteWordsFrom(
    wordsInstance.getWordsByTypes(trainWordsFilters),
    trainWordsFilters
  );

  currentWordIndex = 0;

  if (filteredWords.length > 0) {
    filteredWords.sort(() => 0.5 - Math.random());

    currentWord = filteredWords[currentWordIndex].translation.toLowerCase();

    trainWordAllWordsElement.innerHTML = filteredWords.length;
    trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;

    foo(filteredWords[currentWordIndex]);
  } else {
    trainWordAllWordsElement.innerHTML = 0;
    trainWordCurrentIndexElement.innerHTML = 0;
    trainWordRandomWordElement.innerHTML = "No words found";
  }
}

export function getNextWord() {
  currentWordIndex = (currentWordIndex + 1) % filteredWords.length;
  trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;
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
