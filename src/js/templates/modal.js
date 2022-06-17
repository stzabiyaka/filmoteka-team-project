import { testRefs } from "../templates/modal-tmpl";
import { modalCardMarkUp } from "../templates/modal-tmpl";
import { REFS } from "../site-constants";
import MoviesApiService from "../classes/movies-api-service";
import UserPreferencesService from "../classes/user-preferences";


const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;

REFS.libraryContainer.addEventListener('click', renderModalCard);

export async function renderModalCard(evt) {     
    evt.preventDefault();
    
    //повісити слухач на картку так, щоб модалка відкривалась по 
    //кліку в будь-якому місці картки
    if (evt.target.nodeName !== 'IMG' && evt.target.nodeName !== 'H2' && evt.target.nodeName !== 'SPAN' && evt.target.nodeName !== 'P') {
        return
    } else {
        const selectedElements = evt.path;//всі родичі від target до currentTarget
        
        let articleID;
        // перебрати масив родичів і взяти номер потрібного родича
        selectedElements.map(el => {
            if (el.className === 'movie-card') {
                articleID = el.getAttribute('data-movie-id');
                return articleID;
            }
        }
        );
        
        //по id картки робимо запит на сервер і коли приходять данні підставляємо їх у шаблон
        // і рендеримо сторінку
        const moviesApiService = new MoviesApiService({ language: currentLanguage });
        
        await moviesApiService.getMovie({ movieId: articleID })
            .then(movieObj => {
                testRefs.backdrop.classList.remove('js-hidden');
                REFS.body.classList.add('js-modal-is-open');
                testRefs.modalContainer.innerHTML = modalCardMarkUp(movieObj);
                
                if (movieObj.homepage) {
                    REFS.modalOpenMovie.classList.remove('js-hidden');
                    REFS.modalOpenMovie.addEventListener('click', onModalOpenMovieClick);                    
                } else {                    
                    console.log(`Sorry, we can't find it...`);
                    //add notification
                }
                
            })
            .catch(error => console.error(error));//тут можемо додати сповіщення про помилку
    };
}

function onModalOpenMovieClick(evt) {
    // evt.preventDefault();
    // тут можемо якосі гарно оформити
    console.log('hi');
}