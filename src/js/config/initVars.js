import { Dictionary, LocalStorage, ModalWindow } from "../classes";
// Words import
// import words_array_en from "../../dictionary/en.json";
// import words_array_pl from "../../dictionary/pl.json";

// import { parseWords } from "../utils";
import { vars } from "../globalVariables";
import { addNewWord, getAllWords } from "../firebase";

// Parsing words
// const words = {
//   en: parseWords(words_array_en),
//   pl: parseWords(words_array_pl),
// };

// words.pl.forEach((word)=>{
//   addNewWord('pl', {...word, favorite: false});
// })
export default async function initVars(localStorageName, lang) {
  // const words = [];
  const words = await getAllWords(lang);
  vars.storage = new LocalStorage(localStorageName);
  vars.dictionary = new Dictionary(words);
  vars.lang = lang;
  vars.wordExtraInfoModal = new ModalWindow('.word-extra-info-modal', '.close-button');
  vars.deleteAllWordsWarningModal = new ModalWindow('.delete-all-words-warning-modal', '.close-button');
  vars.addNewWordModal = new ModalWindow('.add-word-modal', '.close-button');
  vars.langs = {
    en: "English",
    pl: "Polish",
  };
  vars.filters = {
    dictionary: {},
    trainWords: {},
  };

  // init favorite words
  vars.dictionary.setFavorites(true, ...(vars.storage.getItem() || []));

  // fill vars.elements.dictionary.filters
  vars.dictionary.types.forEach((type, index) => {
    for (const key_type in vars.filters) {
      vars.filters[key_type][type] = {
        used: false,
        expression: vars.dictionary.types_expression[index],
      };
    }
  });
}
