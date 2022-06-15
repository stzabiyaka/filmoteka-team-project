import { LANGUAGES, APPLICATION_PAGES, REFS, CAPTIONS, USER_COLLECTIONS } from './js/site-constants';
import MoviesApiService from './js/classes/movies-api-service';
import UserPreferencesService from './js/classes/user-preferences';
import CollectionService from './js/classes/collecion-service';
import ImagesPathConstructor from './js/classes/images-path-constructor';
import markupRenderer from './js/modules/markup-renderer';
import { testRefs } from './js/templates/modal-tmpl';
import { renderModalCard } from './js/templates/modal';
import SiteCurrentPageHandler from './js/classes/site-current-page-handler';
import markupRenderer from './js/modules/markup-renderer';
import SwitchSiteCaptions from './js/classes/switch-site-captons';
import { closeModal, onClickBackdrop, onCloseEscKey } from './js/modules/modal-close-btn'
import isContentExist from './js/modules/is-content-exist';

const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;
currentLanguage = LANGUAGES.ukrainian;
const switchCaptions = new SwitchSiteCaptions({ language: currentLanguage });
const moviesApiService = new MoviesApiService({ language: currentLanguage});
const userCollectionsService = new CollectionService('userCollections');

// vvv site engine intialisation vvv
const siteEngine = new SiteCurrentPageHandler({ apiService: moviesApiService, collectionsService: userCollectionsService, markupRender: markupRenderer });
// ^^^                           ^^^

let currentPage = APPLICATION_PAGES.home;





  testRefs.testOpenModalCard.addEventListener('click', renderModalCard);
 















    
/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */


