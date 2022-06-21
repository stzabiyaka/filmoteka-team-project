import { CAPTIONS, REFS } from "../../site-constants";
import SwitchSiteCaptions from "../utilities/switch-site-captons";

export default class LanguageSet {
    #currentLanguage;
    #captionsSwitcher;
    #userPreferences;
    #isUserNew;
    #languageSelector;
    captions;
    #languageSelectorActive;
    #paginator;
    #currentSitePage;
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

/* Встановлення поточної мови відображення сайту та заміна усіх написів на відповідні обраною мовою */ 
    #setCurrentLanguage ({ language }) {
        this.captions = CAPTIONS[language];
        this.#captionsSwitcher.switchCaptions ({ captions: this.captions });
        this.#userPreferences.setLanguage({ language: this.#currentLanguage });    
    }

/* Перемикання мови за допомогою селектора */ 
    #selectLanguage () {
        const selectedLanguage = this.#languageSelector.value;
        this.#currentLanguage = selectedLanguage;
        this.#setCurrentLanguage({ language: selectedLanguage });
        this.#refreshPage();
    }

/* Оновлення поточної сторінки сайту для вірного відображення обраною мовою */ 
    #refreshPage () {
        if(this.#paginator) {
            const currentPage = this.#paginator.getCurrentPage();
            this.#paginator.movePageTo(currentPage);
        }
    }

/* Отримання написів сайту поточною мовою */ 
    get captions () {
        return this.captions;
    }

/* Отримання поточної мови сайту */ 
    getCurrentLanguage () {
        return this.#currentLanguage;
    }

/* Отримання перевірки чи користувач вперше на сайті */ 
    getIsUserNew () {
        return this.#isUserNew;
    }

/* Встановлення пагінатора */ 
    setPaginator ({ paginator }) {
        this.#paginator = paginator;
    }

 /* Встановлення поточної сторінки сайту */ 
    setCurrentSitePage ({ page }) {
        this.#currentSitePage = page;
    }

}