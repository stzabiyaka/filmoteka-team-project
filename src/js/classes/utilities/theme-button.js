import { REFS } from "../../site-constants";

export default class ThemeButton {
    #captions;
    #userTheme;
    #languageSet;
    #userPreferences;
    #themeRefs = {
        body: REFS.body,
        themeBtn: REFS.themeButton,
    }
    constructor ({ languageSet, userPreferences }) {
        
        this.#languageSet = languageSet;
        this.#userPreferences = userPreferences;
        this.#initTheme();
        REFS.themeButton.addEventListener('click', this.#changeTheme.bind(this));
    }

    #initTheme() {
        this.#captions = this.#languageSet.captions;
        this.#userTheme = this.#userPreferences.getPreferences().theme;
        this.#setBtnTitle();

        if (this.#userTheme === 'default') {
            return;
        }
        
        this.#toggleClass();
    }

    #changeTheme() {
        this.#captions = this.#languageSet.captions;
        this.#toggleClass();
        this.#inverseTheme();
        this.#setBtnTitle();
        this.#userPreferences.setTheme({ theme: this.#userTheme});       
    }


    #setBtnTitle () {
        const switcher = this.#userTheme === 'default' ? 'lightsOff' : 'lightsOn';
        REFS.themeButton.title = this.#captions.buttons.themeBtnTitle[switcher];
    }

    #inverseTheme () {
        this.#userTheme = this.#userTheme === 'default' ? 'dark' : 'default';        
    }

    #toggleClass() {
        const values = Object.values(this.#themeRefs);
        for (const value of values) {
            value.classList.toggle('theme-dark');
        }
    }
}