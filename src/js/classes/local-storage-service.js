export default class LocalStorageService {
    #LOCALSTORAGE_KEY;
    constructor (key) {
        this.#LOCALSTORAGE_KEY = key;
    }

/* запис значення у localStorage */ 
    save(value) {
        try {
           const localStorageState = JSON.stringify(value);
           localStorage.setItem(this.#LOCALSTORAGE_KEY, localStorageState); 
        } catch (error) {
            console.log('Set state error:', error.message);
        }
    }

/* Завантаження поточного стану localStorage */ 
    load() {
        try {
            let localStorageState = localStorage.getItem(this.#LOCALSTORAGE_KEY);
            return localStorageState = localStorageState === null ? undefined : JSON.parse(localStorageState);
        }
        catch(error) {
            console.log('Get state error:', error.message);
        }
    }

/* Видалення елементу з localStorage (!!! не юзати !!!) */ 
    remove() {
        localStorage.removeItem(this.#LOCALSTORAGE_KEY);
    }
}