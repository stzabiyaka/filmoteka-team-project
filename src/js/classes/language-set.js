import { CAPTIONS, REFS } from "../site-constants";
import SwitchSiteCaptions from "./utilities/switch-site-captons";

export default class LanguageSet {
    #currentLanguage;
    #captionsSwitcher;
    #userPreferences;
    #isUserNew;
    #languageSelector;
    captions;
    #languageSelectorActive;
    #paginator;
    constructor ({ userPreferences }) {
        this.#userPreferences = userPreferences;
        this.#isUserNew = this.#userPreferences.getIsUserNew();
        this.#currentLanguage = this.#userPreferences.getPreferences().language;
        this.#languageSelector = REFS.languageSelector;
        this.#captionsSwitcher = new SwitchSiteCaptions();
        this.captions = CAPTIONS[this.#currentLanguage];
        if (this.#currentLanguage !== 'default') {
            this.#setCurrentLanguage ({ language: this.#currentLanguage });
        }
        this.#languageSelector.addEventListener('change', this.#selectLanguage.bind(this));
        this.#languageSelectorActive = document.querySelector(`option[value="${this.#currentLanguage}"]`);
        this.#languageSelectorActive.selected = true;
    }

    #setCurrentLanguage ({ language }) {
        this.captions = CAPTIONS[language];
        this.#captionsSwitcher.switchCaptions ({ captions: this.captions });
        this.#userPreferences.setLanguage({ language: this.#currentLanguage });    
    }

    #selectLanguage () {
        const selectedLanguage = this.#languageSelector.value;
        this.#currentLanguage = selectedLanguage;
        this.#setCurrentLanguage({ language: selectedLanguage });
        this.#refreshPage();
    }

    #refreshPage () {
        if(this.#paginator) {
            const currentPage = this.#paginator.getCurrentPage();
            this.#paginator.movePageTo(currentPage);
        }
    }

    get captions () {
        return this.captions;
    }

    getCurrentLanguage () {
        return this.#currentLanguage;
    }

    getIsUserNew () {
        return this.#isUserNew;
    }

    setPaginator ({ paginator }) {
        this.#paginator = paginator;
    }

}