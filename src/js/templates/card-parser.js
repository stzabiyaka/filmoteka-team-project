import ImagesPathConstructor from '../classes/utilities/images-path-constructor';
import noPoster from '../../images/poster.svg';

export default function cardParser({
  genres,
  poster_path,
  release_date,
  title,
  vote_average,
  id,
  captions,
}) {
  if (genres.length === 0) {
    return;
  }
  let image = noPoster;
  let imageRetina = noPoster;
  if (poster_path) {
    image = ImagesPathConstructor.getImagePath({ path: poster_path });
    imageRetina = ImagesPathConstructor.getImagePath({
      path: poster_path,
      width: 'retina',
    });
  }
  release_date = release_date.slice(0, 4);
  genres = genres.map(genre => genre);
  if (genres.length > 2) {
    genres = genres.slice(0, 2);
    genres.push(captions.movieDetails.other);
  }
  const poster = `${title} ${captions.movieDetails.poster}`;
  return `<li class="movie-card" data-movie-id="${id}"><article>
    <h2 class="visually_hidden">${title}</h2>
        <img class="movie-card_img lazyload" data-src="${image}" data-srcset="${image} 342w, ${imageRetina} 780w" alt="${poster}"  loading="lazy">
    <h2 class="movie-card_title" >${title}</h2>
    <div class="movie-card_info">
    <p class = "movie-card_genres" title = "${captions.movieDetails.genres}">
        ${genres.join(', ')}
        </p>
        <p class="movie-card_symbol">|</p>
        <p class="movie-card_date" title = "${captions.movieDetails.release}">${release_date}</p>
        <p class="movie-card_avarage__accent" title ="${captions.movieDetails.rating}">${vote_average}</p>
    </div>
</article></li>`;
}
