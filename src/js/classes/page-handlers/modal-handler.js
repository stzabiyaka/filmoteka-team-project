import { REFS, USER_COLLECTIONS } from '../../site-constants';

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
  #paginator;
  #currentSitePage;

  constructor({
    apiService,
    markupRender,
    languageSet,
    collectionsService,
    notifyer,
  }) {
    this.#apiService = apiService;
    this.#markupRender = markupRender;
    this.#languageSet = languageSet;
    this.#notifyer = notifyer;
    this.#collectionsService = collectionsService;
    this.#markupRender.setModalHandler({ modalHandler: this });
  }

  openModalShell() {
    REFS.body.classList.add('js-modal-is-open');
    this.#closeBtnCallback = this.onClickBackdrop.bind(this);
    this.#escBtnCallback = this.#onCloseEscKey.bind(this);
    window.addEventListener('keydown', this.#escBtnCallback);
  }

  async modalOpen(evt) {
    if (evt.target === evt.currentTarget) {
      return;
    }
    this.openModalShell();
    REFS.backdrop.classList.remove('js-hidden');
    REFS.backdrop.addEventListener('click', this.#closeBtnCallback);

    this.#captions = this.#languageSet.captions;
    const selectedElements = evt.composedPath();

    selectedElements.forEach(el => {
      if (el.className === 'movie-card') {
        this.#articleID = Number(el.getAttribute('data-movie-id'));
        return this.#articleID;
      }
    });

    this.#movieBtnCallback = this.#onMovieClick.bind(this);
    this.#addToWatchedCallback = this.#onAddToWatchedBtnClick.bind(this);
    this.#addToQueueCallback = this.#onAddToQueueBtnClick.bind(this);

    const loader = this.#apiService.getMovie.bind(this.#apiService);
    const content = { movieId: this.#articleID };

    const result = this.#markupRender.renderModal({
      loader: loader,
      content: content,
    });

    result
      .then(result => {
        if (result) {
          this.#checkBtnState({
            button: 'modalAddToWatchedBtn',
            collection: USER_COLLECTIONS.watched,
            btnTarget: 'addToWatched',
          });
          this.#checkBtnState({
            button: 'modalAddToQueueBtn',
            collection: USER_COLLECTIONS.queue,
            btnTarget: 'addToQueue',
          });
          REFS.modalCardThumbBtn.classList.remove('js-hidden');
          REFS.modalAddToWatchedBtn.addEventListener(
            'click',
            this.#addToWatchedCallback
          );
          REFS.modalAddToQueueBtn.addEventListener(
            'click',
            this.#addToQueueCallback
          );
          REFS.modalOpenMovie.addEventListener('click', this.#movieBtnCallback);
        }
      })
      .catch(console.log);
  }

  #onAddToWatchedBtnClick(evt) {
    if (
      REFS.modalAddToWatchedBtn.textContent ===
      this.#captions.buttons.addToWatched.add
    ) {
      this.#collectionsService.addToCollection({
        collection: USER_COLLECTIONS.watched,
        id: this.#articleID,
      });
      this.#checkBtnState({
        button: 'modalAddToWatchedBtn',
        collection: USER_COLLECTIONS.watched,
        btnTarget: 'addToWatched',
      });
      this.#refreshCollectionPage({ collection: USER_COLLECTIONS.watched });
      return;
    }
    this.#collectionsService.removeFromCollection({
      collection: USER_COLLECTIONS.watched,
      id: this.#articleID,
    });
    this.#checkBtnState({
      button: 'modalAddToWatchedBtn',
      collection: USER_COLLECTIONS.watched,
      btnTarget: 'addToWatched',
    });
    this.#refreshCollectionPage({ collection: USER_COLLECTIONS.watched });
  }

  #onAddToQueueBtnClick(evt) {
    if (
      REFS.modalAddToQueueBtn.textContent ===
      this.#captions.buttons.addToQueue.add
    ) {
      this.#collectionsService.addToCollection({
        collection: USER_COLLECTIONS.queue,
        id: this.#articleID,
      });
      this.#checkBtnState({
        button: 'modalAddToQueueBtn',
        collection: USER_COLLECTIONS.queue,
        btnTarget: 'addToQueue',
      });
      this.#refreshCollectionPage({ collection: USER_COLLECTIONS.queue });
      return;
    }
    this.#collectionsService.removeFromCollection({
      collection: USER_COLLECTIONS.queue,
      id: this.#articleID,
    });
    this.#checkBtnState({
      button: 'modalAddToQueueBtn',
      collection: USER_COLLECTIONS.queue,
      btnTarget: 'addToQueue',
    });
    this.#refreshCollectionPage({ collection: USER_COLLECTIONS.queue });
  }

  #checkBtnState({ button, collection, btnTarget }) {
    if (
      this.#collectionsService.isInCollection({
        collection: collection,
        id: this.#articleID,
      })
    ) {
      REFS[button].textContent = this.#captions.buttons[btnTarget].remove;
      return;
    }
    REFS[button].textContent = this.#captions.buttons[btnTarget].add;
  }

  onClickBackdrop(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.parentElement === REFS.modalCloseBtn ||
      evt.target.parentElement.parentElement === REFS.modalCloseBtn ||
      evt.target === REFS.modalCloseBtn ||
      evt.target.parentElement === REFS.teamCloseBtn ||
      evt.target.parentElement.parentElement === REFS.teamCloseBtn ||
      evt.target === REFS.teamCloseBtn
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
    REFS.backdropTeam.classList.add('js-hidden');
    REFS.body.classList.remove('js-modal-is-open');
    REFS.modalOpenMovie.classList.add('js-hidden');
    REFS.backdrop.removeEventListener('click', this.#closeBtnCallback);
    window.removeEventListener('keydown', this.#escBtnCallback);
    REFS.modalOpenMovie.removeEventListener('click', this.#movieBtnCallback);
    REFS.backdropTeam.removeEventListener(
      'click',
      this.onClickBackdrop.bind(this)
    );
    this.#hiddeBtnsThumb();
    REFS.modalContainer.innerHTML = '';
  }

  #onMovieClick(evt) {
    evt.preventDefault();

    REFS.modalOpenMovie.classList.add('js-hidden');
    REFS.modalOpenMovie.removeEventListener('click', this.#movieBtnCallback);

    const loader = this.#apiService.getVideo.bind(this.#apiService);
    const content = { movieId: this.#articleID };

    const result = this.#markupRender.renderMovie({
      loader: loader,
      content: content,
    });

    result
      .then(result => {
        if (result) {
        }
      })
      .catch(console.log);
  }

  #hiddeBtnsThumb() {
    REFS.modalCardThumbBtn.classList.add('js-hidden');
    REFS.modalAddToWatchedBtn.removeEventListener(
      'click',
      this.#addToWatchedCallback
    );
    REFS.modalAddToQueueBtn.removeEventListener(
      'click',
      this.#addToQueueCallback
    );
  }

  #refreshCollectionPage({ collection }) {
    if (
      !this.#collectionsService.isCollectionExist({ collection: collection }) &&
      this.#currentSitePage === USER_COLLECTIONS[collection]
    ) {
      this.#notifyer.renderNotification({ message: 'collectionEmpty' });
      return;
    }
    if (
      this.#paginator &&
      this.#currentSitePage === USER_COLLECTIONS[collection]
    ) {
      const currentPage = this.#paginator.getCurrentPage();
      this.#paginator.movePageTo(currentPage);
    }
  }

  setPaginator({ paginator }) {
    this.#paginator = paginator;
  }

  setCurrentSitePage({ page }) {
    this.#currentSitePage = page;
  }
}
