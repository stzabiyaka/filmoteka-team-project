import { REFS } from "../../site-constants";

export default class CollectionHandler {
    #apiService;
    #markupRender;
    #collectionsService;
    constructor ({ apiService, markupRender, collectionsService }) {
        this.#apiService = apiService;
        this.#collectionsService = collectionsService;
        this.#markupRender = markupRender;
    }

    getCollectionMoviesPage ({ collectionName, page = 1 }) {
        if (!this.#collectionsService.isCollectionExist({collection: collectionName})) {
            return console.log(`collection ${collectionName} does not exist`);
        }
        if (!this.#collectionsService.isPageExist({collection: collectionName, page: page})) {
            return console.log(`page ${page} does not exist in the collection ${collectionName}`);
        }

        const bundle = this.#collectionsService.getCollectionIdsBundle({collection: collectionName, page: page});
        const loader = this.#apiService.getMoviesBundle.bind(this.#apiService);
        this.#markupRender({loader: loader, target: REFS.libraryContainer, content: bundle});
    }
}