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
  return `<a  class="movie-card" data-movie-id="${id}"><article>
    <h2 class="visually_hidden">${title}</h2>
    <picture>
        <source srcset="${image}, 1x, ${imageRetina}, 2x" type="image/jpeg">
        <img class="movie-card_img" src= "${image}" alt="${poster}"  loading="lazy">
    </picture>
    <h2 class="movie-card_title" >${title}</h2>
    <div class="movie-card_info">
    <p class = "movie-card_genres" title = "genres">
        ${genres.join(', ')}
        </p>
        <p class="movie-card_symbol">|</p>
        <p class="movie-card_date" title = "release year">${release_date}</p>
        <p class="movie-card_avarage__accent" title ="vote average">${vote_average}</p>
    </div>
</article></a>`;
}
