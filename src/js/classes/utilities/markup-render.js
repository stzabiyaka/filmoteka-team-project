import cardParser from "../../modules/card-parser";
import { REFS } from "../../site-constants";
import { renderModalCard } from "../../templates/modal";

export default class MarkupRender {
    #cardTemplate = cardParser;
    #modalTemplate = renderModalCard;
    #libraryTarget = REFS.libraryContainer;
    #modalTarget = REFS.modalContainer;
    #notifyer;
    #captions;

    constructor({ notifyer, languageSet }) {
        this.#notifyer = notifyer;
        this.#captions = languageSet.captions;
    }

    async renderLiblary ( { loader, content } ) {
        this.#libraryTarget.removeEventListener('click', renderModalCard);
        const response = await loader(content);
        try {
            const markup = response.results.map(result => {
            return cardParser({ ...result, captions: this.#captions});
        }).join('');
        this.#libraryTarget.innerHTML = markup;
        this.#libraryTarget.addEventListener('click', renderModalCard);
        }
        catch {
            const message = 'technicalFault';
            this.#notifyer.renderNotification({ message: message });
        }
    }

    renderModal () {

    }
}