import ModalHandler from '../classes/page-handlers/modal-handler';
import { renderModalCard } from '../templates/modal';
import cardParser from './card-parser';

export default function markupRenderer({ loader, target, content }) {
  target.removeEventListener('click', renderModalCard);
  loader(content)
    .then(data => {
      const markup = data.results
        .map(result => {
          return cardParser(result);
        })
        .join('');
      target.innerHTML = markup;

      target.addEventListener('click', renderModalCard);
    })
    .catch(error => {
      target.innerHTML = "content doesn't exist";
    });
}
