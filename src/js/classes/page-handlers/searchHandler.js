import { REFS } from "../../site-constants";

export default class SearchHandler {
    #apiService;
    #markupRender;
    constructor ({ apiService, markupRender }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
    }

    async getMoviesBySearch ({ query, page = 1 }){
        const loader = this.#apiService.searchMovies.bind(this.#apiService, { query: query, page: page });
        const response = await this.#markupRender.renderLiblary({ loader: loader });
        return response;
    }
}