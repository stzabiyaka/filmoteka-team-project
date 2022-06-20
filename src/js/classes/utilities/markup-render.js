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
    #languageSet;
    #captions;
    #modalHandler;
    #modalCallback;

    constructor({ notifyer, languageSet }) {
        this.#notifyer = notifyer;
        this.#languageSet = languageSet;        
    }

    setModalHandler({ modalHandler }) {
        this.#modalHandler = modalHandler;
    }

    async renderLiblary({ loader, content }) {
        
        this.#captions = this.#languageSet.captions;
        
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
            return { totalResults: response.total_results };
        }
        catch {
            const message = 'technicalFault';
            this.#notifyer.renderNotification({ message: message });
        }
    }

    async renderModal({ loader, content }) {

        this.#captions = this.#languageSet.captions;

        const response = await loader(content);
        try {
            const markup = modalCardMarkUp({ ...response, captions: this.#captions });
            this.#modalTarget.innerHTML = markup;
            return true;
        }
        catch {
           
            const message = 'technicalFault';
            this.#notifyer.renderNotification({ message: message, tsget: 'modal' });
        }
            
    }

}