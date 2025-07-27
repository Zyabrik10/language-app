import { elements } from "../globalVariables";
import { localStorageGetItem } from "../utils/localStorage";

import initElements from "./initElements";
import initVars from "./initVars";
import setEvents from "./setEvents";

export async function config() {
  initElements();

  // pre init pref-language
  const lang = localStorageGetItem("pref-lang", 'en');

  elements.langSwitchers.forEach((e) => {
    if (e.dataset.lang !== lang) return;
    e.checked = true;
  });

  // /pre init pref-language
  await initVars(
    `favorite${lang[0].toUpperCase() + lang.split("").splice(1).join("")}Words`,
    lang
  );
  setEvents();
}