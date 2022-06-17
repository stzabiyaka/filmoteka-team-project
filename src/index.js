import { LANGUAGES, APPLICATION_PAGES, REFS, CAPTIONS, USER_COLLECTIONS } from './js/site-constants';
import MoviesApiService from './js/classes/services/movies-api-service';
import UserPreferencesService from './js/classes/services/user-preferences';
import CollectionService from './js/classes/services/collecion-service';
import markupRenderer from './js/modules/markup-renderer';
import { renderModalCard } from './js/templates/modal';
import SiteEngine from './js/classes/site-engine';
import { closeModal, onClickBackdrop, onCloseEscKey } from './js/modules/modal-close-btn'
import TrendingHandler from './js/classes/page-handlers/trending-handler';
import CollectionHandler from './js/classes/page-handlers/collection-handler';
import ModalHandler from './js/classes/page-handlers/modal-handler';
import SearchHandler from './js/classes/page-handlers/searchHandler';
import LanguageSet from './js/classes/language-set';
import Notifyer from './js/classes/notifyer';

const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;

const userCollectionsService = new CollectionService('userCollections');
const notifyer = new Notifyer({ renderTarget: REFS.libraryContainer, timeOut: 2000});
const languageSet = new LanguageSet({ userPreferences: userPreferences });
const moviesApiService = new MoviesApiService({ language: currentLanguage});
const trendingHandler = new TrendingHandler({ apiService: moviesApiService, markupRender: markupRenderer });
const collectionHandler = new CollectionHandler({ apiService: moviesApiService, collectionsService: userCollectionsService, markupRender: markupRenderer});
const modalHandler = new ModalHandler({ apiService: moviesApiService });
const searchHandler = new SearchHandler({ apiService: moviesApiService, markupRender: markupRenderer});



/* vvv site engine intialisation vvv */
const siteEngine = new SiteEngine({ trendingHandler: trendingHandler, collectionHandler: collectionHandler, modalHandler: modalHandler, searchHandler: searchHandler });
/* ^^^                           ^^^ */
















    
/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */
