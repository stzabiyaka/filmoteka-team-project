import markupRenderer from "../modules/markup-renderer";
import { APPLICATION_PAGES, REFS } from "../site-constants";

export default class SiteCurrentPageHandler {
    #apiService;
    #watchedService;
    #queueService;
    #markupRender;
    #modalRender;
    constructor ({apiService , wathedService, queueService, markupRender, modalRender }) {
        this.siteCurrentPage = APPLICATION_PAGES.home;
        this.#apiService = apiService;
        this.#watchedService = wathedService;
        this.#queueService = queueService;
        this.#markupRender = markupRender;
        this.#modalRender = modalRender;
        this.hiderClass = 'js-hidden';
        this.myLibraryClass = 'my-library';
        this.init();
        this.homeHandler();    
    }

    init () {
        REFS.headerLogo.addEventListener('click', this.homeHandler.bind(this));
        REFS.headerHomeBtn.addEventListener('click', this.homeHandler.bind(this));
        REFS.headerMyLibBtn.addEventListener('click', this.watchedHandler.bind(this));

    }

    homeHandler () {
        const loader = this.#apiService.getTrendingMovies.bind(this.#apiService, { page: 1 });
        REFS.collectionsBtnsContainer.classList.add(this.hiderClass);
        this.#navBtnsToggle();
        // REFS.paginator.classList.add(this.hiderClass);
        
        this.#markupRender({ loader: loader, target: REFS.libraryContainer });
    }

    searchHandler ({ searchQuery, page = 1 }) {
        const loader = this.#apiService.searchMovies.bind(this.#apiService, { searchQuery, page });
        console.log('QUEUE PAGE LOADED');
    }

    watchedHandler ({ page = 1 }) {
        
        this.#navBtnsToggle();
        console.log('WATCHED PAGE LOADED');
    }

    queueHandler ({ page = 1 }) {
        console.log('QUEUE PAGE LOADED');
    }

    modalHandler ({ content }) {
        console.log('MODAL LOADED');
    }

    #navBtnsToggle () {
        const disable = REFS.headerHomeBtn.disabled;
        REFS.headerHomeBtn.disabled = !disable;
        REFS.headerMyLibBtn.disabled = disable;
        REFS.headerLogo.classList.toggle('disabled');
        REFS.headerContainer.classList.toggle(this.myLibraryClass);
        REFS.searchFormContainer.classList.toggle(this.hiderClass);
        REFS.collectionsBtnsContainer.classList.toggle(this.hiderClass);
    }
    #collectionLoad ({ content }) {
        const loader = this.#apiService.getMoviesBundle.bind(this.#apiService, content);
    }
}