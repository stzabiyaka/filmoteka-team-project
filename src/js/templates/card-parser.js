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
  let ImageMiddle = noPoster;
  let imageRetina = noPoster;
  if (poster_path) {
    image = ImagesPathConstructor.getImagePath({ path: poster_path });
    ImageMiddle = ImagesPathConstructor.getImagePath({
      path:poster_path,
      width: 'middle',
    })
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
  return `<li class="movie-card" data-movie-id="${id}"><a class="movie-card__link" href="#"><article>
    <h2 class="visually_hidden">${title}</h2>
        <img class="movie-card__img lazyload" data-src="${image}" data-srcset="${image} 342w, ${ImageMiddle} 500w, ${imageRetina} 780w" sizes="342px" alt="${poster}"  loading="lazy">
    <h2 class="movie-card__title" >${title}</h2>
    <div class="movie-card__info">
    <p class = "movie-card__genres" title = "${captions.movieDetails.genres}">
        ${genres.join(', ')}
        |<span class="movie-card__date" title = "${captions.movieDetails.release}">${release_date}</span>
        <span class="movie-card__avarage" title ="${captions.movieDetails.rating}">${vote_average}</span>
    </p>
    </div>
</article></a></li>`;
}
