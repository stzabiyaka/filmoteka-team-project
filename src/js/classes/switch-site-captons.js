import { CAPTIONS, REFS } from "../site-constants";

export default class SwitchSiteCaptions {
    constructor ({ currentLanguage = 'default' }) {
        this.currentLanguage = currentLanguage;
    }

    switchCaptions ({ language }) {
        if (this.currentLanguage === language) {
            return;
        }

        const keys = [headerLogo, headerHomeBtn, headerMyLibBtn, collectionWatchedBtn, collectionQueueBtn, searchForm, modalAddToWatchedBtn, modalAddToQueueBtn, modalCloseBtn, teamLink];
        Object.keys(Refs)
    }

}