import MoviesApiService from "./js/classes/movies-api-service";
import LocalStorageService from "./js/classes/local-storage-service";

const moviesApiService = new MoviesApiService();
const localStorageWatched = new LocalStorageService('moviesWatched');
const localStorageQueue = new LocalStorageService('moviesQueue');

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



















/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */
    