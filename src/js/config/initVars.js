import { Dictionary, LocalStorage, ModalWindow } from "../classes";
// Words import
import words_array_en from "../../dictionary/en.json";
import words_array_pl from "../../dictionary/pl.json";

import { parseWords } from "../utils";
import { vars } from "../globalVariables";

// Parsing words
const words = {
  en: parseWords(words_array_en),
  pl: parseWords(words_array_pl),
};

export default function initVars(localStorageName, lang) {
  vars.lang = lang;
  vars.wordsInstance = new Dictionary(words[lang]);
  vars.storage = new LocalStorage(localStorageName);
  vars.wordExtraInfoModal = new ModalWindow('.word-extra-info-modal', '.close-button');
  vars.langs = {
    en: "English",
    pl: "Polish",
  };
  vars.filters = {
    dictionary: {},
    trainWords: {},
  };

  // init favorite words
  vars.wordsInstance.setFavorites(true, ...(vars.storage.getItem() || []));

  // fill vars.elements.dictionary.filters
  vars.wordsInstance.types.forEach((type, index) => {
    for (const key_type in vars.filters) {
      vars.filters[key_type][type] = {
        used: false,
        expression: vars.wordsInstance.types_expression[index],
      };
    }
  });
}
