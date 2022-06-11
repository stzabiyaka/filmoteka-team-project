export default class MoviesApiService {
    #API_KEY;
    #BASE_URL;
    page;
    currentLanguage;
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
                ukrainian: 'uk-UA'
        }
        this.page = 1;
        this.genres = null;

        this.setCurrentLanguage({ language: this.LANGUAGES.default });
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
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.trending}?api_key=${this.#API_KEY}&page=${this.page}`;
        const movies = await this.#getData(url);
        this.#replaceGenresById(movies.results);
        return movies.results;
    }

    async searchMovies ({query, language}) {
        this.setCurrentLanguage({language: language});
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.search}?api_key=${this.#API_KEY}&language=${this.currentLanguage}&query=${query}&page=${this.page}&include_adult=false`;
        const movies = await this.#getData(url);
        this.#replaceGenresById(movies.results);
        return movies.results;
    }

    async getMovie ({movieId}) {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.movieDetails}/${movieId}?api_key=${this.#API_KEY}&language=${this.currentLanguage}`;
        const movie = await this.#getData(url);
        this.#flatGenres(movie);
        return movie;
    }

    async getGenres () {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.genres}?api_key=${this.#API_KEY}&language=${this.currentLanguage}`;
        const genres = await this.#getData(url);
        this.genres = genres.genres;
    }
    
    #replaceGenresById(movies) {
        movies.forEach(movie => {
            movie.genre_ids = movie.genre_ids.map(genre => {
                const genreObj = this.genres.find(element => element.id === genre);
                return genreObj.name;
            });
            movie['genres'] = movie['genre_ids'];
            delete movie['genre_ids'];
        });        
    }

    #flatGenres(movie) {
        movie.genres = movie.genres.map(genre => genre.name);
    }

    resetPage() {
        this.page = 1;
    }
    
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

    setCurrentLanguage({language}) {
        if(this.currentLanguage === language) {
            return;
        }
        this.currentLanguage = Object.values(this.LANGUAGES).includes(language) ? language : this.LANGUAGES.default;
        this.getGenres();
    }
}