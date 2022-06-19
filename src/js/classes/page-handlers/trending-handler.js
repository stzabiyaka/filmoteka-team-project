import { REFS } from "../../site-constants";

export default class TrendingHandler {
    #apiService;
    #markupRender;
    #captions;
    #paginator;
    constructor ({ apiService, markupRender }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
    }



    async getTrendingMoviesPage ({ page = 1 }) {
        const loader = this.#apiService.getTrendingMovies.bind(this.#apiService, { page: page });
        const response = await this.#markupRender.renderLiblary({ loader: loader});
        return response;
    }
}