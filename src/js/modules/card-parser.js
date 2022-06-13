import ImagesPathConstructor from "../classes/images-path-constructor";

export default function cardParser ({ genres, poster_path, release_date, title, vote_average}) {
    
    if (genres.length === 0) {
        return
    } 
    genres = genres.map (genre => `<span class="movie-card_genres">${genre}</span>`);
    if ( genres.length > 2) {
        genres.slice(0, 2);
        genres.push ( `<span class="movie-card_genres">Other</span>`);
    }
   
    return `<article class="movie-card">
    <picture>
        <source srcset="${ImagesPathConstructor.getImagePath({ path:poster_path })}, 1x, ${ImagesPathConstructor.getImagePath({ path:poster_path, width: 'retina' })}, 2x" type="image/jpeg">
        <img class="movie-card_img" src= "${ImagesPathConstructor.getImagePath({ path:poster_path })} " alt=${title}>
    </picture>
    <h2 class="movie-card_title">${title}</h2>
    <div class="movie-card_info">
        ${genres}
        <p class="movie-card_symbol">|</p>
        <p class="movie-card_date">${release_date}</p>
        <div class="movie-card_avarage">
            <p class="movie-card_avarage__accent">${vote_average}</p>
        </div>
    </div>
</article>`
}
