import LocalStorageService from "./local-storage-service";

export default class UserPreferencesService extends LocalStorageService {
    #preferences;
    constructor(key) {
        super (key);
        this.#restorePreferences();
    }

/* Завантаження даних користувача з localStorage */ 
    #restorePreferences () {
        this.#preferences = this.load();
        if (!this.#preferences) {
            this.#preferences = { language: 'default', theme: 'default', user: false};
        }
    }

/* Отримання даних користувача */ 
    getPreferences () {
        return this.#preferences;
    }

/* Встановлення визначеної користувачем мови та запис у localStorage */ 
    setLanguage ({ language }) {
        this.#preferences.language = language;
        this.#preferences.user = true;
        this.save(this.#preferences);
    }

/* Встановлення визначеної користувачем теми та запис у localStorage */ 
    setTheme ({ theme }) {
        this.#preferences.theme = theme;
        this.#preferences.user = true;
        this.save(this.#preferences);
    }
}