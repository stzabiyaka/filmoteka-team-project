const LANGUAGES = {
    default: 'english',
    ukrainian: 'ukrainian',
  };

  const APPLICATION_PAGES = {
    home: 'home',
    search: 'search results',
    watched: 'watched',
    queue: 'queue',
  };

  const REFS = {
    body: document.body,
    headerContainer: document.querySelector('#header'),
    headerLogo: document.querySelector('#logo'),
    headerLogoName: document.querySelector('#logo-name'),
    headerHomeBtn: document.querySelector('#home'),
    headerMyLibBtn: document.querySelector('#my-library'),
    collectionsBtnsContainer: document.querySelector('#collections-nav'),
    collectionWatchedBtn: document.querySelector('#watched'),
    collectionQueueBtn: document.querySelector('#queue'),
    searchFormContainer: document.querySelector('#search-form-container'),
    searchForm: document.querySelector('#search-form'),
    libraryContainer: document.querySelector('#library'),
    backdrop: document.querySelector('#backdrop'),
    modalContainer: document.querySelector('#modal'),
    modalAddToWatchedBtn: document.querySelector('#watched-add'),
    modalAddToQueueBtn: document.querySelector('#queue-add'),
    modalCloseBtn: document.querySelector('#modal-close'),
    teamLink: document.querySelector('#team'),
    paginator: document.querySelector('#paginator'),
    languageSelector: document.querySelector('#language'),
    themeButton: document.querySelector('theme'),
}

  const CAPTIONS = {
    default: {
        buttons: {
            home: 'home',
            library: 'my library',
            watched: 'watched',
            queue: 'queue',
            addToWatched: 'add to Watched',
            removeFromWatched: 'remove from Watched',
            addToQueue: 'add to queue',
            removeFromQueue: 'remove from Queue',
        },
        logoName: 'Filmoteka',
        searchPlaceholder: 'Search movies',
        notification: 'Search result not successful. Enter the correct movie name and try again',
        movieDetails: {
            vote: 'Vote',
            votes: 'Votes',
            popularity: 'Popularity',
            title: 'Original Title',
            genre: 'Genre',
            about: 'About',
            other: 'Other'
        },
        copyright: 'All Rights Reserved',
        developedWidth: 'Developed with',
    },
    ukrainian: {
        buttons: {
            home: 'головна',
            library: 'моя бібліотека',
            watched: 'переглянуті',
            queue: 'у черзі',
            addToWatched: 'додати до переглянутих',
            removeFromWatched: 'видалити з переглянутих',
            addToQueue: 'додати до черги',
            removeFromQueue: 'видалити з черги',
        },
        logoName: 'Фільмотека',
        searchPlaceholder: 'Пошук фильмів',
        notification: 'Пошук не мав успіху. Введить правильну назву фільму та спробуйте ще раз',
        movieDetails: {
            vote: 'Голос',
            votes: 'Голоси',
            popularity: 'Популярнісь',
            title: 'Оригінальна назва',
            genre: 'Жанр',
            about: 'Опис',
            other: 'Інші'
        },
        copyright: 'Всі права захищено',
        developedWidth: 'Розроблено із',
    }
}

const USER_COLLECTIONS = {
    watched: 'watched',
    queue: 'queue'
}

export { LANGUAGES, APPLICATION_PAGES, REFS, CAPTIONS, USER_COLLECTIONS };