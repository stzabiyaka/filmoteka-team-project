function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(t.set)t.set.call(e,a);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=a}}}));const r={body:document.body,headerContainer:document.querySelector("#header"),headerLogo:document.querySelector("#logo"),headerHomeBtn:document.querySelector("#home"),headerMyLibBtn:document.querySelector("#my-library"),collectionsBtnsContainer:document.querySelector("#collections-nav"),collectionWatchedBtn:document.querySelector("#watched"),collectionQueueBtn:document.querySelector("#queue"),searchFormContainer:document.querySelector("#search-rorm-container"),searchForm:document.querySelector("#search-form"),libraryContainer:document.querySelector("#library"),backdrop:document.querySelector("#backdrop"),modalContainer:document.querySelector("#modal"),modalAddToWatchedBtn:document.querySelector("#watched-add"),modalAddToQueueBtn:document.querySelector("#queue-add"),modalCloseBtn:document.querySelector("#modal-close"),teamLink:document.querySelector("#team"),paginator:document.querySelector("#paginator")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var a=o.default(e,t,"get");return l.default(e,a)};var o=d(n("fExtF")),l=d(n("iaRLo"));function d(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,a){h.default(e,t),t.set(e,a)};var u,h=(u=n("7K24o"))&&u.__esModule?u:{default:u};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,a){var i=p.default(e,t,"set");return m.default(e,i,a),a};var p=f(n("fExtF")),m=f(n("3LGG3"));function f(e){return e&&e.__esModule?e:{default:e}}var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a};var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t){_.default(e,t),t.add(e)};var _=function(e){return e&&e.__esModule?e:{default:e}}(n("7K24o"));var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a;return e};var w=new WeakMap,P=new WeakMap,S=new WeakMap,M=new WeakSet,$=new WeakSet,k=new WeakSet;async function j(e){const t=await fetch(e);if(!t.ok)throw new Error(t.status);return await t.json()}function A(e){e.forEach((e=>{e.genre_ids=e.genre_ids.map((e=>this.genres.find((t=>t.id===e)).name)),e.genres=e.genre_ids,delete e.genre_ids}))}function q(e){e.genres=e.genres.map((e=>e.name))}var C=new WeakMap;class x{save(t){try{const a=JSON.stringify(t);localStorage.setItem(e(s)(this,C),a)}catch(e){console.log("Set state error:",e.message)}}load(){try{let t=localStorage.getItem(e(s)(this,C));return t=null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}}remove(){localStorage.removeItem(e(s)(this,C))}constructor(t){e(c)(this,C,{writable:!0,value:void 0}),e(g)(this,C,t)}}var E=new WeakMap,L=new WeakSet;function T(){e(g)(this,E,this.load()),e(s)(this,E)||e(g)(this,E,{language:"default",theme:"default"})}var O=new WeakMap,I=new WeakMap,R=new WeakSet,W=new WeakSet;class G extends x{getCollectionPage({page:t=1}){if(!this.isCollectionExist())return void console.log("Collection is empty");if(this.currentPage=t,void 0===e(s)(this,O)||e(s)(this,O)===[]||this.currentPage>e(s)(this,I))return;const a=(this.currentPage-1)*this.perPage;return{bundle:1===e(s)(this,I)?e(s)(this,O):e(s)(this,O).slice(a,a+this.perPage),totalPages:e(s)(this,I),page:this.currentPage}}addToCollection({id:t=null}){t&&!this.isInCollection({id:t})&&(e(s)(this,O).push(t),e(v)(this,W,B).call(this))}removeFromCollection({id:t=null}){if(!this.isInCollection(t))return;const a=e(s)(this,O).indexOf(t);e(s)(this,O).splice(a,1),e(v)(this,W,B).call(this)}isInCollection({id:t=null}){if(t)return e(s)(this,O).includes(t)}isCollectionExist(){return!!e(s)(this,I)}set currentPage(e){this.currentPage=e}get currentPage(){return this.currentPage}set perPage(e){this.perPage=e}get perPage(){return this.perPage}resetCurrentPage(){this.currentPage=1}constructor(t){super(t),e(b)(this,R),e(b)(this,W),e(y)(this,"currentPage",void 0),e(y)(this,"perPage",void 0),e(c)(this,O,{writable:!0,value:void 0}),e(c)(this,I,{writable:!0,value:void 0}),e(g)(this,I,0),this.perPage=9,this.currentPage=1,e(v)(this,R,U).call(this)}}function U(){e(g)(this,O,this.load()),e(s)(this,O)||e(g)(this,O,[]),e(g)(this,I,Math.ceil(e(s)(this,O).length/this.perPage))}function B(){this.save(e(s)(this,O))}class F{static getImagePath({path:e,width:t}){const a=Object.keys(this.width).includes(t)?this.width[t]:this.width.default;return`${this.BASE_URL}${a}${e}`}}function N({genres:e,poster_path:t,release_date:a,title:i,vote_average:n,id:r}){if(0!==e.length)return(e=e.map((e=>`<span class="movie-card_genres">${e}</span>`))).length>2&&(e=e.slice(0,2)).push('<span class="movie-card_genres">Other</span>'),`<article class="movie-card" data-movie-id="${r}">\n    <picture>\n        <source srcset="${F.getImagePath({path:t})}, 1x, ${F.getImagePath({path:t,width:"retina"})}, 2x" type="image/jpeg">\n        <img class="movie-card_img" src= "${F.getImagePath({path:t})} " alt=${i}>\n    </picture>\n    <h2 class="movie-card_title">${i}</h2>\n    <div class="movie-card_info">\n        ${e.join(", ")}\n        <p class="movie-card_symbol">|</p>\n        <p class="movie-card_date">${a}</p>\n        <div class="movie-card_avarage">\n            <p class="movie-card_avarage__accent">${n}</p>\n        </div>\n    </div>\n</article>`}e(y)(F,"BASE_URL","https://image.tmdb.org/t/p/"),e(y)(F,"width",{default:"w342",retina:"w780",original:"original"});const D={backdrop:document.querySelector("#backdrop-modal-card"),testOpenModalCard:document.querySelector("#try-to-open-modal-card"),modalContainer:document.querySelector("#modal"),sourseInModalCardDesktop:document.querySelector("#sourse-in-modal-card-desktop"),sourseInModalCardTablet:document.querySelector("#sourse-in-modal-card-tablet"),sourseInModalCardMobile:document.querySelector("#sourse-in-modal-card-mobile"),imgInModalCardPicture:document.querySelector("#img-in-modal-card-picture")};function z({about:e,imgSrc:t,imgAlt:a,originalTitle:i,vote:n,votes:r,popularity:s,genre:o}){return`\n           \n        <div class="modal-card-thumb__img" id="modal">\n        <picture class="modal-card__img">\n            <source media='(min-width:1280px)' srcset="./images/modal-test/rectangle-18-desktop.jpg 375w, ./images/modal-test/rectangle-18-desktop@2x.jpg 750w" sizes="375px" type="image/jpeg" id="sourse-in-modal-card-desktop">\n            <source media='(min-width:768px)' srcset="./images/modal-test/rectangle-18-tablet.jpg 264w, ./images/modal-test/rectangle-18-tablet@2x.jpg 528w" sizes="264px" type="image/jpeg" id="sourse-in-modal-card-tablet">\n            <source media='(min-width:320px)' srcset="./images/modal-test/rectangle-18-mobile.jpg 240w, ./images/modal-test/rectangle-18-mobile@2x.jpg 480w" sizes="240px" type="image/jpeg" id="sourse-in-modal-card-mobile">\n            <img src="${t}" alt="${a}" loading="lazy" type="image/jpeg id="img-in-modal-card-picture"/>\n        </picture>\n        </div>   \n            \n        <div class="modal-card-thumb__content">\n            <div class="modal-card-info">\n                <h2 class="modal-card-info__title">${i}</h2>\n                <p class="modal-card-info__item">\n                    <b>Vote/Votes</b>\n                    <span class="modal-card-info__item--vote">${n}</span>\n                    <span>/</span>\n                    <span class="modal-card-info__item--votes">${r}</span>\n                </p>\n                <p class="modal-card-info__item">\n                    <b>Popularity</b>\n                    <span>${s}</span>\n                </p>\n                <p class="modal-card-info__item">\n                    <b>Original Title</b>\n                    <span>${i}</span>\n                </p>\n                <p class="modal-card-info__item modal-card-info__item--last-item">\n                    <b>Genre</b>\n                    <span>${o}</span>\n                </p>\n                <h3 class="modal-card-info-about__title">About</h3>\n                <p class="modal-card-info-about__description">${e}</p>\n            </div>\n            <div class="modal-card-thumb__btn">\n                <button type="button" id="watched-add" title="add to Watched" class="modal-card-btn__watched">add to Watched</button>\n                <button type="button" id="queue-add" title="add to Queue" class="modal-card-btn__queue">add to queue</button>\n            </div>\n        </div>\n    \n    `}let Q=new class extends x{getPreferences(){return e(s)(this,E)}constructor(t){super(t),e(b)(this,L),e(c)(this,E,{writable:!0,value:void 0}),e(v)(this,L,T).call(this)}}("userPreferences").getPreferences().language;const H=new class{async getGenres(){const t=`${e(s)(this,P)}/${this.URL_PARAMETERS.genres}?api_key=${e(s)(this,w)}&language=${e(s)(this,S)}`,a=await e(v)(this,M,j).call(this,t);this.genres=a.genres}async getTrendingMovies(){const t=`${e(s)(this,P)}/${this.URL_PARAMETERS.trending}?api_key=${e(s)(this,w)}&page=${this.page}&language=${e(s)(this,S)}`,a=await e(v)(this,M,j).call(this,t);return e(v)(this,$,A).call(this,a.results),a}async searchMovies({query:t}){const a=`${e(s)(this,P)}/${this.URL_PARAMETERS.search}?api_key=${e(s)(this,w)}&language=${e(s)(this,S)}&query=${t}&page=${this.page}&include_adult=false`,i=await e(v)(this,M,j).call(this,a);return e(v)(this,$,A).call(this,i.results),i}async getMovie({movieId:t}){const a=`${e(s)(this,P)}/${this.URL_PARAMETERS.movieDetails}/${t}?api_key=${e(s)(this,w)}&language=${e(s)(this,S)}`,i=await e(v)(this,M,j).call(this,a);return e(v)(this,k,q).call(this,i),i}async getMoviesBundle({bundle:e,page:t=1,total_pages:a=1}){const i=e.map((e=>this.getMovie({movieId:e})));return{results:await Promise.all(i),page:t,total_pages:a}}resetPage(){this.page=1}set page(e){this.page=e}get page(){return this.page}incrementPage(){this.page+=1}decrementPage(){this.page-=1}setCurrentLanguage({language:t}){e(g)(this,S,Object.values(this.LANGUAGES).includes(t)?t:this.LANGUAGES.default),this.getGenres()}constructor({language:t="default"}){e(b)(this,M),e(b)(this,$),e(b)(this,k),e(c)(this,w,{writable:!0,value:void 0}),e(c)(this,P,{writable:!0,value:void 0}),e(y)(this,"page",void 0),e(c)(this,S,{writable:!0,value:void 0}),e(g)(this,w,"704d5b04a49684ea4810e36d12ae79df"),e(g)(this,P,"https://api.themoviedb.org/3"),this.URL_PARAMETERS={trending:"trending/movie/day",search:"search/movie",movieDetails:"movie",genres:"genre/movie/list"},this.LANGUAGES={default:"en-US",ukrainian:"uk-UA"},this.page=1,this.genres=null,this.setCurrentLanguage({language:this.LANGUAGES[t]})}}({language:Q});new G("moviesWatched"),new G("moviesQueue");D.testOpenModalCard.addEventListener("click",(function(){D.backdrop.classList.remove("is-hidden"),D.modalContainer.insertAdjacentHTML("beforeend",z({about:"Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?",imgSrc:"./images/modal-test/rectangle-18-mobile.jpg",imgAlt:"test",originalTitle:"A FISTFUL OF LEAD",vote:"7.3",votes:"1260",popularity:"100.2",genre:"Western"})),D.sourseInModalCardMobile.setAttribute("type","image/jpeg"),D.sourseInModalCardTablet.setAttribute("type","image/jpeg"),D.sourseInModalCardDesktop.setAttribute("type","image/jpeg"),D.imgInModalCardPicture.setAttribute("type","image/jpeg")})),function({loader:e,target:t,content:a}){e(a).then((e=>{const a=e.results.map((e=>N(e))).join("");t.innerHTML=a})).catch(console.log)}({loader:H.getTrendingMovies.bind(H),target:r.libraryContainer});
//# sourceMappingURL=index.f510223f.js.map
