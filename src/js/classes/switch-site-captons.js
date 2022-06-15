import { CAPTIONS, REFS } from "../site-constants";

export default class SwitchSiteCaptions {
    #currentLanguage;
    constructor ({ language = 'default' }) {
        this.#currentLanguage = language;
        this.switchCaptions({ language: this.#currentLanguage });
    }

/* Заміна підписів статичних елементів дизайну сайта */ 
    switchCaptions ({ language = 'default' }) {
        this.#currentLanguage = language;     
        REFS.headerLogoName.textContent = CAPTIONS[this.#currentLanguage].logoName;
        REFS.headerHomeBtn.textContent = CAPTIONS[this.#currentLanguage].buttons.home;
        REFS.headerMyLibBtn.textContent = CAPTIONS[this.#currentLanguage].buttons.library;
        REFS.collectionWatchedBtn.textContent = CAPTIONS[this.#currentLanguage].buttons.watched;
        REFS.collectionQueueBtn.textContent = CAPTIONS[this.#currentLanguage].buttons.queue;
        REFS.searchForm.placeholder = CAPTIONS[this.#currentLanguage].searchPlaceholder;
        }

}