import ImagesPathConstructor from '../classes/utilities/images-path-constructor';
import noPoster from '../../images/poster.svg';

export function modalCardMarkUp({
  overview,
  poster_path,
  title,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  captions,
}) {
  let imgSrcMobile = noPoster;
  let imgSrcTablet = noPoster;
  let imgSrcDesktop = noPoster;
  if (poster_path) {
    imgSrcMobile = `${ImagesPathConstructor.getImagePath({
      path: poster_path,
    })}`;
    imgSrcTablet = `${ImagesPathConstructor.getImagePath({
      path: poster_path,
      width: 'middle',
    })}`;

    imgSrcDesktop = `${ImagesPathConstructor.getImagePath({
      path: poster_path,
      width: 'retina',
    })}`;
  }

  const vote = captions.movieDetails.vote;
  const votes = captions.movieDetails.votes;
  const popularityString = captions.movieDetails.popularity;
  const originalTitle = captions.movieDetails.title;
  const genre = captions.movieDetails.genre;
  const about = captions.movieDetails.about;
  const popularityData = Number(popularity).toFixed(2);

  return `
    <article class="modal-card__article">
        <div class="modal-card-thumb__img" >         
            <div class="modal-card__picture" >                 
                <img class="modal-card__img  lazyload" data-src="${imgSrcMobile}" data-srcset="${imgSrcMobile} 342w, ${imgSrcTablet} 500w, ${imgSrcDesktop} 780w" alt="${title}" sizes="300px" loading="lazy" type="image/jpeg" id="img-in-modal-card-picture"/>
            </div>
        </div>
        <div class="modal-card-thumb__content">
            <div class="modal-card-info">
                <h2 class="modal-card-info__title">${title}</h2>
                <div class="modal-card__thumb--characteristics">
                    <ul class="modal-card-info__characteristics">
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${vote}/${votes}</p>
                            <p class="modal-card-info__data modal-card-info__data--slesh">
                                <span class="modal-card-info__data--vote">${vote_average.toFixed(
                                  1
                                )}</span>
                                /
                                <span class="modal-card-info__data--votes">${vote_count}</span>
                            </p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${popularityString}</p>
                            <p class="modal-card-info__data modal-card-info__data--popularity">${popularityData}</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${originalTitle}</p>
                            <p class="modal-card-info__data modal-card-info__data--original-title">${original_title}</p>
                        </li>
                        <li class="modal-card-info__characteristics--item">
                            <p class="modal-card-info__characteristics--name">${genre}</p>
                            <p class="modal-card-info__data modal-card-info__data--genre">${genres.join(
                              ', '
                            )}</p>
                        </li>
                    </ul>
                    
                </div>
                <h3 class="modal-card-info-about__title">${about}</h3>
                <p class="modal-card-info-about__description">${overview}</p>
            </div>
            
        </div>
    </article>
    `;
}
