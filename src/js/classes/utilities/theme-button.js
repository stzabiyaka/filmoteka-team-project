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

/* Ініціалізація кнопки при створенні */ 
    #initTheme() {
        this.#captions = this.#languageSet.captions;
        this.#userTheme = this.#userPreferences.getPreferences().theme;
        this.#setBtnTitle();

        if (this.#userTheme === 'default') {
            return;
        }
        
        this.#toggleClass();
    }

/* Зміна теми сайту */ 
    #changeTheme() {
        this.#captions = this.#languageSet.captions;
        this.#toggleClass();
        this.#inverseTheme();
        this.#setBtnTitle();
        this.#userPreferences.setTheme({ theme: this.#userTheme});       
    }

/* Встановлення титулу кнопки, відповідно до поточної теми */ 
    #setBtnTitle () {
        const switcher = this.#userTheme === 'default' ? 'lightsOff' : 'lightsOn';
        REFS.themeButton.title = this.#captions.buttons.themeBtnTitle[switcher];
    }

/* Інверсія поточної теми сайту */ 
    #inverseTheme () {
        this.#userTheme = this.#userTheme === 'default' ? 'dark' : 'default';        
    }

/* Перемикання класу теми на цільових елементах сайту */ 
    #toggleClass() {
        const values = Object.values(this.#themeRefs);
        for (const value of values) {
            value.classList.toggle('theme-dark');
        }
    }
}