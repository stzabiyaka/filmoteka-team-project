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

    constructor({ notifyer, languageSet, modalHandler }) {
        this.#notifyer = notifyer;
        this.#captions = languageSet.captions;
        this.#modalHandler = modalHandler;
        
    }

    async renderLiblary({ loader, content }) {
        
        this.#libraryTarget.removeEventListener('click', this.#modalCallback);
        const response = await loader(content);
        try {
            const markup = response.results.map(result => {
            return cardParser({ ...result, captions: this.#captions});
        }).join('');
            this.#libraryTarget.innerHTML = markup;
            this.#modalCallback = this.#modalHandler.bind(this);
            this.#libraryTarget.addEventListener('click', this.#modalCallback);
        }
        catch {
            const message = 'technicalFault';
            this.#notifyer.renderNotification({ message: message });
        }
    }

    renderModal(result) {
        const markup = modalCardMarkUp({ ...result, captions: this.#captions });
        this.#modalTarget.innerHTML = markup;
    }


}