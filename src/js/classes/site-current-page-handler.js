import markupRenderer from "../modules/markup-renderer";
import { APPLICATION_PAGES, REFS } from "../site-constants";

export default class SiteCurrentPageHandler {
    #apiService;
    #collectionsService;
    #markupRender;
    #modalRender;
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

         const queueCallback = this.queueHandler.bind(this);
         const watchCallback = this.watchedHandler.bind(this, {isFromHome: false});
         
         REFS.collectionQueueBtn.addEventListener('click', queueCallback);
         REFS.collectionWatchedBtn.addEventListener('click', watchCallback);
        } 
        
        console.log('WATCHED PAGE LOADED');

        this.#collectionsBtnsToggle ();
    }

/* Формування відображення та логіка колекції queue */ 
    queueHandler ({ page = 1 }) {
        console.log('QUEUE PAGE LOADED');

        this.#collectionsBtnsToggle ();
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
}