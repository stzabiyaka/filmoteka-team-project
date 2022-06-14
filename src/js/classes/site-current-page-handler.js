import markupRenderer from "../modules/markup-renderer";
import { APPLICATION_PAGES, REFS, UTILITY_CLASSES } from "../site-constants";

export default class SiteCurrentPageHandler {
    #apiService;
    constructor ({apiService}) {
        this.siteCurrentPage = APPLICATION_PAGES.home;
        this.#apiService = apiService;
        this.hiderClass = 'js-hidden';
        this.init();
        this.homeHandler();
        
    }

    init () {
        // REFS.headerContainer.addEventListener('click', this.navBtnsHandler)
        REFS.headerLogo.addEventListener('click', this.homeHandler.bind(this));
        REFS.headerHomeBtn.addEventListener('click', this.homeHandler.bind(this));
        REFS.headerMyLibBtn.addEventListener('click', this.watchedHandler.bind(this));
    }

    homeHandler (event) {
        REFS.collectionsBtnsContainer.classList.add(this.hiderClass);
        this.#navBtnsToggle();
        // REFS.paginator.classList.add(this.hiderClass);
        markupRenderer({ loader: this.#apiService.getTrendingMovies.bind(this.#apiService), target: REFS.libraryContainer });
        console.log('HOME PAGE LOADED');

    }

    searchHandler () {
        console.log('QUEUE PAGE LOADED');
    }

    watchedHandler () {
        this.#navBtnsToggle();
        console.log('WATCHED PAGE LOADED');
    }

    queueHandler () {
        console.log('QUEUE PAGE LOADED');
    }

    #navBtnsToggle () {
        const disable = REFS.headerHomeBtn.disabled;
        REFS.headerHomeBtn.disabled = !disable;
        REFS.headerMyLibBtn.disabled = disable;
        REFS.headerLogo.classList.toggle('disabled');
    }
}