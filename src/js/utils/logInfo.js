import { vars } from "../vars";

export default function logInfo() {
  const { wordsInstance } = vars;

  const randomWord = wordsInstance.getRandomWord();
  console.log(`Random Word: ${randomWord.expression}`);
  console.log(`Total Words: ${wordsInstance.getWordCount()}`);
  wordsInstance.sortWords();
  console.log(
    `Sorted Words: ${wordsInstance
      .getWordsByType()
      .map((word) => word.expression)
      .join(", ")}`
  );
  console.log(
    `Verbs: ${wordsInstance
      .getWordsByType("verb")
      .map((word) => word.expression)
      .join(", ")}`
  );
  console.log(
    `Nouns: ${wordsInstance
      .getWordsByType("noun")
      .map((word) => word.expression)
      .join(", ")}`
  );
}