import { REFS } from "../../site-constants";

export default class SearchHandler {
    #apiService;
    #markupRender;
    constructor ({ apiService, markupRender }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
    }

    getMoviesBySearch ({ query, page = 1 }){
        const loader = this.#apiService.searchMovies.bind(this.#apiService, { query: query, page: page });
        this.#markupRender.renderLiblary({ loader: loader });

    }
}