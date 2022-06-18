import { REFS } from "../../site-constants";

export default class ModalHandler {
    #apiService;
    #markupRender;
    #captions;
    constructor ({ apiService, markupRender, languageSet }) {
        this.#apiService = apiService;
        this.#markupRender = markupRender;
        this.#captions = languageSet.captions;
    }

    getMovieById ({ movieId }) {
        const loader = this.#apiService.getMovie.bind(this.#apiService, { movieId: movieId });
        // this.#markupRender.renderModal({ loader: loader });

    }
}