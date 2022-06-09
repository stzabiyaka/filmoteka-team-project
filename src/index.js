import MoviesApiService from "./js/classes/movies-api-service";
import LocalStorageService from "./js/classes/local-storage-service";

const moviesApiService = new MoviesApiService();
const localStorageWatched = new LocalStorageService('moviesWatched');
const localStorageQueue = new LocalStorageService('moviesQueue');

// moviesApiService.page = 5;
// moviesApiService.getTrending().then(data => {
//     console.log(data);
// }).catch(error => error);

// moviesApiService.resetPage();
// moviesApiService.searchMovies('месники', 'optional').then(data => {
//     console.log(data);
// }).catch(error => error);

// moviesApiService.getMovie(299534).then(data => {
//     console.log(data);
// }).catch(error => error);