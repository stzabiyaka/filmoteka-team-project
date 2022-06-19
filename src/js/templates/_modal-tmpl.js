import ImagesPathConstructor from "../classes/utilities/images-path-constructor";

export function modalCardMarkUp({ overview, poster_path, title, original_title, vote_average, vote_count, popularity, genres, homepage, captions }) { 
    
    const imgSrcMobile = `${ImagesPathConstructor.getImagePath({ path: poster_path })}`;
    const imgSrcTablet = `${ImagesPathConstructor.getImagePath({ path: poster_path, width:'retina' })}`;
    const imgSrcDesktop = `${ImagesPathConstructor.getImagePath({ path: poster_path, width: 'original' })}`;

    const imgSrc =`${imgSrcTablet} 1x, ${imgSrcDesktop} 2x`;
    
    const vote = captions.movieDetails.vote;
    const votes = captions.movieDetails.votes;
    const popularityString = captions.movieDetails.popularity;
    const originalTitle = captions.movieDetails.title;
    const genre = captions.movieDetails.genre;
    const about = captions.movieDetails.about;
    const popularityData = popularity.toFixed(2);

    return  `

        <div class="modal-card-thumb__img" >         
            <div class="modal-card__picture" >                 
                <img srcset="${imgSrc}" src="${imgSrcMobile}" alt="${title}" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>
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
                                <span class="modal-card-info__data--vote">${vote_average}</span>
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
                            <p class="modal-card-info__data modal-card-info__data--genre">${genres.join(', ')}</p>
                        </li>
                    </ul>
                    
                </div>
                <h3 class="modal-card-info-about__title">${about}</h3>
                <p class="modal-card-info-about__description">${overview}</p>
            </div>
            
        </div>
    
    `
}