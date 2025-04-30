const filters = {
  noun: "Noun",
  verb: "Verb",
  adjective: "Adjective",
  adverb: "Adverb",
  verb_phrase: "Verb Phrase",
  phrasal_verb: "Phrasal Verb",
  noun_phrase: "Noun Phrase",
  adjective_phrase: "Adjective Phrase",
  phrase: "Phrase",
  proverb: "Proverb",
  conjunction: "Conjunction",
  adverbial_phrase: "Adverbial phrase",
  favorite: "Favorite",
};

let c = 0;

export default function FilterComponent(filtersObject, callback = () => {}) {
  // <div class="sub-container"></div>
  const div = document.createElement("div");
  div.classList.add("sub-container");

  // <ul class="app-list"></ul>
  const ul = document.createElement("ul");
  ul.classList.add("app-list");

  for (const filter in filters) {
    // <li></li>
    const li = document.createElement("li");
    const id = filter + c;

    // <label for="noun">Noun </label>
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText += filters[filter] + " ";

    // <input type="checkbox" checked id="noun" name="noun">
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = true;
    input.id = id;
    input.name = filter;

    // <label for="noun">Noun <input type="checkbox" checked id="noun" name="noun"></label>
    label.appendChild(input);

    // <li><label for="noun">Noun <input type="checkbox" checked id="noun" name="noun"></label></li>
    li.appendChild(label);

    // <ul class="app-list"><li>...</li><li>...</li>...</ul>
    ul.appendChild(li);
  }

  // <button class="app-button">Toggle All</button>
  const button = document.createElement("button");
  button.classList.add("app-button");
  button.innerText = "Toggle All";

  const inputs = ul.querySelectorAll("input[type='checkbox']");

  inputs.forEach((filterCheck) => {
    filtersObject[filterCheck.name] = filterCheck.checked;
    filterCheck.addEventListener("change", (event) => {
      const type = event.target.name;
      filtersObject[type] = event.target.checked;
      callback();
    });
  });

  let toggle = true;

  button.addEventListener("click", () => {
    inputs.forEach((filterCheck) => {
      filtersObject[filterCheck.name] = !toggle;
      filterCheck.checked = !toggle;
    });
    toggle = !toggle;

    callback();
  });

  // <div class="sub-container"><ul class="app-list">...</ul></div>
  div.appendChild(ul);

  // <div class="sub-container"><ul class="app-list">...</ul><button class="app-button">Toggle All</button></div>
  div.appendChild(button);

  c++;

  return div;
}
