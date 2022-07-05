export default class ToTopButton {
  constructor() {
    this.button = document.getElementById('to-top-button');
    this.checkHandler = this.check.bind(this);
    this.show();
  }

  /* Відображення кнопки */
  show() {
    window.addEventListener('scroll', this.checkHandler);
  }

  /* Логіка відображення та ховання кнопки */
  check() {
    if (document.documentElement.scrollTop > 70) {
      this.button.classList.add('is-visible');
      this.button.addEventListener('click', this.scrollToTop);
    } else {
      this.button.classList.remove('is-visible');
      this.button.removeEventListener('click', this.scrollToTop);
    }
  }

  /* Видалення EventListener */
  remove() {
    window.removeEventListener('scroll', this.checkHandler);
    alert('removed');
  }

  /* Скролл до початку сторінки сайту */
  scrollToTop() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }, 250);
  }
}
