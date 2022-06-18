export default function userActive(active) {
  const userActiveCl = new UserPreferencesService();
  let userActive = userActiveCl.getPreferences().user;
  userActive = active;
  if (userActive) {
    return console.log('З поверненням на сайт)');
  }
  return console.log('Ласкаво просимо)');
}
