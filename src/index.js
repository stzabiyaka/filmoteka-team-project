import { LANGUAGES, APPLICATION_PAGES, REFS, CAPTIONS } from './js/site-constants';
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

const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;
currentLanguage = LANGUAGES.ukrainian;
const switchCaptions = new SwitchSiteCaptions({ language: currentLanguage });
const moviesApiService = new MoviesApiService({ language: currentLanguage});
const watchedService = new CollectionService('moviesWatched');
const queueService = new CollectionService('moviesQueue');

// site intialisation
const pageHandler = new SiteCurrentPageHandler({ apiService: moviesApiService, wathedService: watchedService, queueService: queueService, markupRender: markupRenderer });
// ^^^

let currentPage = APPLICATION_PAGES.home;





  testRefs.testOpenModalCard.addEventListener('click', renderModalCard);
 









//  const isCollection = watchedService.isCollectionExist();
//  if (isCollection) {
//   const content = watchedService.getCollectionPage({ page: 1 });
//   markupRenderer({ loader: moviesApiService.getMoviesBundle.bind(moviesApiService), target: REFS.libraryContainer, content: content });
//  }


    
/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */


