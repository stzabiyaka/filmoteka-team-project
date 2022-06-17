import { REFS } from "../site-constants";

REFS.searchForm.addEventListener('input', validateLength);
function validateLength (event) {

    let form = event.currentTarget.value.trim();
    console.log(form);
    const str = this.value;
    if ((/^([\s%&#@])*$/.test(str)) || (/^([>(.*?)<])*$/.test(str))) {
        (console.log('недопустимі символи & теги')) 
        return;
    }
    if ((/^([а-яА-ЯёЁ]*)$/.test(str))) {
       (console.log('тільки кирилиця'))
   } 
   if(this.value.length < 2) {
    console.log('Search was not successful. Please, enter another movie name and try again');
   return false;
   } 
       console.log (`HOORAY! Found total_results movies`)
       return str
       
   }