import { elements } from "../globalVariables";
import { localStorageGetItem } from "../utils";

import initElements from "./initElements.config";
import initVars from "./initVars.config";
import setEvents from "./setEvents.config";

export async function config() {
  initElements();

  // pre init pref-language
  const lang = localStorageGetItem("pref-lang", 'en');

  elements.langSwitchers.forEach((e) => {
    if (e.dataset.lang !== lang) return;
    e.checked = true;
  });

  // /pre init pref-language
  await initVars(`favorite-${lang}-words`, lang);
  setEvents();
}