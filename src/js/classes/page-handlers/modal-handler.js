import { REFS, USER_COLLECTIONS } from "../../site-constants";

export default class ModalHandler {
    #apiService;
    #markupRender;
    #captions;
    #collectionsService;
    #articleID;
    #closeBtnCallback;
    #escBtnCallback;
    #movieBtnCallback;
    #addToQueueCallback;
    #addToWatchedCallback;
    #languageSet;
    #notifyer;
    
    constructor ({ apiService, markupRender, languageSet, collectionsService, notifyer }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
        this.#languageSet = languageSet;
        this.#notifyer = notifyer;
        this.#collectionsService = collectionsService;
        this.#markupRender.setModalHandler({ modalHandler: this });
    }

    async modalOpen(evt) {
        if(evt.target === evt.currentTarget) {
    return;
        }
        this.#captions = this.#languageSet.captions;        
        const selectedElements = evt.path;        
        
        
        selectedElements.forEach(el => {
            if (el.className === 'movie-card') {
                this.#articleID = Number(el.getAttribute('data-movie-id'));
                return this.#articleID;
            }
        });
        REFS.backdrop.classList.remove('js-hidden');
        REFS.body.classList.add('js-modal-is-open');

        this.#closeBtnCallback = this.#onClickBackdrop.bind(this);
        this.#escBtnCallback = this.#onCloseEscKey.bind(this);
        this.#movieBtnCallback = this.#onMovieClick.bind(this);
        this.#addToWatchedCallback = this.#onAddToWatchedBtnClick.bind(this);
        this.#addToQueueCallback = this.#onAddToQueueBtnClick.bind(this);
                
        REFS.backdrop.addEventListener('click', this.#closeBtnCallback);
        window.addEventListener('keydown', this.#escBtnCallback);

        const loader = this.#apiService.getMovie.bind(this.#apiService);
        const content = { movieId: this.#articleID };
        
        const result = this.#markupRender.renderModal({ loader: loader, content: content });
        
        result.then(result => {
            if (result) {
            this.#checkBtnState({ button: 'modalAddToWatchedBtn', collection: USER_COLLECTIONS.watched, btnTarget: 'addToWatched' });
            this.#checkBtnState({ button: 'modalAddToQueueBtn', collection: USER_COLLECTIONS.queue, btnTarget: 'addToQueue' });
            REFS.modalCardThumbBtn.classList.remove('js-hidden');
            REFS.modalAddToWatchedBtn.addEventListener('click', this.#addToWatchedCallback);
            REFS.modalAddToQueueBtn.addEventListener('click', this.#addToQueueCallback);
            REFS.modalOpenMovie.classList.remove('js-hidden');
            REFS.modalOpenMovie.addEventListener('click', this.#movieBtnCallback);            
        }
        }).catch(error=>console.log(error));
        
    }
    

    #onAddToWatchedBtnClick(evt) {
        
        if (REFS.modalAddToWatchedBtn.textContent === this.#captions.buttons.addToWatched.add) {
            this.#collectionsService.addToCollection({ collection: USER_COLLECTIONS.watched, id: this.#articleID });
            this.#checkBtnState({ button: 'modalAddToWatchedBtn', collection: USER_COLLECTIONS.watched, btnTarget: 'addToWatched' });
            this.#refreshCollectionPage({ collection: USER_COLLECTIONS.watched, target: evt.currentTarget });
            return;
        }
        this.#collectionsService.removeFromCollection({ collection: USER_COLLECTIONS.watched, id: this.#articleID });
        this.#checkBtnState({ button: 'modalAddToWatchedBtn', collection: USER_COLLECTIONS.watched, btnTarget: 'addToWatched' });
        this.#refreshCollectionPage({ collection: USER_COLLECTIONS.watched, target: evt.currentTarget });
    }

    #onAddToQueueBtnClick(evt) {
        if (REFS.modalAddToQueueBtn.textContent === this.#captions.buttons.addToQueue.add) {
            this.#collectionsService.addToCollection({ collection: USER_COLLECTIONS.queue, id: this.#articleID });
            this.#checkBtnState({ button: 'modalAddToQueueBtn', collection: USER_COLLECTIONS.queue, btnTarget: 'addToQueue' });
            this.#refreshCollectionPage({ collection: USER_COLLECTIONS.queue, target: evt.currentTarget });
            return;
        }
        this.#collectionsService.removeFromCollection({ collection: USER_COLLECTIONS.queue, id: this.#articleID });
        this.#checkBtnState({ button: 'modalAddToQueueBtn', collection: USER_COLLECTIONS.queue, btnTarget: 'addToQueue' });
        this.#refreshCollectionPage({ collection: USER_COLLECTIONS.queue, target: evt.currentTarget });
    }

    #checkBtnState({ button, collection, btnTarget }) {
        if (this.#collectionsService.isInCollection({ collection: collection, id: this.#articleID })) {
            REFS[button].textContent = this.#captions.buttons[btnTarget].remove;
            return;
        }
        REFS[button].textContent = this.#captions.buttons[btnTarget].add;
    }

    #onClickBackdrop(evt) {
        if (
            evt.target === evt.currentTarget ||
            evt.target.parentElement === REFS.modalCloseBtn ||
            evt.target.parentElement.parentElement === REFS.modalCloseBtn ||
            evt.target === REFS.modalCloseBtn
        ) {
            this.#closeModal();
        }
        }

    #onCloseEscKey(evt) {
        if (evt.key === 'Escape') {
            this.#closeModal();
        }
    }

    #closeModal() {
        REFS.backdrop.classList.add('js-hidden');
        // REFS.modalContainer.innerHTML = '';
        REFS.body.classList.remove('js-modal-is-open');        
        REFS.modalOpenMovie.classList.add('js-hidden');
        REFS.modalContainer.parentElement.classList.remove('js-video-open');
        REFS.backdrop.removeEventListener('click', this.#closeBtnCallback);
        window.removeEventListener('keydown', this.#escBtnCallback);        
        REFS.modalOpenMovie.removeEventListener('click', this.#movieBtnCallback);
        this.#hiddeBtnsThumb();
    }

    #onMovieClick(evt) {
        evt.preventDefault();
    
        this.#hiddeBtnsThumb();
        REFS.modalOpenMovie.classList.add('js-hidden');
        REFS.modalOpenMovie.removeEventListener('click', this.#movieBtnCallback);
        
        const loader = this.#apiService.getVideo.bind(this.#apiService);
        const content = { movieId: this.#articleID };
        
        const result = this.#markupRender.renderMovie({ loader: loader, content: content });
        
        result.then(result => {
            if (result) {
                REFS.modalContainer.parentElement.classList.add('js-video-open');
        }
        }).catch(error=>console.log(error));

    }
    
    #hiddeBtnsThumb() {
        REFS.modalCardThumbBtn.classList.add('js-hidden');
        REFS.modalAddToWatchedBtn.removeEventListener('click', this.#addToWatchedCallback);
        REFS.modalAddToQueueBtn.removeEventListener('click', this.#addToQueueCallback);
    }

    async #refreshCollectionPage({ collection, target }) {
        this.#collectionsService.load();
        const bundle = this.#collectionsService.getCollectionIdsBundle({ collection });
        const loader = this.#apiService.getMoviesBundle.bind(this.#apiService);
        
        if (!REFS.headerMyLibBtn.disabled) { return }
        
        if (
            REFS.collectionWatchedBtn.disabled &&
            target === REFS.modalAddToWatchedBtn
        ) {
            await this.#markupRender.renderLiblary({ loader: loader, content: bundle });
            return;
        }

        if (
            REFS.collectionQueueBtn.disabled &&
            target === REFS.modalAddToQueueBtn
            ) {
            await this.#markupRender.renderLiblary({ loader: loader, content: bundle });
            return;
        }      
    }
}