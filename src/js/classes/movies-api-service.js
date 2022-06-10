export default class MoviesApiService {
    #API_KEY;
    #BASE_URL;
    page;
    constructor () {
        this.#API_KEY = '704d5b04a49684ea4810e36d12ae79df';
        this.#BASE_URL = 'https://api.themoviedb.org/3';
        this.URL_PARAMETERS = {
            trending: 'trending/movie/day',
            search: 'search/movie',
            movieDetails: 'movie',
            genres: 'genre/movie/list',
        }
        this.LANGUAGES = {
                default: 'en-US',
                optional: 'uk-UA'
        }
        this.page = 1;
    }

    async #getData (url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data;
    }

    async getTrending () {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.trending}?api_key=${this.#API_KEY}&page=${this.page}`
        return await this.#getData(url);
    }

    async searchMovies (query, language) {
        const currentLanguage = this.#setCurrentLanguage(language);
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.search}?api_key=${this.#API_KEY}&language=${currentLanguage}&query=${query}&page=${this.page}&include_adult=false`;
        return await this.#getData(url);
    }

    async getMovie (movieId, language) {
        const currentLanguage = this.#setCurrentLanguage(language);
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.movieDetails}/${movieId}?api_key=${this.#API_KEY}&language=${currentLanguage}`;
        return await this.#getData(url);
    }

    async getGenres (language) {
        const currentLanguage = this.#setCurrentLanguage(language);
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.genres}?api_key=${this.#API_KEY}&language=${currentLanguage}`;
        return await this.#getData(url);
    }

    

    resetPage() {
        this.page = 1;
    }

    
    /**
     * @param {number} newPage
     */
    set page(newPage) {
        this.page = newPage;
    }

    get page() {
        return this.page;
    }

    incrementPage() {
        this.page += 1;
    }

    decrementPage() {
        this.page -= 1;
    }

    #setCurrentLanguage(language) {
        return language !== 'optional' ? this.LANGUAGES.default : this.LANGUAGES.optional;
    }
}