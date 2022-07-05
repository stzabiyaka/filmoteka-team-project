import { REFS } from '../../site-constants';

export default class Spinner {
  #spinner;
  constructor() {
    this.#spinner = REFS.spinner;
  }

  showSpinner() {
    this.#spinner.classList.remove('js-hidden');
  }

  hideSpinner() {
    this.#spinner.classList.add('js-hidden');
  }
}
