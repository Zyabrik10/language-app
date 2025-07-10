import { elements } from "../globalVariables";

import initElements from "./initElements";
import initVars from "./initVars";
import setEvents from "./setEvents";

export function config() {
  initElements();
  const lang = Array.from(elements.langSwitchers).filter((e) => e.checked)[0]
    .dataset.lang;
  initVars(
    `favorite${lang[0].toUpperCase() + lang.split("").splice(1).join("")}Words`,
    lang
  );
  setEvents();
}
