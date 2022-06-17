// // import { closeModal, onClickBackdrop, onCloseEscKey } from './js/templates/modal-close-btn';
import { REFS } from '../site-constants';

const { body, backdrop, modalContainer, modalCloseBtn } = REFS;

backdrop.addEventListener('click', onClickBackdrop);
window.addEventListener('keydown', onCloseEscKey);

function closeModal() {
  backdrop.classList.add('js-hidden');
  modalContainer.innerHTML = '';
  body.classList.remove('js-modal-is-open');
  backdrop.removeEventListener('click', onClickBackdrop);
  window.removeEventListener('keydown', onCloseEscKey);
}

function onClickBackdrop(e) {
  console.log(e.target);
  if (
    e.target === e.currentTarget ||
    e.target.parentElement === modalCloseBtn
  ) {
    closeModal();
  }
}

function onCloseEscKey(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

export { closeModal, onClickBackdrop, onCloseEscKey };
