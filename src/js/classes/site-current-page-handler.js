import markupRenderer from "../modules/markup-renderer";
import { APPLICATION_PAGES, REFS, USER_COLLECTIONS } from "../site-constants";

export default class SiteCurrentPageHandler {
    #apiService;
    #collectionsService;
    #markupRender;
    #modalRender;
    #queueCallback;
    #watchedCallback;
    constructor ({apiService , collectionsService, markupRender, modalRender }) {
        this.siteCurrentPage = APPLICATION_PAGES.home;
        this.#apiService = apiService;
        this.#collectionsService = collectionsService;
        this.#markupRender = markupRender;
        this.#modalRender = modalRender;
        this.hiderClass = 'js-hidden';
        this.myLibraryClass = 'my-library';
        this.init();
        this.homeHandler();    
    }

/* Ініціалізація головної сторінки сайта */ 
    init () {
        REFS.headerLogo.addEventListener('click', this.homeHandler.bind(this));
        REFS.headerHomeBtn.addEventListener('click', this.homeHandler.bind(this));
        REFS.headerMyLibBtn.addEventListener('click', this.watchedHandler.bind(this, {isFromHome: true}) );
    }

/* Формування та логіка головної сторінки сайта */ 
    homeHandler () { 
        const loader = this.#apiService.getTrendingMovies.bind(this.#apiService, { page: 1 });
        this.#navBtnsToggle();
        this.#removeCollectionsListeners();
        // REFS.paginator.classList.add(this.hiderClass);
        
        this.#markupRender({ loader: loader, target: REFS.libraryContainer });
    }

/* Формування відображення результату пошуку фільмів за пошуковим запитом */ 
    searchHandler ({ searchQuery, page = 1 }) {
        const loader = this.#apiService.searchMovies.bind(this.#apiService, { searchQuery, page });
        console.log('QUEUE PAGE LOADED');
    }

/* Формування відображення та логіка колекції watched */ 
    watchedHandler ({ page = 1, isFromHome }) {
        if (isFromHome) {
         this.#navBtnsToggle(); 
         this.#addCollectionsBtnsListeners();
         REFS.collectionWatchedBtn.disabled = false;
        } 
        
        this.#collectionsBtnsToggle ();
        
        this.#renderCollection({collectionName: USER_COLLECTIONS.watched, page: page});
    }

/* Формування відображення та логіка колекції queue */ 
    queueHandler ({ page = 1 }) {
        this.#collectionsBtnsToggle ();

        this.#renderCollection({collectionName: USER_COLLECTIONS.queue, page: page});
    }

/* Формування відображення та логіка модального вікна */ 
    modalHandler ({ content }) {
        console.log('MODAL LOADED');
    }

/* Логіка перемикання між головною сторінкою, та сторінкою колекцій */ 
    #navBtnsToggle () {
        const disable = REFS.headerHomeBtn.disabled;
        REFS.headerHomeBtn.disabled = !disable;
        REFS.headerMyLibBtn.disabled = disable;
        REFS.headerLogo.classList.toggle('disabled');
        REFS.headerContainer.classList.toggle(this.myLibraryClass);
        REFS.searchFormContainer.classList.toggle(this.hiderClass);
        REFS.collectionsBtnsContainer.classList.toggle(this.hiderClass);

    }

/* Логіка перемикання між колекцією watched, та колекцією queue */ 
    #collectionsBtnsToggle () {
        const disable = REFS.collectionWatchedBtn.disabled;

        REFS.collectionWatchedBtn.disabled = !disable;
        REFS.collectionQueueBtn.disabled = disable;
    }
/* Логіка додавання та прибирання eventListener на кнопках коллекцій */ 
    #addCollectionsBtnsListeners () {
        this.#queueCallback = this.queueHandler.bind(this);
        this.#watchedCallback = this.watchedHandler.bind(this, {isFromHome: false});
         
         REFS.collectionQueueBtn.addEventListener('click', this.#queueCallback);
         REFS.collectionWatchedBtn.addEventListener('click', this.#watchedCallback);
    }

    #removeCollectionsListeners () {
        REFS.collectionQueueBtn.removeEventListener('click', this.#queueCallback);
        REFS.collectionWatchedBtn.removeEventListener('click', this.#watchedCallback);
    }

    #renderCollection ({collectionName, page}) {
        if (!this.#collectionsService.isCollectionExist({collection: collectionName})) {
            return console.log(`collection ${collectionName} does not exist`);
        }
         if (!this.#collectionsService.isPageExist({collection: collectionName, page: page})) {
            return console.log(`page ${page} does not exist in the collection ${collectionName}`);
         }
          const bundle = this.#collectionsService.getCollectionIdsBundle({collection: collectionName, page: page});
          console.log(bundle);
        const loader = this.#apiService.getMoviesBundle.bind(this.#apiService);
        this.#markupRender({loader: loader, target: REFS.libraryContainer, content: bundle}); 
    }
}