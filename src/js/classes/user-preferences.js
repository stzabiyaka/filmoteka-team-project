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
            this.#preferences = { language: 'default', theme: 'default'};
        }
    }

    getPreferences () {
        return this.#preferences;
    }
}