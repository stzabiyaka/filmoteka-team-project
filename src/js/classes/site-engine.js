import Pagination from "tui-pagination";
import { REFS, USER_COLLECTIONS } from "../site-constants";
import { paginatorTemplate } from "../templates/paginator-tmpl";

const debounce = require('lodash.debounce');

export default class SiteEngine {
    #currentSitePage;
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
        this.#init().then(this.#handleHome()).catch(console.log);
        
            
    }

/* Ініціалізація головної сторінки сайта */ 
    async #init () {
        REFS.headerLogo.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerHomeBtn.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerMyLibBtn.addEventListener('click', this.#handleWatched.bind(this, {isFromHome: true}) );
        REFS.searchForm.addEventListener('input', debounce(this.#handleSearch.bind(this), 300));
        REFS.teamLink.addEventListener('click', this.#handleTeam.bind(this));
        this.#createPaginator();
        this.#languageSet.setPaginator({ paginator: this.#paginator});
        this.#modalHandler.setPaginator({ paginator: this.#paginator});
        if (this.#isUserNew) {
            setTimeout(() => {     
                this.#notifyNewUser();
              }, 2000);
            
        }

        
            await this.#apiService.getGenres();
        
    }

/* Формування та логіка головної сторінки сайта */ 
    async #handleHome () { 
        this.#currentSitePage = 'home';
        this.#setSitePage();

        if (this.#queueCallback || this.#watchedCallback) {
            this.#removeCollectionsListeners();
        }
        
        try {
            const source = await this.#trendingHandler.getTrendingMoviesPage({ page: 1 });
            
            this.#resetPaginator({ source: source, itemsPerPage: 20 });
            this.#paginatorAfterCallback = this.#trendingHandler.getTrendingMoviesPage.bind(this.#trendingHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ page: page }));
        
        
        }
        catch (error) {
            this.#notifyer.renderNotification ({ message: 'technicalFault' });
        }
        
        
    }

/* Формування відображення результату пошуку фільмів за пошуковим запитом */ 
    async #handleSearch () {
        this.#currentSitePage = 'search';
        this.#setSitePage();
        const searchQuery = REFS.searchForm.value.trim();
       
        if(!searchQuery.length) {
            const message = this.#languageSet.captions.notifications.searchMinLength;
            this.#notifyer.showNotification({ message: message });
            this.#handleHome();
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
                this.#handleHome();
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
    async #handleWatched ({ isFromHome }) {
        this.#currentSitePage = 'watched';
        this.#setSitePage();

        if (isFromHome) {
         this.#addCollectionsBtnsListeners();
         REFS.collectionWatchedBtn.disabled = false;
        } 
        
        this.#collectionsBtnsToggle ();

        try {
            const source = await this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.watched, page: 1 });
            
            this.#resetPaginator({ source: source, itemsPerPage: 9 });
            this.#paginatorAfterCallback = this.#collectionHandler.getCollectionMoviesPage.bind(this.#collectionHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ collectionName: USER_COLLECTIONS.watched, page: page }));   
            
        }
        catch (error) {
            console.log(error.message);
        }
    }

/* Формування відображення та логіка колекції queue */ 
    async #handleQueue () {

        this.#collectionsBtnsToggle ();
        this.#currentSitePage = 'queue';
        this.#setSitePage();
        try {
            const source = await this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.queue, page: 1 });

            this.#resetPaginator({ source: source, itemsPerPage: 9 });
            this.#paginatorAfterCallback = this.#collectionHandler.getCollectionMoviesPage.bind(this.#collectionHandler);
            this.#paginator.on('afterMove', ({ page }) => this.#paginatorAfterCallback({ collectionName: USER_COLLECTIONS.queue, page: page }));   
            
        }
        catch (error) {
            console.log(error.message);
        }
    }

/* Встановлення стану поточної сторінки сайту */ 
    #setSitePage () {
        this.#modalHandler.setCurrentSitePage ({ page: this.#currentSitePage });
        this.#languageSet.setCurrentSitePage ({ page: this.#currentSitePage });
        switch (this.#currentSitePage) {
        case 'home':
            REFS.headerHomeBtn.disabled = true;
            REFS.headerMyLibBtn.disabled = false;
            REFS.searchFormContainer.classList.remove(this.hiderClass);
            REFS.collectionsBtnsContainer.classList.add(this.hiderClass);
            REFS.headerContainer.classList.remove(this.myLibraryClass);
            REFS.searchForm.value = '';
        break;

        case 'watched':
        case 'queue':
            REFS.headerHomeBtn.disabled = false;
            REFS.headerMyLibBtn.disabled = true;
            REFS.searchFormContainer.classList.add(this.hiderClass);
            REFS.collectionsBtnsContainer.classList.remove(this.hiderClass);
            REFS.headerContainer.classList.add(this.myLibraryClass);
        break;

        case 'search':
            REFS.headerHomeBtn.disabled = false;
            REFS.headerMyLibBtn.disabled = false;
            REFS.searchFormContainer.classList.remove(this.hiderClass);
            REFS.collectionsBtnsContainer.classList.add(this.hiderClass);
            REFS.headerContainer.classList.remove(this.myLibraryClass);
        break;
        }
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

/* Логіка прибирання eventListener на пагінаторі */ 
    #removeCollectionsListeners () {
        REFS.collectionQueueBtn.removeEventListener('click', this.#queueCallback);
        REFS.collectionWatchedBtn.removeEventListener('click', this.#watchedCallback);
    }

/* Створення нового пагінатора */ 
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

/* Зміна параметрів пагінатора */ 
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

    /* Перевірка, та нотифікування щодо мови, якщо користувач новий */

    #notifyNewUser () {
            const message = this.#languageSet.captions.notifications.languageNotify;
            this.#notifyer.showNotification({ message: message, type: 'language' });
    }

    /* Відобращення команди */
    #handleTeam(evt) {
        evt.preventDefault();
        this.#modalHandler.openModalShell();
        REFS.backdropTeam.classList.remove('js-hidden');
        REFS.backdropTeam.addEventListener('click', this.#modalHandler.onClickBackdrop.bind(this.#modalHandler));        
    }
}