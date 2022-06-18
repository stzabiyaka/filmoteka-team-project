import { CAPTIONS } from "../site-constants";
import SwitchSiteCaptions from "./utilities/switch-site-captons";

export default class LanguageSet {
    #currentLanguage;
    #captionsSwitcher;
    captions;
    constructor ({ userPreferences }) {
        
        this.#currentLanguage = userPreferences.getPreferences().language;
        this.#captionsSwitcher = new SwitchSiteCaptions();

        if (this.#currentLanguage !== 'default') {
            this.setCurrentLanguage ({ language: this.#currentLanguage });
        }
        this.captions = this.captions = CAPTIONS[language];
    }

    setCurrentLanguage ({ language }) {
        this.captions = CAPTIONS[language];
        this.#captionsSwitcher.switchCaptions ({ captions: this.captions });       
    }

    get captions () {
        return this.captions;
    }

    getCurrentLanguage () {
        return this.#currentLanguage;
    }
}