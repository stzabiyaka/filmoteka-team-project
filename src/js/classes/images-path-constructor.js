export default class ImagesPathConstructor {
    #BASE_URL;
    #width;
    constructor() {
        this.#BASE_URL = 'https://image.tmdb.org/t/p/';
        this.#width = {
            default: 'w342',
            retina: 'w780',
            original: 'original'
        }

    }

    getImagePath(path, width = "default") {
        const size = this.#width[width];
        return `${this.#BASE_URL}${size}${path}`;
    }
}