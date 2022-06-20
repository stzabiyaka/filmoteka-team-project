import { REFS } from "../../site-constants";

export default class Notifyer {
    #renderTarget;
    #modalTarget;
    #timeOut = 500;
    #languageSet;
    #notifications;
    #isRun;
    #notifyerType = {
        language: 'language',
        warning: 'warning',
    }
    constructor({ renderTarget, modalTarget, timeOut, languageSet }) {
        this.#renderTarget = renderTarget;
        this.#modalTarget = modalTarget;
        this.#timeOut = timeOut ? timeOut : this.#timeOut;
        this.#languageSet = languageSet
        this.#notifications = languageSet.captions.notifications;
    }

    showNotification ({ message, type = 'warning' }) {
        if (!message || !Object.keys(this.#notifyerType).includes(type) || this.#isRun) {
            return;
        }
        this.#notifications = this.#languageSet.captions.notifications;

        REFS.notifyerDisplay.textContent = message;
        REFS.notifyerDisplay.classList.add(this.#notifyerType[type]);
        REFS.notifyerDisplay.classList.remove('js-hidden');
        this.#isRun = true;
        
        setTimeout(() => {
            REFS.notifyerDisplay.classList.add('js-hidden');
            REFS.notifyerDisplay.classList.remove(this.#notifyerType[type]);
            REFS.notifyerDisplay.textContent = '';
            this.#isRun =false;
          }, this.#timeOut);
    }

    renderNotification ({ message, target }) {
        if (!message) {
            return;
        }
        this.#notifications = this.#languageSet.captions.notifications;
        let messageContainer;
        messageContainer = target ? this.#modalTarget : this.#renderTarget;
        messageContainer.innerHTML = `<p class="notifyer__message">${this.#notifications[message]}</p>`;
    }
}