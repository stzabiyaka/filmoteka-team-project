import Pagination from "tui-pagination";
import { REFS, USER_COLLECTIONS } from "../site-constants";
import { paginatorTemplate } from "../templates/paginator-tmpl";

export default class SiteEngine {
    
/* Обробники сторінок сайту */
    #trendingHandler;
    #collectionHandler;
    #modalHandler;
    #searchHandler;
/* Колбеки для eventListeners */
    #queueCallback;
    #watchedCallback;
    #paginator;
    #paginatorAfterCallback;

    constructor ({ trendingHandler, collectionHandler, modalHandler, searchHandler }) {
        this.#trendingHandler = trendingHandler;
        this.#collectionHandler = collectionHandler;
        this.#modalHandler = modalHandler;
        this.#searchHandler = searchHandler;
        this.hiderClass = 'js-hidden';
        this.myLibraryClass = 'my-library';
        this.#init();
        this.#handleHome({ isInit: true });    
    }

/* Ініціалізація головної сторінки сайта */ 
    #init () {
        REFS.headerLogo.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerHomeBtn.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerMyLibBtn.addEventListener('click', this.#handleWatched.bind(this, {isFromHome: true}) );
        REFS.searchForm.addEventListener('input', this.#handleSearch.bind(this));
        this.#createPaginator();
    }

/* Формування та логіка головної сторінки сайта */ 
    async #handleHome ({ isInit }) { 
        if (this.#queueCallback || this.#watchedCallback) {
            this.#removeCollectionsListeners();
        }
        
        if ( !isInit ) {
            this.#navBtnsToggle();
        }
        this.#checkPaginatorOldCallback();
        try {
            const result = await this.#trendingHandler.getTrendingMoviesPage({ page: 1 });
        if (result && result.totalResults && result.totalResults > 20) {
            this.#paginator.setItemsPerPage(20);
            this.#paginator.setTotalItems(result.totalResults);
            this.#paginatorAfterCallback = this.#trendingHandler.getTrendingMoviesPage.bind(this.#trendingHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ page: page }));
        }
        this.#paginator.reset();
        }
        catch (error) {
            console.log(error.message);
        }
        
        
    }

/* Формування відображення результату пошуку фільмів за пошуковим запитом */ 
    async #handleSearch (event) {
        const searchQuery = event.currentTarget.value.trim();
        // if ((/^([\s%&#@])*$/i.test(searchQuery)) || (/^([>(.*?)<])*$/.test(searchQuery))) {
        //     (console.log('недопустимі символи & теги')) 
        //     return;
        // }
        if ((/^([а-яА-ЯёЁ]*)$/i.test(searchQuery))) {
           (console.log('тільки кирилиця'))
        }
        if(!searchQuery.length) {
            this.#handleHome({ isInit: true });
        return false;
        } 
        
        this.#checkPaginatorOldCallback();
        try {
            const result = await this.#searchHandler.getMoviesBySearch({query: searchQuery, page: 1});
            if (result && result.totalResults && result.totalResults > 20) {
                this.#paginator.setItemsPerPage(20);
                this.#paginator.setTotalItems(result.totalResults);
                this.#paginatorAfterCallback = this.#searchHandler.getMoviesBySearch.bind(this.#searchHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ query: searchQuery, page: page }));  
            }
            this.#paginator.reset();
        }
        catch (error) {
            console.log(error.message);
        }
           
    }

/* Формування відображення та логіка колекції watched */ 
    async #handleWatched ({ page = 1, isFromHome }) {
        if (isFromHome) {
         this.#navBtnsToggle(); 
         this.#addCollectionsBtnsListeners();
         REFS.collectionWatchedBtn.disabled = false;
        } 
        
        this.#collectionsBtnsToggle ();
        
        this.#checkPaginatorOldCallback();
        try {
            const result = await this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.watched, page: 1 });
            if (result && result.totalResults && result.totalResults > 9) {
                this.#paginator.setItemsPerPage(9);
                this.#paginator.setTotalItems(result.totalResults);
                this.#paginatorAfterCallback = this.#collectionHandler.getCollectionMoviesPage.bind(this.#collectionHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ collectionName: USER_COLLECTIONS.watched, page: page }));   
            }
            this.#paginator.reset();
        }
        catch (error) {
            console.log(error.message);
        }
    }

/* Формування відображення та логіка колекції queue */ 
    async #handleQueue ({ page = 1 }) {

        this.#collectionsBtnsToggle ();

        this.#checkPaginatorOldCallback();
        try {
            const result = await this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.queue, page: 1 });
            if (result && result.totalResults && result.totalResults > 9) {
                this.#paginator.setItemsPerPage(9);
                this.#paginator.setTotalItems(result.totalResults);
                this.#paginatorAfterCallback = this.#collectionHandler.getCollectionMoviesPage.bind(this.#collectionHandler);
                this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ collectionName: USER_COLLECTIONS.queue, page: page }));   
            }
            this.#paginator.reset();
        }
        catch (error) {
            console.log(error.message);
        }
    }

/* Формування відображення та логіка модального вікна */ 
    #handleModal ({ content }) {
        console.log('MODAL LOADED');
    }

/* Логіка перемикання між головною сторінкою, та сторінкою колекцій */ 
    #navBtnsToggle () {
        const disable = REFS.headerHomeBtn.disabled;
        REFS.headerHomeBtn.disabled = !disable;
        REFS.headerMyLibBtn.disabled = disable;
        REFS.headerLogo.classList.toggle('disabled');
        REFS.searchFormContainer.classList.toggle(this.hiderClass);
        REFS.collectionsBtnsContainer.classList.toggle(this.hiderClass);
        REFS.headerContainer.classList.toggle(this.myLibraryClass);
    }

/* Логіка перемикання між колекцією watched, та колекцією queue */ 
    #collectionsBtnsToggle () {
        const disable = REFS.collectionWatchedBtn.disabled;

        REFS.collectionWatchedBtn.disabled = !disable;
        REFS.collectionQueueBtn.disabled = disable;
    }
/* Логіка додавання та прибирання eventListener на кнопках коллекцій */ 
    #addCollectionsBtnsListeners () {
        this.#queueCallback = this.#handleQueue.bind(this);
        this.#watchedCallback = this.#handleWatched.bind(this, {isFromHome: false});
         
         REFS.collectionQueueBtn.addEventListener('click', this.#queueCallback);
         REFS.collectionWatchedBtn.addEventListener('click', this.#watchedCallback);
    }

    #removeCollectionsListeners () {
        REFS.collectionQueueBtn.removeEventListener('click', this.#queueCallback);
        REFS.collectionWatchedBtn.removeEventListener('click', this.#watchedCallback);
    }
    #createPaginator () {
        const paginatorOptions = {
            totalItems: 0,
            itemsPerPage: 0,
            visiblePages: 5,
            page: 1,
            centerAlign: true,
            firstItemClassName: 'btn__pagination',
            lastItemClassName: 'btn__pagination',
            template: paginatorTemplate,
          };

          this.#paginator = new Pagination ('pagination', paginatorOptions);
    }
    #checkPaginatorOldCallback () {
        if (this.#paginator && this.#paginatorAfterCallback) {
            this.#paginator.off('afterMove', this.#paginatorAfterCallback);
        }
    }
}