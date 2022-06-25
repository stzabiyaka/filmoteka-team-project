import cardParser from "../../templates/card-parser";
import { REFS } from "../../site-constants";
import { modalCardMarkUp } from "../../templates/_modal-tmpl";
import { modalMovieMarkUp } from "../../templates/modal-movie";

export default class MarkupRender {
    #cardTemplate = cardParser;
    #libraryTarget = REFS.libraryContainer;
    #modalTarget = REFS.modalContainer;
    #movieTarget;
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

/* Рендеринг розмітки сторінки із картками фильмів */ 
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

/* Рндеринг сторінки із подробицями фільму у модальному вікні */ 
    async renderModal({ loader, content }) {

        this.#captions = this.#languageSet.captions;

        const response = await loader(content);
        try {
            REFS.modalOpenMovie.classList.remove('js-hidden');
            const markup = modalCardMarkUp({ ...response, captions: this.#captions });
            this.#modalTarget.innerHTML = markup;
            return true;
        }
        catch {
           
            const message = 'technicalFault';
            this.#notifyer.renderNotification({ message: message, tsget: 'modal' });
        }
    }

/* Рендеринг відео трейлеру фільму у модальному вікні */ 
    async renderMovie({ loader, content }) {

        this.#captions = this.#languageSet.captions;

        this.#movieTarget = REFS.modalContainer.firstElementChild.firstElementChild;
        let markup;
        
        try {
            const response = await loader(content);
            markup = modalMovieMarkUp({ ...response, captions: this.#captions });
            if(!markup) {
                markup = `<div class="notifyer__message">${this.#captions.notifications.videoUnavailable}</div>`;
            }
            this.#movieTarget.innerHTML = markup;
            return markup;
            } 
        catch {
           
            const message = 'technicalFault';
            this.#notifyer.renderNotification({ message: message, target: 'modal' });
        }
            
    }
}