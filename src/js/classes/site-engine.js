import { REFS, USER_COLLECTIONS } from "../site-constants";

export default class SiteEngine {
    
/* Обробники сторінок сайту */
    #trendingHandler;
    #collectionHandler;
    #modalHandler;
    #searchHandler;
/* Колбки для eventListeners */
    #queueCallback;
    #watchedCallback;

    constructor ({ trendingHandler, collectionHandler, modalHandler, searchHandler }) {
        this.#trendingHandler = trendingHandler;
        this.#collectionHandler = collectionHandler;
        this.#modalHandler = modalHandler;
        this.#searchHandler = searchHandler;
        this.hiderClass = 'js-hidden';
        this.myLibraryClass = 'my-library';
        this.#init();
        this.#handleHome();    
    }

/* Ініціалізація головної сторінки сайта */ 
    #init () {
        REFS.headerLogo.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerHomeBtn.addEventListener('click', this.#handleHome.bind(this));
        REFS.headerMyLibBtn.addEventListener('click', this.#handleWatched.bind(this, {isFromHome: true}) );
        REFS.searchForm.addEventListener('input', this.#handleSearch.bind(this));
    }

/* Формування та логіка головної сторінки сайта */ 
    #handleHome () { 
        this.#navBtnsToggle();
        this.#removeCollectionsListeners();
        // REFS.paginator.classList.add(this.hiderClass);
        
        this.#trendingHandler.getTrendingMoviesPage({ page: 1 });
    }

/* Формування відображення результату пошуку фільмів за пошуковим запитом */ 
    #handleSearch (event) {
        const searchQuery = event.currentTarget.value.trim();
        if ((/^([\s%&#@])*$/.test(searchQuery)) || (/^([>(.*?)<])*$/.test(searchQuery))) {
            (console.log('недопустимі символи & теги')) 
            return;
        }
        if ((/^([а-яА-ЯёЁ]*)$/.test(searchQuery))) {
           (console.log('тільки кирилиця'))
        } 
        if(searchQuery.length < 2) {
            console.log('Search was not successful. Please, enter another movie name and try again');
        return false;
        } 
           console.log (`HOORAY! Found total_results movies`);
           this.#searchHandler.getMoviesBySearch({query: searchQuery, page: 1});
    }

/* Формування відображення та логіка колекції watched */ 
    #handleWatched ({ page = 1, isFromHome }) {
        if (isFromHome) {
         this.#navBtnsToggle(); 
         this.#addCollectionsBtnsListeners();
         REFS.collectionWatchedBtn.disabled = false;
        } 
        
        this.#collectionsBtnsToggle ();
        
        this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.watched, page: 1 });
    }

/* Формування відображення та логіка колекції queue */ 
    #handleQueue ({ page = 1 }) {
        this.#collectionsBtnsToggle ();

        this.#collectionHandler.getCollectionMoviesPage({collectionName: USER_COLLECTIONS.queue, page: 1 });
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
        this.#queueCallback = this.#handleQueue.bind(this);
        this.#watchedCallback = this.#handleWatched.bind(this, {isFromHome: false});
         
         REFS.collectionQueueBtn.addEventListener('click', this.#queueCallback);
         REFS.collectionWatchedBtn.addEventListener('click', this.#watchedCallback);
    }

    #removeCollectionsListeners () {
        REFS.collectionQueueBtn.removeEventListener('click', this.#queueCallback);
        REFS.collectionWatchedBtn.removeEventListener('click', this.#watchedCallback);
    }
}