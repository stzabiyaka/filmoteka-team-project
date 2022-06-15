import REFS from '../site-constants';

function onLoadLibraryPage () {
    REFS.headerContainer.classList.add('');
    REFS.headerHomeBtn.classList.remove('');
    REFS.headerMyLibBtn.classList.add('');
    REFS.collectionWatchedBtn.classList.add('');
    REFS.collectionQueueBtn.classList.add('');

    REFS.libraryContainer.innerHTML = '';

    parseWatchedFilmsMurkup();
};

REFS.library.addEventListener('click', onLoadLibraryPage);
REFS.collectionWatchedBtn.addEventListener('click', () => parseWatchedFilmsMurkup());
REFS.collectionQueueBtn.addEventListener('click', () => parseQueueFilmsMarkup());

function parseWatchedFilmsMurkup() {
    REFS.libraryContainer.innerHTML = '';
    libraryWatchedLocalStorage();
    const parsedWatchedFilmsId = JSON.parse(localStorage.getItem('watchedFilmsId'));
    REFS.collectionWatchedBtn.classList.add('focus');
    REFS.collectionQueueBtn.classList.remove('focus');
        
    if (parsedWatchedFilmsId ) {
        parsedWatchedFilmsId.forEach(el => parseOneCardMarkup(el));
            
    } else return;
}

function parseQueueFilmsMarkup() {
    REFS.libraryContainer.innerHTML = '';
    libraryQueueLocalStorage();
    const parsedQueueFilmsId = JSON.parse(localStorage.getItem('queueFilmsId'));
    REFS.collectionWatchedBtn.classList.remove('focus');
    REFS.collectionQueueBtn.classList.add('focus');
    if (parsedQueueFilmsId ) {
        parsedQueueFilmsId.forEach(el => parseOneCardMarkup(el));
          
    } else return;
}

function parseOneCardMarkup(films) {
    REFS.libraryContainer.insertAdjacentHTML('beforeend', createFilmCard(films));
}

function libraryWatchedLocalStorage() {

    const parsedWatchedFilmsId = JSON.parse(localStorage.getItem('watchedFilmsId'));

    if (localStorage.getItem('watchedFilmsId') === null || parsedWatchedFilmsId.length === 0) {
        REFS.libraryBackgrounImage.classList.remove('header-background');
        REFS.libraryBackgrounImage.classList.add('header-mylib-background');
    }

    REFS.libraryBackgrounImage.classList.remove('header-mylib-background');
}

function libraryQueueLocalStorage() {

    const parsedQueueFilmsId = JSON.parse(localStorage.getItem('queueFilmsId'));
    
    if (localStorage.getItem('queueFilmsId') === null || parsedQueueFilmsId.length === 0) {
        REFS.libraryBackgrounImage.classList.remove('header-background');
        REFS.libraryBackgrounImage.classList.add('header-mylib-background');
    }

    REFS.libraryBackgrounImage.classList.remove('header-mylib-background');
}


