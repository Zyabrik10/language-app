import { initElements, initVars, onAllInits, setEvents } from "./inits.js";
import { elements } from "./vars.js";

window.addEventListener("load", function actionRightAfterPageIsLoad() {
  initElements();
  const lang = Array.from(elements.langSwitchers).filter((e) => e.checked)[0]
    .dataset.lang;
  initVars("favoriteEnWords", lang);
  setEvents();
  onAllInits();
});
