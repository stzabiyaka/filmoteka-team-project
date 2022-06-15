import { REFS } from "../site-constants";

const { body, backdrop, modalCloseBtn } = REFS;

modalCloseBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onClickBackdrop);
window.addEventListener('keydown', onCloseEscKey);

function closeModal() {
backdrop.classList.add('js-hidden');
  //for body no-scroll   //
    body.classList.remove('js-modal-is-open');
}

function onClickBackdrop(e) {
    if (e.target === e.currentTarget) {
        closeModal();
    }
  }

function onCloseEscKey(e) {
  if (e.key === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', onCloseEscKey);
  }
}

export { closeModal, onClickBackdrop, onCloseEscKey };