// Імпорт в index
// import isContentExist from './js/modules/is-content-exist';

// додаємо коментар
// const notification = 'От халепа(( зєднання з сервером відсутнє';

// Виклик функції для тесту
// isContentExist({
//   isContent: false,
//   notification: notification,
// });


import { REFS } from '../site-constants';

export default function isContentExist({ isContent, callback, notification }) {
  if (isContent) {
    REFS.libraryContainer.addEventListener('click', callback);
    return;
  }

  REFS.libraryContainer.innerHTML = `
  <div class="library__notification-conteiner">
    <p class="library__notification">${notification}</p>
  </div>
  `;

  REFS.libraryContainer.removeEventListener('click', callback);
}
