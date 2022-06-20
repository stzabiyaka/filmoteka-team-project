import Pagination from "tui-pagination";
import { REFS, USER_COLLECTIONS } from "../site-constants";
import { paginatorTemplate } from "../templates/paginator-tmpl";

const debounce = require('lodash.debounce');

export default class SiteEngine {
    
/* Обробники сторінок сайту */
    #trendingHandler;
    #collectionHandler;
    #modalHandler;
    #searchHandler;
    #paginator;
    #notifyer;
    #languageSet;
    #isUserNew;
    #apiService;
/* Колбеки для eventListeners */
    #queueCallback;
    #watchedCallback;
    #paginatorAfterCallback;

    constructor ({ trendingHandler, collectionHandler, modalHandler, searchHandler, notifyer, languageSet, apiService }) {
        this.#trendingHandler = trendingHandler;
        this.#collectionHandler = collectionHandler;
        this.#modalHandler = modalHandler;
        this.#searchHandler = searchHandler;
        this.#languageSet = languageSet;
        this.#notifyer = notifyer;
        this.#apiService = apiService;
        this.#isUserNew = this.#languageSet.getIsUserNew();
        this.hiderClass = 'js-hidden';
        this.myLibraryClass = 'my-library';
        this.#init().then(this.#handleHome({ isInit: true })).catch(console.log);
            
    }

/* Ініціалізація головної сторінки сайта */ 
    async #init () {
        REFS.headerLogo.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerHomeBtn.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerMyLibBtn.addEventListener('click', this.#handleWatched.bind(this, {isFromHome: true}) );
        REFS.searchForm.addEventListener('input', debounce(this.#handleSearch.bind(this), 300));
        this.#createPaginator();
        this.#languageSet.setPaginator({ paginator: this.#paginator});
        if (this.#isUserNew) {
            setTimeout(() => {     
                this.#notifyNewUser();
              }, 2000);
            
        }

        
            await this.#apiService.getGenres();
        
    }

/* Формування та логіка головної сторінки сайта */ 
    async #handleHome ({ isInit }) { 
        if (this.#queueCallback || this.#watchedCallback) {
            this.#removeCollectionsListeners();
        }
        
        if ( !isInit ) {
            this.#navBtnsToggle();
        }
        
        try {
            const source = await this.#trendingHandler.getTrendingMoviesPage({ page: 1 });
            
            this.#resetPaginator({ source: source, itemsPerPage: 20 });
            this.#paginatorAfterCallback = this.#trendingHandler.getTrendingMoviesPage.bind(this.#trendingHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ page: page }));
        
        
        }
        catch (error) {
            console.log(error.message);
        }
        
        
    }

/* Формування відображення результату пошуку фільмів за пошуковим запитом */ 
    async #handleSearch () {
        // console.log(event.currentTarget);
        const searchQuery = REFS.searchForm.value.trim();
       
        if(!searchQuery.length) {
            const message = this.#languageSet.captions.notifications.searchMinLength;
            this.#notifyer.showNotification({ message: message });
            this.#onSearchFault();
        return false;
        } 

        if (this.#isUserNew && this.#languageSet.getCurrentLanguage() === 'default' && (/^([а-яА-ЯёЁ]*)$/i.test(searchQuery))) {
            this.#notifyNewUser();
            this.#isUserNew = false;
         }
        
        try {
            const source = await this.#searchHandler.getMoviesBySearch({query: searchQuery, page: 1});
            if(!source || !source.totalResults) {
                const message =  this.#languageSet.captions.notifications.searchFault;
                this.#notifyer.showNotification({ message: message });
                this.#onSearchFault();
            }
            this.#resetPaginator({ source: source, itemsPerPage: 20 });
            this.#paginatorAfterCallback = this.#searchHandler.getMoviesBySearch.bind(this.#searchHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ query: searchQuery, page: page }));
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

        try {
            const source = await this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.watched, page: 1 });
            
            this.#resetPaginator({ source: source, itemsPerPage: 9 });
            this.#paginatorAfterCallback = this.#collectionHandler.getCollectionMoviesPage.bind(this.#collectionHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ collectionName: USER_COLLECTIONS.watched, page: page }));   
            // }
            // this.#paginator.reset();
        }
        catch (error) {
            console.log(error.message);
        }
    }

/* Формування відображення та логіка колекції queue */ 
    async #handleQueue ({ page = 1 }) {

        this.#collectionsBtnsToggle ();

        try {
            const source = await this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.queue, page: 1 });

            this.#resetPaginator({ source: source, itemsPerPage: 9 });
            this.#paginatorAfterCallback = this.#collectionHandler.getCollectionMoviesPage.bind(this.#collectionHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ collectionName: USER_COLLECTIONS.queue, page: page }));   
            // }
            // this.#paginator.reset();
        }
        catch (error) {
            console.log(error.message);
        }
    }

/* Формування відображення та логіка модального вікна */ 
    // #handleModal ({ content }) {
    //     console.log('MODAL LOADED');
    // }

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

    #resetPaginator ({ source, itemsPerPage }) {
        this.#checkPaginatorOldCallback();
        let totalItems;
        if(!source) {
            totalItems = 0;
        } else {
            totalItems = source.totalResults;
        }

        this.#paginator.setItemsPerPage(itemsPerPage);
        this.#paginator.reset(totalItems);

        if( totalItems <= itemsPerPage) {
            REFS.paginator.classList.add('js-hidden');
        } else if ( REFS.paginator.classList.contains('js-hidden')) {
            REFS.paginator.classList.remove('js-hidden');
        } 
    }

/* Прибирання eventListener з пагінації */
    #checkPaginatorOldCallback () {
        if (this.#paginator && this.#paginatorAfterCallback) {
            this.#paginator.off('afterMove', this.#paginatorAfterCallback);
            // this.#paginator.off('beforeMove', this.#paginatorBeforeCallback);
        }
    }

    /* Обробка невдалого пошуку */
    #onSearchFault () {
        this.#handleHome({ isInit: true });
    }

    /* Перевірка, чи користувач новий */

    #notifyNewUser () {
            const message = this.#languageSet.captions.notifications.languageNotify;
            this.#notifyer.showNotification({ message: message, type: 'language' });
    }
}