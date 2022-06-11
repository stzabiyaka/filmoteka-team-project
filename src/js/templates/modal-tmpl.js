// у index.js підключаємо
// import { testRefs } from "./js/templates/modal-tmpl";
// import { renderModalCard } from "./js/templates/modal-tmpl";
// і навішуємо слухач поки на імпровізовану кнопку, потім на картку фільму
// testRefs.testOpenModalCard.addEventListener('click', renderModalCard);

export const testRefs = {
    backdrop: document.querySelector('#backdrop-modal-card'),
    testOpenModalCard: document.querySelector('#try-to-open-modal-card'),
    // цей refs тимчасовий, бо у нас ще не всі елементи є на сторінці 
}



function modalCardMarkUp({ about, imgSrc, imgAlt, originalTitle, vote, votes, popularity, genre }) { 
    
    //це для прикладу
    const srcsetMobile = "./images/modal-test/growing-mobile.jpg 1x, ./images/modal-test/growing-mobile@2x.jpg 2x";
    const srcsetTablet = "./images/modal-test/growing-tablet.jpg 1x, ./images/modal-test/growing-tablet@2x.jpg 2x";
    const srcsetDesktop = "./images/modal-test/growing-desctop.jpg 1x, ./images/modal-test/growing-desctop@2x.jpg 2x";

    return  `
    <div class="modal-card container" id="modal">
        <button type="button" class="modal-card__close-btn" id="modal-close" title="close window" data-modal-close width="30" height="30">
            <svg class="modal-card__close-btn-icon" width="14" height="14">
                <use href="./images/icons.svg#icon-close"></use>
            </svg>
        </button>
        <picture class="modal-card__img">
            <source media='(min-width:1280px)' srcset="${srcsetDesktop}">
            <source media='(min-width:768px)' srcset="${srcsetTablet}">
            <source media='(min-width:320px)' srcset="${srcsetMobile}">
            <img src="${imgSrc}" alt="${imgAlt}" loading="lazy"/>
        </picture>       
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
    </div>
    `
}

export function renderModalCard() {     
    testRefs.backdrop.classList.remove('is-hidden');
    testRefs.backdrop.insertAdjacentHTML('beforeend', modalCardMarkUp({}));
}