import ImagesPathConstructor from "../classes/images-path-constructor";
import { CAPTIONS } from "../site-constants";
import UserPreferencesService from "../classes/user-preferences";


const userPreferences = new UserPreferencesService('userPreferences');
let currentLanguage = userPreferences.getPreferences().language;

export const testRefs = {
    backdrop: document.querySelector('#backdrop-modal-card'),
    modalContainer: document.querySelector('#modal'),    
    // цей refs тимчасовий, бо у нас ще не всі елементи є на сторінці
}


export function modalCardMarkUp({overview, backdrop_path, title, original_title, vote_average, vote_count, popularity, genres}) { 
    //poster_path,

    const imgSrc = `${ImagesPathConstructor.getImagePath({ path: backdrop_path })}, 1x, ${ImagesPathConstructor.getImagePath({ path: backdrop_path, width: 'retina' }) }, 2x`;
    
    const vote = CAPTIONS[currentLanguage].movieDetails.vote;
    const votes = CAPTIONS[currentLanguage].movieDetails.votes;
    const popularityString = CAPTIONS[currentLanguage].movieDetails.popularity;
    const originalTitle = CAPTIONS[currentLanguage].movieDetails.title;
    const genre = CAPTIONS[currentLanguage].movieDetails.genre;
    const about = CAPTIONS[currentLanguage].movieDetails.about;
    const addToWatched = CAPTIONS[currentLanguage].buttons.addToWatched;
    const addToQueue = CAPTIONS[currentLanguage].buttons.addToQueue;
    

    return  `

        <div class="modal-card-thumb__img" >  
        
            <picture class="modal-card__picture">                
                <source srcset="${imgSrc}" type="image/jpeg" class="modal-card__picture--source">
                <img src="${ImagesPathConstructor.getImagePath({ path: backdrop_path })}" alt="${title}" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>
            </picture>

        </div>
            
        <div class="modal-card-thumb__content">
            <div class="modal-card-info">
                <h2 class="modal-card-info__title">${title}</h2>
                <div class="modal-card__thumb--characteristics">
                    <ul class="modal-card-info__characteristics">
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${vote}/${votes}</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${popularityString}</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${originalTitle}</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${genre}</p>
                        </li>
                    </ul>
                    <ul class="modal-card-info__data">
                        <li class="modal-card-info__data--item">                            
                            <p class="modal-card-info__data--slesh">
                                <span class="modal-card-info__data--vote">${vote_average}</span>
                                /
                                <span class="modal-card-info__data--votes">${vote_count}</span>
                            </p>
                        </li>
                        <li class="modal-card-info__data--item">
                            <p class="modal-card-info__data--popularity">${popularity}</p>
                        </li>
                        <li class="modal-card-info__data--item">
                            <p class="modal-card-info__data--original-title">${original_title}</p>
                        </li>
                        <li class="modal-card-info__data--item">
                            <p class="modal-card-info__data--genre">${genres.join(', ')}</p>
                        </li>
                    </ul>
                </div>
                <h3 class="modal-card-info-about__title">${about}</h3>
                <p class="modal-card-info-about__description">${overview}</p>
            </div>
            <div class="modal-card-thumb__btn">
                <button type="button" id="watched-add" title="add to Watched" class="modal-card-btn__watched">${addToWatched}</button>
                <button type="button" id="queue-add" title="add to Queue" class="modal-card-btn__queue">${addToQueue}</button>
            </div>
        </div>
    
    `
}