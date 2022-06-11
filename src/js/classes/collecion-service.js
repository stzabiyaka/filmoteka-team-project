import LocalStorageService from "./local-storage-service";

export default class CollectionService extends LocalStorageService {
    page;
    perPage;
    #collection;
    constructor(key) {
        super (key);
        this.totalPages = 1;
        this.perPage = 9;
        this.page = 1;

        this.#restoreCollection();
    }

    #restoreCollection () {
        this.#collection = this.load();
        if (this.#collection === undefined) {
            this.#collection = [];
        }
        this.totalPages = Math.ceil(this.#collection.length / this.perPage);

    }

    async loadCollection (apiService) {
        if(this.#collection === undefined || this.page > this.totalPages) {
            return;
        }
        const start = (this.page - 1) * this.perPage;
        const query = this.#collection.slice(start, (start + this.perPage));
        const requests = query.forEach(request => {
            apiService.getMovie(request);
        });
        return await Promise.all(requests);
    }

    #saveCollection () {
        this.save(this.#collection);
    }

    addToCollection (id) {
        if(this.isInCollection(id)){
            return;
        }
        this.#collection.push(id);
        this.#saveCollection();
    }

    removeFromCollection (id) {
        if(!this.isInCollection(id)) {
            return;
        }
        const position = this.#collection.indexOf(id)
        this.#collection.splice(position, 1);
        this.#saveCollection();
    }

    isInCollection(id) {
        return this.#collection.includes(id);
    }

    set page (newPage) {
        this.page = newPage;
    }

    get page () {
        return this.page;
    }

    set perPage (newPerPage) {
        this.perPage = newPerPage;
    }

    get perPage () {
        return this.perPage;
    }
}