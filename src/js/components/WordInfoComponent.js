export default function WordInfoComponent({
  id,
  expression,
  type,
  translation,
  description,
}) {
  return `
        <h2 class="modal-title">
          <span class="modal-word">${expression}</span>
          <span class="modal-info"><span class="${type} type">${type}</span> <sup>${id}</sup></span>
        </h2>
        <hr />
        <div style="font-size: 1.1rem;">
          <p style="margin-bottom: 10px;">${translation}</p>
          <p>${description}</p=>
        </div>
        <p style="margin-top: 20px;" class="modal-gen-text"></p>
        <button style="margin-top: 20px;" class="app-button modal-button-ai-gen">Give me examples</button>`;
}
