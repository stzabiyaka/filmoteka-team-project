import { REFS } from "../../site-constants";

export default class TrendingHandler {
    #apiService;
    #markupRender;
    constructor ({ apiService, markupRender }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
    }

    getTrendingMoviesPage ({ page = 1 }) {
        const loader = this.#apiService.getTrendingMovies.bind(this.#apiService, { page: page });
        this.#markupRender({ loader: loader, target: REFS.libraryContainer});
    }
}