import { LANGUAGES, APPLICATION_PAGES, REFS, CAPTIONS, USER_COLLECTIONS } from './js/site-constants';
import MoviesApiService from './js/classes/services/movies-api-service';
import UserPreferencesService from './js/classes/services/user-preferences';
import CollectionService from './js/classes/services/collecion-service';
import MarkupRender from './js/classes/utilities/markup-render';
import SiteEngine from './js/classes/site-engine';
import { closeModal, onClickBackdrop, onCloseEscKey } from './js/modules/modal-close-btn'
import TrendingHandler from './js/classes/page-handlers/trending-handler';
import CollectionHandler from './js/classes/page-handlers/collection-handler';
import ModalHandler from './js/classes/page-handlers/modal-handler';
import SearchHandler from './js/classes/page-handlers/searchHandler';
import LanguageSet from './js/classes/language-set';
import Notifyer from './js/classes/utilities/notifyer';
import ToTopButton from './js/classes/utilities/to-top-button';
import ThemeButton from './js/classes/utilities/theme-button';
import 'lazysizes';

const userPreferences = new UserPreferencesService('userPreferences');
const userCollectionsService = new CollectionService('userCollections');
const languageSet = new LanguageSet({ userPreferences: userPreferences });
const notifyer = new Notifyer({ renderTarget: REFS.libraryContainer, modalTarget: REFS.modalContainer, timeOut: 5000, languageSet: languageSet});
const moviesApiService = new MoviesApiService({ languageSet: languageSet});
const markupRender = new MarkupRender({ notifyer: notifyer, languageSet: languageSet });
const trendingHandler = new TrendingHandler({ apiService: moviesApiService, markupRender: markupRender });
const collectionHandler = new CollectionHandler({ apiService: moviesApiService, collectionsService: userCollectionsService, markupRender: markupRender, notifyer: notifyer });
const searchHandler = new SearchHandler({ apiService: moviesApiService, markupRender: markupRender });
const modalHandler = new ModalHandler({ apiService: moviesApiService, languageSet: languageSet, markupRender: markupRender, collectionsService: userCollectionsService, notifyer: notifyer });
const toTopButton = new ToTopButton();
const themeButton = new ThemeButton({ languageSet: languageSet, userPreferences: userPreferences});




/* vvv site engine intialisation vvv */
const siteEngine = new SiteEngine({ apiService: moviesApiService, trendingHandler: trendingHandler, collectionHandler: collectionHandler, modalHandler: modalHandler, searchHandler: searchHandler, notifyer: notifyer, languageSet: languageSet });
/* ^^^                           ^^^ */












 
/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */
