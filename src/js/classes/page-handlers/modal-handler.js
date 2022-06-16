import { REFS } from "../../site-constants";

export default class ModalHandler {
    #apiService;
    #markupRender;
    constructor ({ apiService, markupRender }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
    }

    getMovieById ({ movieId }) {
        const loader = this.#apiService.getMovie.bind(this.#apiService, { movieId: movieId });
        // this.#markupRender({ loader: loader, target: REFS.libraryContainer});

    }
}