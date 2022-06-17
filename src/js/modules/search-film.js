import { REFS } from "../site-constants";

REFS.searchForm.addEventListener('input', validateLength);
function validateLength (event) {

    let form = event.currentTarget.value.trim();
    console.log(form);
    const str = this.value;

    if(this.value.length < 2) {
        console.log('Search was not successful. Please, enter another movie name and try again');
       return false
   } else if ((/^([а-яА-ЯёЁ]*)$/.test(str))) {
       (console.log('тільки кирилиця'))
   } else if  ((/^([a-zA-Z]*)$/.test(str))) {
       (console.log('тільки латиниця'))
   } else if ((/^([\s%&#@])*$/.test(str))) {
       (console.log('недопустимі символи'))
   } else if ((/^([>(.*?)<])*$/.test(str))) {
       (console.log('теги HTML'))
   }
       console.log (`HOORAY! Found total_results movies`)
       return str
       
   }