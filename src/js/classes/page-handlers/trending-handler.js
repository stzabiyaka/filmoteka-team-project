export default class TrendingHandler {
  #apiService;
  #markupRender;
  constructor({ apiService, markupRender }) {
    this.#apiService = apiService;
    this.#markupRender = markupRender;
  }

  /* Отримання та відображення поточної сторінки популярних фильмів */
  async getTrendingMoviesPage({ page = 1 }) {
    const loader = this.#apiService.getTrendingMovies.bind(this.#apiService, {
      page: page,
    });
    const response = await this.#markupRender.renderLiblary({ loader: loader });
    return response;
  }
}
