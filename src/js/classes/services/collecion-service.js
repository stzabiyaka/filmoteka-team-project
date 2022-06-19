import { USER_COLLECTIONS } from "../../site-constants";
import LocalStorageService from "./local-storage-service";

export default class CollectionService extends LocalStorageService {
    currentPage = {};
    perPage = 9;
    #collections;
    #totalPages ={};
    #collectionssNames = Object.values(USER_COLLECTIONS);
    constructor(key) {
        super (key);
        this.#collectionssNames.forEach(name => {
            this.currentPage[name] = 1;
        });

        this.#restoreCollection();
    }
    
/* Завантаження колекцій користувача з localStorage, якщо користувач новий - створення пустих колекцій, але без запису у localStorage */
    #restoreCollection () {
        this.#collections = this.load();
        if (!this.#collections) {
            this.#collections = {};
            this.#collectionssNames.forEach(name => {
                this.#collections[name] = [];
                });
        }
                   
        const keys = Object.keys(this.#collections);

        this.#collectionssNames.forEach(name => {
            this.#collections[name] = this.#collections[name] ? this.#collections[name] : [];
        });        
        this.#totalPagesCount();
    }

/* отримання об'екту з масивом id фільмів з визначеної колекції, з урахуванням потрібної сторінки (за замовчуванням - першої) */
    getCollectionIdsBundle ({ collection, page = 1}) {
        if(!this.isCollectionExist({collection: collection})) {
            return 'collection is empty';
        }
        if(!this.isPageExist({ collection, page: page })) {
            return 'there is no such page in the collection';
        }
        this.currentPage[collection] = page;
        const startPosition = (this.currentPage[collection] - 1) * this.perPage;
        const bundleArray = this.#totalPages[collection] === 1 ? this.#collections[collection] : this.#collections[collection].slice(startPosition, (startPosition + this.perPage));
        const totalResults = this.#collections[collection].length;
        return { bundle: bundleArray, totalPages: this.#totalPages[collection], page: this.currentPage[collection], total_results: totalResults};
    }

/* Додавання нового id фільму до визначеної коллекції користувача, та запис колекцій у localStorage */
    addToCollection ({collection, id}) {
        if(!id || this.isInCollection({collection: collection, id: id})){
            return 'this id is already in the collection, or you didn`t spicified an id';
        }
        this.#collections[collection].push(id);
        this.#saveCollections();
        this.#totalPagesCount();
    }

/* видалення id фільму з визначеної колекції користувача, та запис колекцій у localStorage */
    removeFromCollection ({collection, id = null}) {
        if(!this.isInCollection({collection: collection ,id: id})) {
            return 'there is no such id in the collection';
        }
        const position = this.#collections[collection].indexOf(id)
        this.#collections[collection].splice(position, 1);
        this.#saveCollections();
        this.#totalPagesCount();
    }

/* Перевірка, чи існує визначена коллекція користувача */
    isCollectionExist({ collection }) {
        return this.#totalPages[collection] ? true : false;
    }

/* Перевірка, чи визнічена сторінка існує у визначеній колекції користувача */
isPageExist ({ collection, page = 1}) {
    return this.#totalPages[collection] >= page ? true : false;
}

/* Перевірка, чи існує визначений id фільму у визначеній коллекції користувача */
isInCollection({collection, id = null}) {
    if (!id){
        return 'there is no such id in the collection';
    }
    return this.#collections[collection].includes(id);
}

/* Встановлення поточної сторінки визначеної колекції користувача */
    setCurrentPage ({ collection, newPage }) {
        this.currentPage[collection] = newPage;
    }

/* Отримання поточної сторінки визначеної колекції користувача */
    getCurrentPage ({ collection }) {
        return this.currentPage[collection];
    }

/* Встановлення кількості елементів на одній сторінці будь-якої колекції користувача (!!!не юзати!!!) */
    set perPage (newPerPage) {
        this.perPage = newPerPage;
    }

/* Отримання кількості елементів на одній сторінці будь-якої колекції користувача */
    get perPage () {
        return this.perPage;
    }

/* Встановлення поточної сторінки визначеної колекції на початкове значення */
    resetCurrentPage ({ collection }) {
        this.currentPage[collection] = 1;
    }

/* Запис коллекцій користувача в localStorage */
#saveCollections () {
    this.save(this.#collections);
}

/* Розрахунок кількості сторінок у кожній колекції */
#totalPagesCount () {
    const keys = Object.keys(this.#collections);
    keys.forEach(key => {
        this.#totalPages[key] = Math.ceil(this.#collections[key].length / this.perPage);
    });
}
}