import { REFS, USER_COLLECTIONS } from "../../site-constants";

export default class ModalHandler {
    #apiService;
    #markupRender;
    #captions;
    #collectionsService;
    #articleID;
    constructor ({ apiService, markupRender, languageSet, collectionsService }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
        this.#captions = languageSet.captions;
        this.#collectionsService = collectionsService;
    }

    modalOpen(evt) {
        if(evt.target.nodeName !== 'IMG' && evt.target.nodeName !== 'H2' && evt.target.nodeName !== 'SPAN' && evt.target.nodeName !== 'P' && evt.target.nodeName !== 'A') {
    return;
        }        
        const selectedElements = evt.path;        
        
        
        selectedElements.forEach(el => {
            if (el.className === 'movie-card') {
                this.#articleID = el.getAttribute('data-movie-id');
                return this.#articleID;
            }
        });
        REFS.backdrop.classList.remove('js-hidden');
        REFS.body.classList.add('js-modal-is-open');
        REFS.backdrop.addEventListener('click', onClickBackdrop);
        window.addEventListener('keydown', onCloseEscKey);
        try {
            const result = this.getMovieById({ movieId: this.#articleID });
            this.markupRender.renderModal(result);
            this.#checkBtnState({ collection: USER_COLLECTIONS.watched, btnTarget: 'addToWatched' });
            this.#checkBtnState({ collection: USER_COLLECTIONS.queue, btnTarget: 'addToQueue' });
            REFS.modalCardThumbBtn.classList.remove('js-hidden');
            REFS.modalAddToWatchedBtn.addEventListener('click', this.#onAddToWatchedBtnClick.bind(this));
            REFS.modalAddToQueueBtn.addEventListener('click', this.#onAddToQueueBtnClick.bind(this));
            if (result.homepage) {
                REFS.modalOpenMovie.classList.remove('js-hidden');
                REFS.modalOpenMovie.addEventListener('click', this.#onOpenMovieClick.bind(this));
            }
        } catch (error) {
            // sorry ...
            const notification = this.#captions.notifications.technicalFault;
            
        }
    }
    

    async getMovieById ({ movieId }) {
        return  await this.#apiService.getMovie.bind(this.#apiService, { movieId: movieId });
        // this.#markupRender.renderModal({ loader: loader });

    }

    #onOpenMovieClick(evt) {
        evt.preventDefault();
        // очищаємо вміст в модалці і включаємо фільм
        console.log('відкриваємо фільм');
}

    #onAddToWatchedBtnClick(evt) {
        
        if (REFS.modalAddToWatchedBtn.textContent === this.#captions.buttons.addToWatched.add) {
            this.#collectionsService.addToCollection({ collection: USER_COLLECTIONS.watched, id: this.#articleID });     
            return;
        }
        this.#collectionsService.removeFromCollection({ collection: USER_COLLECTIONS.watched, id: this.#articleID });
                
    }

    #onAddToQueueBtnClick(evt) {
     // зробити перевірку, якщо вже є, то змінити текст, видалити і знов змінити текст
    //якщо ні, то спочатку додати, потім змінити текст 
    console.log("we need to change btn ADD TO QUEUE text container");
        // REFS.modalAddToQueueBtn.textContent = CAPTIONS[currentLanguage].buttons.;
    }

    #checkBtnState({ collection, btnTarget }) {
        if (this.#collectionsService.isInCollection({ collection: collection, id: this.#articleID })) {
            REFS.modalAddToWatchedBtn.textContent = this.#captions.buttons[btnTarget].remove;
            return;
        }
        REFS.modalAddToWatchedBtn.textContent = this.#captions.buttons[btnTarget].add;
    }
}