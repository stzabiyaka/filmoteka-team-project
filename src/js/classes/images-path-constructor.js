export default class ImagesPathConstructor {
    static BASE_URL = 'https://image.tmdb.org/t/p/';
    static width = {
        default: 'w342',
        retina: 'w780',
        original: 'original'
    }
    static getImagePath({path, width}) {
        const size = Object.keys(this.width).includes(width) ? this.width[width] : this.width.default;
        return `${this.BASE_URL}${size}${path}`;
    }
}