let c = 0;

/* 
<div class="sub-container">
  <button>Filers</button>
  <div class="filter-list-des-box">
    <div>
      <ul class="app-list">
        <li>
          <label class="noun" for="noun2">Rzeczownik <input type="checkbox" id="noun2" name="noun">
            Rzeczownik
            <input type="checkbox" id="noun2" name="noun">
        </label>
      </li>
      </ul>
      <button class="app-button">Toggle All</button>
    </div>
  </div>
</div>
*/

export default function FilterComponent(filters, callback = () => {}) {
  // <div class="sub-container"></div>
  const container = document.createElement("div");
  container.classList.add("sub-container");

  // <button>Open Filers</button>
  const filtersOpenCloseButton = document.createElement("button");
  filtersOpenCloseButton.classList.add("filter-open-close-button");
  filtersOpenCloseButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="var(--color-2)"
      height="15px"
      width="15px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
      xml:space="preserve"
    >
      <path
        id="XMLID_224_"
        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      />
    </svg>Filters`;

  // <div class="filter-list-des-box"></div>
  const filterListDesBox = document.createElement("div");
  filterListDesBox.classList.add("filter-list-des-box");
  filterListDesBox.classList.add("hidden");

  // <div></div>
  const decor_div = document.createElement("div");
  decor_div.classList.add("sub-container");

  // <ul class="app-list"></ul>
  const ul = document.createElement("ul");
  ul.classList.add("app-list");
  ul.classList.add("flex-container");
  ul.classList.add("filter-list");

  for (const filterKey in filters) {
    // <li></li>
    const li = document.createElement("li");
    const id = filterKey + c;

    // <label for="noun">Noun </label>
    const label = document.createElement("label");
    label.classList.add(filterKey);
    label.classList.add('app-button');
    label.setAttribute("for", id);
    label.innerText += filters[filterKey].expression + " ";

    // <input type="checkbox" checked id="noun" name="noun">
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = true;
    input.id = id;
    input.name = filterKey;

    // <li><label for="noun">Noun <input type="checkbox" checked id="noun" name="noun"></label></li>
    li.appendChild(input);
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
    const type = filterCheck.name;
    filters[type].used = filterCheck.checked;

    filterCheck.addEventListener("change", (event) => {
      const type = event.target.name;
      filters[type].used = event.target.checked;

      callback();
    });
  });

  let toggle = true;

  button.addEventListener("click", () => {
    inputs.forEach((filterCheck) => {
      const type = filterCheck.name;
      filters[type].used = !toggle;

      filterCheck.checked = !toggle;
    });
    toggle = !toggle;

    callback();
  });

  filtersOpenCloseButton.addEventListener("click", () => {
    filterListDesBox.classList.toggle("hidden");
    filtersOpenCloseButton.classList.toggle("active");
  });

  // <div class="sub-container"><button>Open Filers</button></div>
  container.appendChild(filtersOpenCloseButton);

  // <div class="sub-container"><button>Open Filers</button></div>
  container.appendChild(filterListDesBox);

  // <div class="sub-container">...<ul class="app-list">...</ul></div>
  decor_div.appendChild(ul);

  // <div class="sub-container"><ul class="app-list">...</ul><button class="app-button">Toggle All</button></div>
  decor_div.appendChild(button);

  filterListDesBox.appendChild(decor_div);

  c++;

  return container;
}
