import MoviesApiService from './js/classes/movies-api-service';
import UserPreferencesService from './js/classes/user-preferences';
import CollectionService from './js/classes/collecion-service';
import ImagesPathConstructor from './js/classes/images-path-constructor';
import { CAPTIONS } from './js/templates/captions';
import markupRenderer from './js/modules/markup-renderer';
import { testRefs } from './js/templates/modal-tmpl';
import { renderModalCard } from './js/partials/modal';
import markupRenderer from './js/modules/markup-renderer';
const LANGUAGES = {
  default: 'english',
  ukrainian: 'ukrainian',
};
const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;
const moviesApiService = new MoviesApiService({ language: currentLanguage});
const watchedService = new CollectionService('moviesWatched');
const queueService = new CollectionService('moviesQueue');
const APPLICATION_PAGES = {
  home: 'home',
  search: 'search results',
  watched: 'watched',
  queue: 'queue',
};
const refs = {
    body: document.body,
    headerContainer: document.querySelector('#header'),
    headerLogo: document.querySelector('#logo'),
    headerHomeBtn: document.querySelector('#home'),
    headerMyLibBtn: document.querySelector('#my-library'),
    collectionsBtnsContainer: document.querySelector('#collections-nav'),
    collectionWatchedBtn: document.querySelector('#watched'),
    collectionQueueBtn: document.querySelector('#queue'),
    searchFormContainer: document.querySelector('#search-rorm-container'),
    searchForm: document.querySelector('#search-form'),
    libraryContainer: document.querySelector('#library'),
    backdrop: document.querySelector('#backdrop'),
    modalContainer: document.querySelector('#modal'),
    modalAddToWatchedBtn: document.querySelector('#watched-add'),
    modalAddToQueueBtn: document.querySelector('#queue-add'),
    modalCloseBtn: document.querySelector('#modal-close'),
    teamLink: document.querySelector('#team'),
    paginator: document.querySelector('#paginator'),
}
    let currentPage = APPLICATION_PAGES.home;
    testRefs.testOpenModalCard.addEventListener('click', renderModalCard);

    markupRenderer({ loader: moviesApiService.getTrendingMovies.bind(moviesApiService), target: refs.libraryContainer});

/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */
