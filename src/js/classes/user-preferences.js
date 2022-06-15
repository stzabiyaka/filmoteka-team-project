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
            this.#preferences = { language: 'default', theme: 'default', user: undefined};
        }
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

/* Встановлення чи користувач змінював щось коли-небудь (чи він новий користувач). отриму аргументом true/false та запис у localStorage */     
    setUser ({ user }) {
        this.#preferences.user = user;
        this.save(this.#preferences);
    }
}