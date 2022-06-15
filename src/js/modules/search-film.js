

// searchFormContainer: document.querySelector('#search-rorm-container'),
// searchForm: document.querySelector('#search-form'),
// buttonSearch:document.querySelector('#search-button')



import { testRefs } from "../templates/modal-tmpl";


testRefs.searchForm.addEventListener('input', validateLength)

 function validateLength (event) {

     let form = event.currentTarget.value.trim();
     console.log(form);
     const str = this.value

     if(this.value.length === 0 || this.value.length <= 2) {
         console.log('Search was not successful. Please, enter another movie name and try again')
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
        return true
        
    }
     
    // //заборона вводу символів 
    // this.value= str.replace(/[\s%&#@]/g, '')

