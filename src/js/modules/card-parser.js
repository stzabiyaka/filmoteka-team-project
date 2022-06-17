import ImagesPathConstructor from "../classes/images-path-constructor";

export default function cardParser ({ genres, poster_path, release_date, title, vote_average, id}) {
    
    if (genres.length === 0) {
        return
    } 
    release_date = release_date.slice(0, 4);
    genres = genres.map (genre => `<li class="movie-card_genres">${genre},</li>`);
    if ( genres.length > 2) {
        genres = genres.slice(0,2);
        genres.push(`<li class="movie-card_genres">Other</li>`);
    }
   const poster = `${title} poster`;
    return `<article class="movie-card" data-movie-id="${id}">
    <h2 class="visually_hidden">${title}</h2>
    <picture>
        <source srcset="${ImagesPathConstructor.getImagePath({ path:poster_path })}, 1x, ${ImagesPathConstructor.getImagePath({ path:poster_path, width: 'retina' })}, 2x" type="image/jpeg">
        <img class="movie-card_img" src= "${ImagesPathConstructor.getImagePath({ path:poster_path })} " alt=${poster}>
    </picture>
    <h2 class="movie-card_title">${title}</h2>
    <div class="movie-card_info">
    <ul class = "movie-card_list">
        ${genres.join('')}
        </ul>
        <p class="movie-card_symbol">|</p>
        <p class="movie-card_date">${release_date}</p>
        <p class="movie-card_avarage__accent">${vote_average}</p>
    </div>
</article>`;
}
