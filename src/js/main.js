import { elements, vars } from "./globalVariables.js";

import { initTrainWords, TrainWords } from "./programs/index.js";
import { FilterComponent } from "./components/index.js";
import { renderFilteredWords } from "./utils/filteredWords.js";

export function 

main() {
  // === rendering filters ===
  elements.dictionaryFilters.innerHTML = "";
  elements.trainWordsFiltersElement.innerHTML = "";
  elements.dictionaryFilters.appendChild(FilterComponent(vars.filters.dictionary, () => renderFilteredWords(elements.searchInput.value)));
  elements.trainWordsFiltersElement.appendChild(FilterComponent(vars.filters.trainWords, () => initTrainWords()));

  // === Render dictionary && Render words amount === important so filter is initiated
  renderFilteredWords();

  // === Render practices ===
  TrainWords();
}
