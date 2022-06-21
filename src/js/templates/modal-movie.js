export function modalMovieMarkUp(obj) {
    let key;
    obj.results.forEach(el => {
        if (el.name === "Official Trailer") {
            key = el.key;
            return;
        }        
    });
    if(!key) {
        key = obj.results[0].key;
    }

    return `
        <iframe class="iframe" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${key}?autoplay=1" >
        </iframe>
    `
}