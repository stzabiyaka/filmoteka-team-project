import LocalStorageService from "./local-storage-service";

export default class CollectionService extends LocalStorageService {
    page;
    perPage;
    #collection;
    #totalPages;
    constructor(key) {
        super (key);
        this.#totalPages = 1;
        this.perPage = 9;
        this.page = 1;

        this.#restoreCollection();
    }

    #restoreCollection () {
        this.#collection = this.load();
        if (this.#collection === undefined) {
            this.#collection = [];
        }
        this.#totalPages = Math.ceil(this.#collection.length / this.perPage);

    }

    async loadCollection ({loader}) {
        if(this.#collection === undefined || this.#collection === [] || this.page > this.#totalPages) {
            return;
        }
        let query;
        const startPosition = (this.page - 1) * this.perPage;
        query = this.#totalPages === 1 ? this.#collection : this.#collection.slice(startPosition, (startPosition + this.perPage));
        const requests = query.map(id => loader({movieId: id}));
        const result = await Promise.all(requests);
        return { results: result, total_pages: this.#totalPages, page: this.page};
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

    resetPage () {
        this.page = 1;
    }
}