export default class LocalStorageService {
    #LOCALSTORAGE_KEY;
    constructor (key) {
        this.#LOCALSTORAGE_KEY = key;
    }

    save(value) {
        try {
           const localStorageState = JSON.stringify(value);
           localStorage.setItem(this.#LOCALSTORAGE_KEY, localStorageState); 
        } catch (error) {
            console.log('Set state error:', error.message);
        }
    }

    load() {
        try {
            let localStorageState = localStorage.getItem(this.#LOCALSTORAGE_KEY);
            return localStorageState = localStorageState === null ? undefined : JSON.parse(localStorageState);
        }
        catch(error) {
            console.log('Get state error:', error.message);
        }
    }

    remove() {
        localStorage.removeItem(this.#LOCALSTORAGE_KEY);
    }
}