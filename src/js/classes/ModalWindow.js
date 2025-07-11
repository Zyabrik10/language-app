export default class ModalWindow {
    constructor(modalWindowSelector, closeModalWindowButtonSelector) {
        this.mw = document.querySelector(modalWindowSelector);

        if (!this.mw) throw new Error(`No ${modalWindowSelector} element was found`);

        this.closeModalWindowButton = this.mw.querySelector(closeModalWindowButtonSelector);

        if (!this.closeModalWindowButton) throw new Error(`No ${closeModalWindowButtonSelector} element was found`);

        this.closeModalWindowButton.addEventListener('click', this.hideModalWindow.bind(this, ()=>{}));

        if (!this.mw.querySelector('.content')) throw new Error(`No .content inside modal was found`);

        this.mw.addEventListener('mousedown', ({ target, currentTarget }) => {
            if (target !== currentTarget) return;

            this.hideModalWindow();
        });

        this.hideModalWindowOnEscapeEnv = this.hideModalWindowOnEscape.bind(this);

    }
3
    hideModalWindow(callback = () => { }) {
        this.mw.classList.remove('active');
        window.removeEventListener('keydown', this.hideModalWindowOnEscapeEnv);
        document.documentElement.style.overflow = 'auto';
        callback();
    }

    hideModalWindowOnEscape({ key }) {
        if (key !== 'Escape') return;

        this.hideModalWindow();
    }

    showModalWindow(callback = () => { }) {
        this.mw.classList.add('active');

        window.addEventListener('keydown', this.hideModalWindowOnEscapeEnv);

        document.documentElement.style.overflow = 'hidden';

        callback();
    }
}