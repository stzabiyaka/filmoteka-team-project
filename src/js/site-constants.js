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
    backdrop: document.querySelector('#backdrop-modal-card'),
    modalContainer: document.querySelector('#modal'),
    modalAddToWatchedBtn: document.querySelector('#watched-add'),
    modalAddToQueueBtn: document.querySelector('#queue-add'),
    modalCloseBtn: document.querySelector('#modal-close'),
    teamLink: document.querySelector('#team'),
    paginator: document.querySelector('#paginator'),
    languageSelector: document.querySelector('#language'),
    themeButton: document.querySelector('theme'),
    modalOpenMovie : document.querySelector('#modal-open-movie'),
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
        notifications: {
            searchFault: 'Sorry, there are no movies, matching your search query. Please try again.',
            searchMinLength : 'Please, enter at least two symbols to start search.',
            searchRestricted : 'Please, do not enter any special characters.',
            technicalFault: 'Oops (( looks, like some technical troubles occured.',
            collecionEmpty: 'Looks like you vave not add any movie to this collection, yet.',
            
            languageNotify: 'Цей сайт доступний також укріїнською мовою',
        },
        movieDetails: {
            vote: 'Vote',
            votes: 'Votes',
            popularity: 'Popularity',
            title: 'Original Title',
            genre: 'Genre',
            about: 'About',
            other: 'Other',
            poster: 'Poster',
        },
        copyright: 'All Rights Reserved',
        developedWidth: 'Developed with',
    },
    ukrainian: {
        buttons: {
            home: 'головна',
            library: 'моя фільмотека',
            watched: 'переглянуті',
            queue: 'у черзі',
            addToWatched: 'додати до переглянутих',
            removeFromWatched: 'видалити з переглянутих',
            addToQueue: 'додати до черги',
            removeFromQueue: 'видалити з черги',
        },
        logoName: 'Фільмотека',
        searchPlaceholder: 'Пошук фильмів',
        notifications: {
            searchFault: 'Нажаль, немає фільмів, відповідаючих вашому запиту. Будь ласка, спробуйте ще раз.',
            searchMinLength : 'Будь ласка, введіть хоча б два символи для початку пошуку.',
            searchRestricted : 'Будь ласка, не використовуйте будь-які спеціальні символи.',
            technicalFault: 'От халепа (( схоже, сталась якась технічна проблема.',
            collecionEmpty: 'Схоже, ви покищо не додали жодного фильму до цієї коллекції.',
        },
        movieDetails: {
            vote: 'Голос',
            votes: 'Голоси',
            popularity: 'Популярнісь',
            title: 'Оригінальна назва',
            genre: 'Жанр',
            about: 'Опис',
            other: 'Інші',
            poster: 'Постер',
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


















// REFS.modalOpenMovie = document.querySelector('#modal-open-movie');