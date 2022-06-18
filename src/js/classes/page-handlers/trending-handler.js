import { REFS } from "../../site-constants";

export default class TrendingHandler {
    #apiService;
    #markupRender;
    #captions;
    constructor ({ apiService, markupRender }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
    }

    getTrendingMoviesPage ({ page = 1 }) {
        const loader = this.#apiService.getTrendingMovies.bind(this.#apiService, { page: page });
        this.#markupRender.renderLiblary({ loader: loader});
    }
}