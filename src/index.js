import { LANGUAGES, APPLICATION_PAGES, REFS, CAPTIONS } from './js/site-constants';
import MoviesApiService from './js/classes/movies-api-service';
import UserPreferencesService from './js/classes/user-preferences';
import CollectionService from './js/classes/collecion-service';
import ImagesPathConstructor from './js/classes/images-path-constructor';
import markupRenderer from './js/modules/markup-renderer';
import { testRefs } from './js/templates/modal-tmpl';
import { renderModalCard } from './js/partials/modal';
import markupRenderer from './js/modules/markup-renderer';

const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;

const moviesApiService = new MoviesApiService({ language: currentLanguage});
const watchedService = new CollectionService('moviesWatched');
const queueService = new CollectionService('moviesQueue');

let currentPage = APPLICATION_PAGES.home;







  testRefs.testOpenModalCard.addEventListener('click', renderModalCard);

  markupRenderer({ loader: moviesApiService.getTrendingMovies.bind(moviesApiService), target: REFS.libraryContainer});








    











    
/* додавайте всі свої тимчасові імпорти та необхідний для розробки код нижче цієї строки
    не забувайте перед пулл-реквестом прибирати весь свій код все повинно бути лише у ваших
    файлах классів чи модулів */
