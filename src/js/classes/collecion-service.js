import LocalStorageService from "./local-storage-service";

export default class CollectionService extends LocalStorageService {
    currentPage;
    perPage;
    #collection;
    #totalPages;
    constructor(key) {
        super (key);
        this.#totalPages = 0;
        this.perPage = 9;
        this.currentPage = 1;

        this.#restoreCollection();
    }

    #restoreCollection () {
        this.#collection = this.load();
        if (!this.#collection) {
            this.#collection = [];
        }
        this.#totalPages = Math.ceil(this.#collection.length / this.perPage);
    }

    getCollectionPage ({ page = 1}) {
        if(!this.isCollectionExist()) {
            return 'collection is empty';
        }
        if(this.#collection === undefined || this.#collection === [] || !this.#totalPages || !this.isPageExist({ page: page })) {
            return 'something went wrong';
        }
        this.currentPage = page;
        const startPosition = (this.currentPage - 1) * this.perPage;
        const bundle = this.#totalPages === 1 ? this.#collection : this.#collection.slice(startPosition, (startPosition + this.perPage));
        return { bundle: bundle, totalPages: this.#totalPages, page: this.currentPage};
    }

    #saveCollection () {
        this.save(this.#collection);
    }

    addToCollection ({id = null}) {
        if(!id || this.isInCollection({id: id})){
            return;
        }
        this.#collection.push(id);
        this.#saveCollection();
    }

    removeFromCollection ({id = null}) {
        if(!this.isInCollection(id)) {
            return;
        }
        const position = this.#collection.indexOf(id)
        this.#collection.splice(position, 1);
        this.#saveCollection();
    }

    isInCollection({id = null}) {
        if (!id){
            return;
        }
        return this.#collection.includes(id);
    }

    isCollectionExist() {
        return this.#totalPages ? true : false;
    }

    set currentPage (newPage) {
        this.currentPage = newPage;
    }

    get currentPage () {
        return this.currentPage;
    }

    set perPage (newPerPage) {
        this.perPage = newPerPage;
    }

    get perPage () {
        return this.perPage;
    }

    resetCurrentPage () {
        this.currentPage = 1;
    }

    isPageExist ({ page = 1}) {
        return this.#totalPages >= page ? true : false;
    }
}