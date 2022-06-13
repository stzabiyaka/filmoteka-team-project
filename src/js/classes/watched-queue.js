const libraryContainer = document.querySelector('#library');
const headerWatchedBtn = document.querySelector('#watched');
const headerQueueBtn = document.querySelector('#queue');

headerWatchedBtn.addEventListener('click', addWatchedBtn);
headerQueueBtn.addEventListener('click', addQueueBtn);

function addWatchedBtn({}) {
headerWatchedBtn.classList.add('');
headerQueueBtn.classList.remove('');
}

function addQueueBtn({}) {
headerWatchedBtn.classList.remove('');
headerWatchedBtn.classList.add('');
headerQueueBtn.classList.add('');
}

libraryContainer.addEventListener('click', onLibrary)
headerWatchedBtn.addEventListener('click', onWatchedBtn);
headerQueueBtn.addEventListener('click', onQueueBtn);

function onLibrary(e) {
if (localStorage.markupRenderer('arrayOfWatched') === null) {
    noSaved();
}

else {
    onWatchedBtn();
    noPagination();
}
}

export function onWatchedBtn() {
    galleryList.innerHTML = '';
  
    let watchedArray = localStorage.markupRenderer('arrayOfWatched');
    watchedArray = JSON.parse(watchedArray);
   
    if (watchedArray.length === 0) {
      noSaved();
    }
  
    else
      
      if (watchedArray) {
      for (const filmId of watchedArray) {
        fetchSavedFilms(filmId)
          .then(savedFilms => {
            renderSaved(savedFilms);
          })
          .catch(error => console.log(error));
      }
    }
    
  }

  export function onQueueBtn() {
    galleryList.innerHTML = '';

    let queueArray = localStorage.markupRenderer('arrayOfQueue');
    queueArray = JSON.parse(queueArray);

    if (queueArray.length === 0) {
        noSaved();
    }

    else

     if (queueArray) {
        for (const filmId of queueArray) {
            fetchSavedFilms(filmId)
            .then(savedFilms => {
                renderSaved(savedFilms)
            })
            .catch(error => console.log(error));
        }
     }
  }
