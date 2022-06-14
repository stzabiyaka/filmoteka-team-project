import LocalStorageService from "./local-storage-service";

export default class UserPreferencesService extends LocalStorageService {
    #preferences;
    constructor(key) {
        super (key);
        this.#restorePreferences();
    }
    
    #restorePreferences () {
        this.#preferences = this.load();
        if (!this.#preferences) {
            this.#preferences = { language: 'default', theme: 'default', isUser: undefined};
        }
    }

    getPreferences () {
        return this.#preferences;
    }

    setLanguage ({ language }) {
        this.#preferences.language = language;
        this.save(this.#preferences);
    }

    setTheme ({ theme }) {
        this.#preferences.theme = theme;
        this.save(this.#preferences);
    }

    setIsUser ({ isUser }) {
        this.#preferences.isUser = isUser;
        this.save(this.#preferences);
    }
}