import { modalCardMarkUp } from "../templates/modal-tmpl";
import { REFS } from "../site-constants";
import MoviesApiService from "../classes/services/movies-api-service";
import UserPreferencesService from "../classes/services/user-preferences";
import { CAPTIONS } from "../site-constants";
import { onClickBackdrop } from "../modules/modal-close-btn";
import { onCloseEscKey } from "../modules/modal-close-btn";

const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;

// REFS.libraryContainer.addEventListener('click', renderModalCard);

export async function renderModalCard(evt) {
    evt.preventDefault();
    
    //повісити слухач на картку так, щоб модалка відкривалась по 
    //кліку в будь-якому місці картки
    if (evt.target.nodeName !== 'IMG' && evt.target.nodeName !== 'H2' && evt.target.nodeName !== 'SPAN' && evt.target.nodeName !== 'P' && evt.target.nodeName!=='A') {
        return
    } else {
        const selectedElements = evt.path;//всі родичі від target до currentTarget
        
        let articleID;
        // перебрати масив родичів і взяти номер потрібного родича
        selectedElements.forEach(el => {
            if (el.className === 'movie-card') {
                articleID = el.getAttribute('data-movie-id');
                return articleID;
            }
        });
        
        //по id картки робимо запит на сервер і коли приходять данні підставляємо їх у шаблон
        // і рендеримо сторінку
        const moviesApiService = new MoviesApiService({ language: currentLanguage });
        
        const result = await moviesApiService.getMovie({ movieId: articleID });
        try {
            // console.log(result);
            REFS.backdrop.classList.remove('js-hidden');
            REFS.body.classList.add('js-modal-is-open');
            REFS.modalContainer.innerHTML = modalCardMarkUp(result);
            REFS.modalCardThumbBtn.classList.remove('js-hidden');
            REFS.backdrop.addEventListener('click', onClickBackdrop);
            window.addEventListener('keydown', onCloseEscKey);
            REFS.modalAddToWatchedBtn.addEventListener('click', onModalAddToWatchedBtnClick);
            REFS.modalAddToQueueBtn.addEventListener('click', onModalAddToQueueBtnClick);
            if (result.homepage) {
                REFS.modalOpenMovie.classList.remove('js-hidden');
                REFS.modalOpenMovie.addEventListener('click', onModalOpenMovieClick);
            }
        } catch (error) {
            console.log('somthing wrong with modal content');
            console.log(error);
        }

    }
}

function onModalOpenMovieClick(evt) {
    evt.preventDefault();
    // очищаємо вміст в модалці і включаємо фільм
    console.log('відкриваємо фільм');
}

function onModalAddToWatchedBtnClick(evt) {
    // зробити перевірку, якщо вже є, то змінити текст, видалити і знов змінити текст
    //якщо ні, то спочатку додати, потім змінити текст 
    console.log("we need to change btn ADD TO WATCHED text container");
    REFS.modalAddToWatchedBtn.textContent = CAPTIONS[currentLanguage].buttons.removeFromWatched;
}

function onModalAddToQueueBtnClick(evt) {
     // зробити перевірку, якщо вже є, то змінити текст, видалити і знов змінити текст
    //якщо ні, то спочатку додати, потім змінити текст 
    console.log("we need to change btn ADD TO QUEUE text container");
    REFS.modalAddToQueueBtn.textContent = CAPTIONS[currentLanguage].buttons.removeFromQueue;
}