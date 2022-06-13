// у index.js підключаємо
//  import { renderModalCard } from "./js/partials/modal";
// замість того,що був
// був такий: import { renderModalCard } from "./js/templates/modal-tmpl";


export const testRefs = {
    backdrop: document.querySelector('#backdrop-modal-card'),
    testOpenModalCard: document.querySelector('#try-to-open-modal-card'),
    modalContainer: document.querySelector('#modal'),
    // цей refs тимчасовий, бо у нас ще не всі елементи є на сторінці
}



export function modalCardMarkUp({ about, imgSrc, imgAlt, originalTitle, vote, votes, popularity, genre }) { 

    return  `

        <div class="modal-card-thumb__img" >
            <img src="${imgSrc}" alt="${imgAlt}" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>
        </div>   
            
        <div class="modal-card-thumb__content">
            <div class="modal-card-info">
                <h2 class="modal-card-info__title">${originalTitle}</h2>
                <div class="modal-card__thumb--characteristics">
                    <ul class="modal-card-info__characteristics">
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">Vote/Votes</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">Popularity</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">Original Title</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">Genre</p>
                        </li>
                    </ul>
                    <ul class="modal-card-info__data">
                        <li class="modal-card-info__data--item">                            
                            <p class="modal-card-info__data--slesh">
                                <span class="modal-card-info__data--vote">${vote}</span>
                                /
                                <span class="modal-card-info__data--votes">${votes}</span>
                            </p>
                        </li>
                        <li class="modal-card-info__data--item">
                            <p class="modal-card-info__data--popularity">${popularity}</p>
                        </li>
                        <li class="modal-card-info__data--item">
                            <p class="modal-card-info__data--original-title">${originalTitle}</p>
                        </li>
                        <li class="modal-card-info__data--item">
                            <p class="modal-card-info__data--genre">${genre}</p>
                        </li>
                    </ul>
                </div>
                <h3 class="modal-card-info-about__title">About</h3>
                <p class="modal-card-info-about__description">${about}</p>
            </div>
            <div class="modal-card-thumb__btn">
                <button type="button" id="watched-add" title="add to Watched" class="modal-card-btn__watched">add to Watched</button>
                <button type="button" id="queue-add" title="add to Queue" class="modal-card-btn__queue">add to queue</button>
            </div>
        </div>
    
    `
}