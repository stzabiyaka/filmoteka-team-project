import Spinner from "../utilities/spinner";

export default class MoviesApiService {
    #API_KEY;
    #BASE_URL;
    #currentLanguage;
    #spinner;
    constructor ({language = 'default'}) {
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
        this.genres = null;
        this.#spinner = new Spinner();
        this.setCurrentLanguage({ language: this.LANGUAGES[language] });
    }

/* Отримання даних з API за визначеним запитом - базовий метод усього класу */
    async #getData (url) {
        this.#spinner.showSpinner();
        const response = await fetch(url);
        if (!response.ok) {
            console.log(response.status);
        }
        const data = await response.json();
        this.#spinner.hideSpinner();
        return data;
    }

/* Отримання об'екту з масивом id та відповідних назв жанрів */
    async getGenres () {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.genres}?api_key=${this.#API_KEY}&language=${this.#currentLanguage}`;
        const genres = await this.#getData(url);
        this.genres = genres.genres;
    }

/* Отримання об'екту з масивом об'ектів популярних фільмів */
    async getTrendingMovies ({ page = 1 }) {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.trending}?api_key=${this.#API_KEY}&page=${page}&language=${this.#currentLanguage}`;
        const movies = await this.#getData(url);
        this.#normalizeGenres(movies.results);
        return movies;
    }

/* Отримання об'екту з масивом об'ектів фільмів за пошуковим запитом */
    async searchMovies ({ query, page = 1 }) {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.search}?api_key=${this.#API_KEY}&language=${this.#currentLanguage}&query=${query}&page=${page}&include_adult=false`;
        const movies = await this.#getData(url);
        this.#normalizeGenres(movies.results);
        return movies;
    }

/* Отримання об'екту одного фільма за id */
    async getMovie ({ movieId }) {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.movieDetails}/${movieId}?api_key=${this.#API_KEY}&language=${this.#currentLanguage}`;
        const movie = await this.#getData(url);
        this.#flatGenres(movie);
        return movie;
    }

/* Отримання об'екту з масивом фільмів за масивом id */
    async getMoviesBundle ({ bundle, page = 1, total_pages = 1, total_results }) {
        const requests = bundle.map(id => this.getMovie({movieId: id}));
        const results = await Promise.all(requests);
        return { results: results, page: page, total_pages: total_pages, total_results: total_results };
    }
    
/* Нормалізація масиву назв жанрів фільму за масивом id */    
    #normalizeGenres(movies) {
        movies.forEach(movie => {
            movie.genre_ids = movie.genre_ids.map(genre => {
                const genreObj = this.genres.find(element => element.id === genre);
                return genreObj.name;
            });
            movie['genres'] = movie['genre_ids'];
            delete movie['genre_ids'];
        });        
    }

/* Перетворення масиву об'ектів з id та назвами жанрів фільму на масивом назв */ 
    #flatGenres(movie) {
        movie.genres = movie.genres.map(genre => genre.name);
    }

/* Встановлення поточної мови запиту */ 
    setCurrentLanguage({language}) {
        this.#currentLanguage = Object.values(this.LANGUAGES).includes(language) ? language : this.LANGUAGES.default;
        this.getGenres();
    }

/* Отримання відео одного  фільму */
    async getVideo({ movieId }) {
        const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.movieDetails}/${movieId}/videos?api_key=${this.#API_KEY}&language=${this.#currentLanguage}`;
        const video = await this.#getData(url);        
        return video;
    }

}