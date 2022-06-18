import { REFS, USER_COLLECTIONS } from "../../site-constants";

export default class ModalHandler {
    #apiService;
    #markupRender;
    #captions;
    #collectionsService;
    #articleID;
    #closeBtnCallback;
    #escBtnCallback;
    constructor ({ apiService, markupRender, languageSet, collectionsService }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
        this.#captions = languageSet.captions;
        this.#collectionsService = collectionsService;
        this.#markupRender.setModalHandler({ modalHandler: this });
    }

    async modalOpen(evt) {
        if(evt.target === evt.currentTarget) {
    return;
        }        
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

        REFS.backdrop.addEventListener('click', this.#closeBtnCallback);
        window.addEventListener('keydown', this.#escBtnCallback);

        const loader = this.#apiService.getMovie.bind(this.#apiService);
        const content = { movieId: this.#articleID };
        
        const result = this.#markupRender.renderModal({ loader: loader, content: content });
        if (result) {
            this.#checkBtnState({ button: 'modalAddToWatchedBtn', collection: USER_COLLECTIONS.watched, btnTarget: 'addToWatched' });
            this.#checkBtnState({ button: 'modalAddToQueueBtn', collection: USER_COLLECTIONS.queue, btnTarget: 'addToQueue' });
            REFS.modalCardThumbBtn.classList.remove('js-hidden');
            REFS.modalAddToWatchedBtn.addEventListener('click', this.#onAddToWatchedBtnClick.bind(this));
            REFS.modalAddToQueueBtn.addEventListener('click', this.#onAddToQueueBtnClick.bind(this));
            if (result.homepage) {
                REFS.modalOpenMovie.classList.remove('js-hidden');
                REFS.modalOpenMovie.addEventListener('click', this.#onOpenMovieClick.bind(this));
            }
        }
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
          evt.target.parentElement === REFS.modalCloseBtn
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
        REFS.backdrop.removeEventListener('click', this.#closeBtnCallback);
        REFS.window.removeEventListener('keydown', this.#escBtnCallback);
      }
}