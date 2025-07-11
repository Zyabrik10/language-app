import { elements, vars } from "./globalVariables.js";

import { initTrainWords, TrainWords } from "./programs/index.js";
import { Filter } from "./components/index.js";
import { renderDictionary } from "./utils";

export function 

main() {
  // === rendering filters ===
  elements.dictionary.filters.innerHTML = "";
   elements.trainWords.filtersElement.innerHTML = "";
  elements.dictionary.filters.appendChild(Filter(vars.filters.dictionary, () => renderDictionary(elements.dictionary.searchInput.value)));
   elements.trainWords.filtersElement.appendChild(Filter(vars.filters.trainWords, () => initTrainWords()));

  // === Render dictionary && Render words amount === important so filter is initiated
  renderDictionary();

  // === Render practices ===
  TrainWords();
}
