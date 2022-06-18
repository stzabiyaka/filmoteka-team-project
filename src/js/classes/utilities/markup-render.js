import cardParser from "../../modules/card-parser";
import { REFS } from "../../site-constants";
import { renderModalCard } from "../../templates/modal";
import { modalCardMarkUp } from "../../templates/_modal-tmpl";

export default class MarkupRender {
    #cardTemplate = cardParser;
    #modalTemplate = renderModalCard;
    #libraryTarget = REFS.libraryContainer;
    #modalTarget = REFS.modalContainer;
    #notifyer;
    #captions;
    #modalHandler;
    #modalCallback;

    constructor({ notifyer, languageSet }) {
        this.#notifyer = notifyer;
        this.#captions = languageSet.captions;        
    }

    setModalHandler({ modalHandler }) {
        this.#modalHandler = modalHandler;
    }

    async renderLiblary({ loader, content }) {
        
        if (this.#modalCallback) {
            this.#libraryTarget.removeEventListener('click', this.#modalCallback);
        }
        const response = await loader(content);
        try {
            const markup = response.results.map(result => {
            return cardParser({ ...result, captions: this.#captions});
        }).join('');
            this.#libraryTarget.innerHTML = markup;
            this.#modalCallback = this.#modalHandler.modalOpen.bind(this.#modalHandler);
            this.#libraryTarget.addEventListener('click', this.#modalCallback);
            return true;
        }
        catch {
            const message = 'technicalFault';
            this.#notifyer.renderNotification({ message: message });
        }
    }

    async renderModal({ loader, content }) {
        const response = await loader(content);
        try {
            const markup = modalCardMarkUp({ ...response, captions: this.#captions });
            this.#modalTarget.innerHTML = markup;
            return true;
        }
        catch {
           
            const message = this.#captions.notifications.technicalFault;
            this.#modalTarget.innerHTML = `<p class="modal__notification">${message}</p>`
        }
            
    }


}