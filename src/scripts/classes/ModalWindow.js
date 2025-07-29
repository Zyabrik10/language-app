export default class ModalWindow {
  constructor(modalId) {
    this.modalId = modalId;
    this.mw = document.getElementById(this.modalId);

    if (!this.mw)
      throw new Error(`No ${this.modalId} element was found`);
  }

  init() {
    // close modal by clicking on empty space
    this.mw.addEventListener("mousedown", ({ target, currentTarget }) => {
      if (target === currentTarget) this.hideModalWindow();
    });

    this.mw.addEventListener("click", ({ target }) => {
      if (target.dataset.role === 'close') this.hideModalWindow();
    });

    this.hideModalWindowOnEscapeEnv = this.hideModalWindowOnEscape.bind(this);

    // open modal by clicking on buttons
    this.openModalWindowButtons = document.querySelectorAll(
      `button[data-modal-id="${this.modalId}"]`
    );

    this.openModalWindowButtons.forEach((button) => {
      button.addEventListener("click", this.showModalWindow.bind(this));
    });

    return this;
  }

  hideModalWindow(callback) {
    this.mw.classList.remove("active");
    window.removeEventListener("keydown", this.hideModalWindowOnEscapeEnv);
    document.documentElement.style.overflow = "auto";
    if (typeof callback === 'function') callback();
  }

  hideModalWindowOnEscape({ key }) {
    if (key !== "Escape") return;
    this.hideModalWindow();
  }

  showModalWindow(callback) {
    this.mw.classList.add("active");
    window.addEventListener("keydown", this.hideModalWindowOnEscapeEnv);
    document.documentElement.style.overflow = "hidden";
    if (typeof callback === 'function') callback();
  }
}
