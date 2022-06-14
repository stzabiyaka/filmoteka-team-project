import { testRefs } from "../templates/modal-tmpl";
import { modalCardMarkUp } from "../templates/modal-tmpl";
import { REFS } from "../site-constants";

export function renderModalCard() {     
    testRefs.backdrop.classList.remove('js-hidden');
    REFS.body.classList.add('js-modal-is-open');
    // REFS.body.classList.remove('js-modal-is-open'); 
    //це треба вставити при обробці кліку по кнопці закриття модалки чи backdrop`y чи клавіші esc

    const string = modalCardMarkUp({
        about: `Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?`,
        imgSrc: "https://image.tmdb.org/t/p/original//ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg",
        imgAlt: "test",
        originalTitle: "A FISTFUL OF LEAD",
        vote: "7.3",
        votes: "1260",
        popularity: "100.2",
        genre: "Western",
    });
    testRefs.modalContainer.innerHTML = string;    
}

// "/fVf4YHHkRfo1uuljpWBViEGmaUQ.jpg"

//https://image.tmdb.org/t/p/w400/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg
//https://image.tmdb.org/t/p/original//fVf4YHHkRfo1uuljpWBViEGmaUQ.jpg
//https://image.tmdb.org/t/p/original//ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg