export default class Notifyer {
    #renderTarget;
    #modalTarget;
    #notifyerDisplay;
    #timeOut = 500;
    #notifications;
    #notifyerType = {
        language: 'language',
        warning: 'warning',
    }
    constructor({ renderTarget, modalTarget, timeOut, languageSet }) {
        this.#renderTarget = renderTarget;
        this.#modalTarget = modalTarget;
        this.#timeOut = timeOut ? timeOut : this.#timeOut;
        document.body.insertAdjacentHTML('beforeend', '<div id="notifier-display" class="notifier-display js-hidden"></div>');
        this.#notifyerDisplay = document.querySelector('#notifier-display');
        this.#notifications = languageSet.captions.notifications;
    }

    showNotification ({ message, type = 'warning' }) {
        if (!message || !Object.keys(this.#notifyerType).includes(type)) {
            return;
        }

        this.#notifyerDisplay.innerHTML = message;
        this.#notifyerDisplay.classList.add(this.#notifyerType[type]);
        this.#notifyerDisplay.classList.remove('js-hidden');
        
        setTimeout(() => {     
            this.#notifyerDisplay.innerHTML = '';
            this.#notifyerDisplay.classList.add('js-hidden');
            this.#notifyerDisplay.classList.remove(this.#notifyerType[type]);
          }, this.#timeOut);
    }

    renderNotification ({ message, target }) {
        if (!message) {
            return;
        }
        let messageContainer;
        messageContainer = target ? this.#modalTarget : this.#renderTarget;
        messageContainer.innerHTML = `<p class="notifyer__message">${this.#notifications[message]}</p>`;
    }
}