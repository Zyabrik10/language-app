import { initElements, initVars, onAllInits, setEvents } from "./inits.js";
import { elements } from "./vars.js";

window.addEventListener("load", function actionRightAfterPageIsLoad() {
  initElements();
  const lang = Array.from(elements.langSwitchers).filter((e) => e.checked)[0]
    .dataset.lang;
  initVars(
    `favorite${lang[0].toUpperCase() + lang.split("").splice(1).join("")}Words`,
    lang
  );
  setEvents();
  onAllInits();
});
