// import isContentExist from './js/modules/is-content-exist';


import { REFS } from '../site-constants';

export default function isContentExist({ isContent, callback }) {
  if (isContent) {
    REFS.libraryContainer.addEventListener('click', callback);
    return;
  }

  REFS.libraryContainer.removeEventListener('click', callback);
}
