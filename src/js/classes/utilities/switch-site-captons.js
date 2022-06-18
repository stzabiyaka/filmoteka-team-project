import { REFS } from "../../site-constants";

export default class SwitchSiteCaptions {
    #captions;
    constructor () {
    }

/* Заміна підписів статичних елементів дизайну сайта */ 
    switchCaptions ({ captions }) {
        this.#captions = captions;
        REFS.headerLogoName.textContent = this.#captions.logoName;
        REFS.headerHomeBtn.textContent = this.#captions.buttons.home;
        REFS.headerMyLibBtn.textContent = this.#captions.buttons.library;
        REFS.collectionWatchedBtn.textContent = this.#captions.buttons.watched;
        REFS.collectionQueueBtn.textContent = this.#captions.buttons.queue;
        REFS.searchForm.placeholder = this.#captions.searchPlaceholder;
        REFS.modalAddToWatchedBtn.textContent = this.#captions.buttons.addToWatched.add;
        REFS.modalAddToQueueBtn.textContent = this.#captions.buttons.addToQueue.add;
        }

}