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
                <p class="modal-card-info__item">
                    <b>Vote/Votes</b>
                    <span class="modal-card-info__item--vote">${vote}</span>
                    <span>/</span>
                    <span class="modal-card-info__item--votes">${votes}</span>
                </p>
                <p class="modal-card-info__item">
                    <b>Popularity</b>
                    <span>${popularity}</span>
                </p>
                <p class="modal-card-info__item">
                    <b>Original Title</b>
                    <span>${originalTitle}</span>
                </p>
                <p class="modal-card-info__item modal-card-info__item--last-item">
                    <b>Genre</b>
                    <span>${genre}</span>
                </p>
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