export default class ImagesPathConstructor {
    static BASE_URL = 'https://image.tmdb.org/t/p/';
    static width = {
        default: 'w342',
        middle: 'w500',
        retina: 'w780',
        original: 'original'
    }

/* Отримання зібраного шляху до зображення */     
    static getImagePath({path, width}) {
        const size = Object.keys(this.width).includes(width) ? this.width[width] : this.width.default;
        return `${this.BASE_URL}${size}${path}`;
    }
}