import LocalStorageService from "./local-storage-service";

export default class UserPreferencesService extends LocalStorageService {
    #preferences;
    #isUserNew;
    constructor(key) {
        super (key);
        this.#restorePreferences();
    }

/* Завантаження даних користувача з localStorage */ 
    #restorePreferences () {
        this.#preferences = this.load();
        if (!this.#preferences) {
            this.#preferences = { language: 'default', theme: 'default'};
            this.#isUserNew = true;
            this.save(this.#preferences);
            return;
        }
        this.#isUserNew = false;
    }

/* Отримання даних користувача */ 
    getPreferences () {
        return this.#preferences;
    }

/* Встановлення визначеної користувачем мови та запис у localStorage */ 
    setLanguage ({ language }) {
        this.#preferences.language = language;
        this.save(this.#preferences);
    }

/* Встановлення визначеної користувачем теми та запис у localStorage */ 
    setTheme ({ theme }) {
        this.#preferences.theme = theme;
        this.save(this.#preferences);
    }

    getIsUserNew () {
        return this.#isUserNew;
    }
}