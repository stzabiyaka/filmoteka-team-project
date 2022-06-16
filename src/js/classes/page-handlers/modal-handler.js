import { REFS } from "../../site-constants";

export default class ModalHandler {
    #apiService;
    #markupRender;
    #currentLanguage;
    constructor ({ apiService, markupRender, currentLanguage }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
        this.#currentLanguage = currentLanguage;
    }

    getMovieById ({ movieId }) {
        const loader = this.#apiService.getMovie.bind(this.#apiService, { movieId: movieId });
        // this.#markupRender({ loader: loader, target: REFS.libraryContainer});

    }
}