import { CAPTIONS } from "../site-constants";

export default class LanguageSet {
    #currentLanguage;
    #captionsSwitcher;
    #captions;
    constructor ({ userPreferences, captionsSwitcher }) {
        
        this.#currentLanguage = userPreferences.getPreferences().language;
        this.#captionsSwitcher = captionsSwitcher;

        if (this.#currentLanguage !== 'default') {
            this.setCurrentLanguage ({ language: this.#currentLanguage });
        }

    }

    setCurrentLanguage ({ language }) {
        this.#captions = CAPTIONS[language];
        this.#captionsSwitcher.switchCaptions ({ captions: this.#captions });       
    }
}