export function modalMovieMarkUp(obj) {
    if(obj.results.length === 0 ) {
        return false;
    }
    let key;
    obj.results.find(el => {
        if (el.name.toLowerCase().includes('official') && el.name.toLowerCase().includes('trailer')) {
            key = el.key;
            return;
        }     
    });
    
    if(!key) {
        obj.results.find(el => {
            if (el.official) {
                key = el.key;
                return;
            } 
        });
    }

    if(!key) {
            key = obj.results[0].key;
    }
  
    return `
        <iframe class="iframe" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${key}?autoplay=1" >
        </iframe>
    `
}