import { REFS } from "../../site-constants";

export default class CollectionHandler {
    #apiService;
    #markupRender;
    #collectionsService;
    #notifyer
    #collectionEmptyMessage;
    constructor ({ apiService, markupRender, collectionsService, notifyer }) {
        this.#apiService = apiService;
        this.#collectionsService = collectionsService;
        this.#markupRender = markupRender;
        this.#notifyer = notifyer;
        this.#collectionEmptyMessage = 'collectionEmpty';
    }

/* Отримання та відображення поточної сторінки поточної колекції користувача */ 
    async getCollectionMoviesPage ({ collectionName, page = 1 }) {
        if (!this.#collectionsService.isCollectionExist({collection: collectionName})) {
            this.#notifyer.renderNotification({ message: this.#collectionEmptyMessage });
            return;
        }
        if (!this.#collectionsService.isPageExist({collection: collectionName, page: page})) {
            return console.log(`page ${page} does not exist in the collection ${collectionName}`);
        }

        const bundle = this.#collectionsService.getCollectionIdsBundle({collection: collectionName, page: page});
        const loader = this.#apiService.getMoviesBundle.bind(this.#apiService);
        const response = await this.#markupRender.renderLiblary({loader: loader, content: bundle});
        return response;
    }
}