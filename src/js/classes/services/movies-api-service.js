import Spinner from '../utilities/spinner';

export default class MoviesApiService {
  #API_KEY;
  #BASE_URL;
  #currentLanguage;
  #languageSet;
  #spinner;
  #genres = {
    default: undefined,
    ukrainian: undefined,
  };
  constructor({ languageSet }) {
    this.#API_KEY = '704d5b04a49684ea4810e36d12ae79df';
    this.#BASE_URL = 'https://api.themoviedb.org/3';
    this.URL_PARAMETERS = {
      trending: 'trending/movie/day',
      search: 'search/movie',
      movieDetails: 'movie',
      genres: 'genre/movie/list',
      videos: 'videos',
    };
    this.LANGUAGES = {
      default: 'en-US',
      ukrainian: 'uk-UA',
    };
    this.#spinner = new Spinner();
    this.#languageSet = languageSet;
  }

  /* Отримання даних з API за визначеним запитом - базовий метод усього класу */
  async #getData(url) {
    this.#spinner.showSpinner();
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response.status);
    }
    const data = await response.json();
    this.#spinner.hideSpinner();
    return data;
  }

  /* Отримання та запис масиву об'ектів з id та відповідними назвами жанрів */
  async getGenres() {
    const requests = Object.keys(this.#genres).map(key => {
      return this.#getData(
        `${this.#BASE_URL}/${this.URL_PARAMETERS.genres}?api_key=${
          this.#API_KEY
        }&language=${this.LANGUAGES[key]}`
      );
    });
    const result = await Promise.all(requests);
    let index = 0;
    Object.keys(this.#genres).forEach(key => {
      this.#genres[key] = result[index].genres;
      index += 1;
    });
  }

  /* Отримання об'екту з масивом об'ектів популярних фільмів */
  async getTrendingMovies({ page = 1 }) {
    this.#setCurrentLanguage();
    const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.trending}?api_key=${
      this.#API_KEY
    }&page=${page}&language=${this.#currentLanguage}`;
    const movies = await this.#getData(url);
    this.#normalizeGenres(movies.results);
    return movies;
  }

  /* Отримання об'екту з масивом об'ектів фільмів за пошуковим запитом */
  async searchMovies({ query, page = 1 }) {
    this.#setCurrentLanguage();
    const url = `${this.#BASE_URL}/${this.URL_PARAMETERS.search}?api_key=${
      this.#API_KEY
    }&language=${
      this.#currentLanguage
    }&query=${query}&page=${page}&include_adult=false`;
    const movies = await this.#getData(url);
    this.#normalizeGenres(movies.results);
    return movies;
  }

  /* Отримання об'екту одного фільма за id */
  async getMovie({ movieId }) {
    this.#spinner.showSpinner();
    this.#setCurrentLanguage();
    const url = `${this.#BASE_URL}/${
      this.URL_PARAMETERS.movieDetails
    }/${movieId}?api_key=${this.#API_KEY}&language=${this.#currentLanguage}`;
    const movie = await this.#getData(url);
    this.#flatGenres(movie);
    return movie;
  }

  /* Отримання об'екту з масивом фільмів за масивом id */
  async getMoviesBundle({ bundle, page = 1, total_pages = 1, total_results }) {
    const requests = bundle.map(id => this.getMovie({ movieId: id }));
    const results = await Promise.allSettled(requests);
    return {
      results: results.map(result => result.value),
      page: page,
      total_pages: total_pages,
      total_results: total_results,
    };
  }

  /* Отримання відео трейлеру одного  фільму */
  async getVideo({ movieId }) {
    this.#setCurrentLanguage();
    const url = `${this.#BASE_URL}/${
      this.URL_PARAMETERS.movieDetails
    }/${movieId}/${this.URL_PARAMETERS.videos}?api_key=${
      this.#API_KEY
    }&language=${this.#currentLanguage}`;
    const video = await this.#getData(url);
    return video;
  }

  /* Нормалізація масиву назв жанрів фільму за масивом id */
  #normalizeGenres(movies) {
    movies.forEach(movie => {
      movie.genre_ids = movie.genre_ids.map(genre => {
        const genreObj = this.#genres[
          this.#languageSet.getCurrentLanguage()
        ].find(element => element.id === genre);
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
  #setCurrentLanguage() {
    this.#currentLanguage =
      this.LANGUAGES[this.#languageSet.getCurrentLanguage()];
  }
}
