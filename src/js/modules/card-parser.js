import ImagesPathConstructor from "../classes/utilities/images-path-constructor";

export default function cardParser ({ genres, poster_path, release_date, title, vote_average, id, captions }) {    
    if (genres.length === 0) {
        return
    } 
    release_date = release_date.slice(0, 4);
    genres = genres.map (genre => genre);
    if ( genres.length > 2) {
        genres = genres.slice(0,2);
        genres.push(captions.movieDetails.other);
    }
   const poster = `${title} ${captions.movieDetails.poster}`;
    return `<a  class="movie-card" data-movie-id="${id}"><article>
    <h2 class="visually_hidden">${title}</h2>
    <picture>
        <source srcset="${ImagesPathConstructor.getImagePath({ path:poster_path })}, 1x, ${ImagesPathConstructor.getImagePath({ path: poster_path, width: 'retina' })}, 2x" type="image/jpeg">
        <img class="movie-card_img" src= "${ImagesPathConstructor.getImagePath({ path:poster_path })}" alt="${poster}"  loading="lazy">
    </picture>
    <h2 class="movie-card_title">${title}</h2>
    <div class="movie-card_info">
    <p class = "movie-card_genres">
        ${genres.join(', ')}
        </p>
        <p class="movie-card_symbol">|</p>
        <p class="movie-card_date">${release_date}</p>
        <p class="movie-card_avarage__accent">${vote_average}</p>
    </div>
</article></a>`;
}
