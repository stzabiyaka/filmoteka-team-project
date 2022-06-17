export default class Notifyer {
    #renderTarget;
    #notifyerDisplay;
    #timeOut = 500;
    #notifyerType = {
        language: 'language',
        warning: 'warning',
    }
    constructor({ renderTarget, timeOut }) {
        this.#renderTarget = renderTarget;
        this.#timeOut = timeOut ? timeOut : this.#timeOut;
        document.body.insertAdjacentHTML('beforeend', '<div id="notifier-display" class="notifier-display js-hidden"></div>');
        this.#notifyerDisplay = document.querySelector('#notifier-display');
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

    renderNotification ({ message }) {
        if (!message) {
            return;
        }

        this.#renderTarget.innerHtml = `<p class="notifyer__message">${message}</p>`;
    }
}