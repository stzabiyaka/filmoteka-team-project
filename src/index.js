import MoviesApiService from "./js/classes/movies-api-service";
import LocalStorageService from "./js/classes/local-storage-service";
import CollectionService from "./js/classes/collecion-service";
import ImagesPathConstructor from "./js/classes/images-path-constructor";
import { CAPTIONS } from "./js/templates/captions";

import { testRefs } from "./js/templates/modal-tmpl";
import { renderModalCard } from "./js/templates/modal-tmpl";

const moviesApiService = new MoviesApiService();
const watchedService = new CollectionService('moviesWatched');
const queueService = new CollectionService('moviesQueue');

const APPLICATION_PAGES = {
    home: 'home',
    search: 'search results',
    watched : 'watched',
    queue: 'queue',
}
const LANGUAGES = {
    default: 'en-US',
    ukrainian: 'uk-UA'
}
const refs = {
    body: document.body,
    headerLogo: document.querySelector('#logo'),
    headerHomeBtn: document.querySelector('#home'),
    headerMyLibBtn: document.querySelector('#my-library'),
    headerBtnsContainer: document.querySelector('#collections-nav'),
    headerWatchedBtn: document.querySelector('#watched'),
    headerQueueBtn: document.querySelector('#queue'),
    searchForm: document.querySelector('#search-form'),
    libraryContainer: document.querySelector('#library'),
    backdrop: document.querySelector('#backdrop'),
    modalContainer: document.querySelector('#modal'),
    modalAddToWatchedBtn: document.querySelector('#watched-add'),
    modalAddToQueueBtn: document.querySelector('#queue-add'),
    modalCloseBtn: document.querySelector('#modal-close'),
    teamLink: document.querySelector('#team'),
}
    let currentPage = APPLICATION_PAGES.home;
    let currentLanguage = LANGUAGES.ukrainian;
    testRefs.testOpenModalCard.addEventListener('click', renderModalCard);






/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */
