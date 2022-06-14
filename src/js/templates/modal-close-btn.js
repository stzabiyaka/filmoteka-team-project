import { REFS } from "../site-constants";

const { body, backdrop, modalCloseBtn, modalContainer} = REFS;

modalCloseBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onClickBackdrop);
window.addEventListener('keydown', onCloseEscKey);

export function closeModal() {
backdrop.classList.add('js-hidden');
modalContainer.innerHTML = '';
  //for body no-scroll   //
body.classList.remove('js-modal-is-open');
}

export function onClickBackdrop(e) {
    if (e.target === e.currentTarget) {
        closeModal();
        modalContainer.innerHTML = '';
    }
  }

export function onCloseEscKey(e) {
  if (e.key === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', onCloseEscKey);
  }
}