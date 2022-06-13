import { testRefs } from "../templates/modal-tmpl";
import { modalCardMarkUp } from "../templates/modal-tmpl";


export function renderModalCard() {     
    testRefs.backdrop.classList.remove('is-hidden');

    

    const string = modalCardMarkUp({
        about: `Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?`,
        imgSrc: "../images/modal-test/rectangle-18-mobile.jpg",
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