function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(t.set)t.set.call(e,a);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=a}}}));const n={home:"home",search:"search results",watched:"watched",queue:"queue"},r={body:document.body,headerContainer:document.querySelector("#header"),headerLogo:document.querySelector("#logo"),headerHomeBtn:document.querySelector("#home"),headerMyLibBtn:document.querySelector("#my-library"),collectionsBtnsContainer:document.querySelector("#collections-nav"),collectionWatchedBtn:document.querySelector("#watched"),collectionQueueBtn:document.querySelector("#queue"),searchFormContainer:document.querySelector("#search-rorm-container"),searchForm:document.querySelector("#search-form"),libraryContainer:document.querySelector("#library"),backdrop:document.querySelector("#backdrop"),modalContainer:document.querySelector("#modal"),modalAddToWatchedBtn:document.querySelector("#watched-add"),modalAddToQueueBtn:document.querySelector("#queue-add"),modalCloseBtn:document.querySelector("#modal-close"),teamLink:document.querySelector("#team"),paginator:document.querySelector("#paginator")};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var a=l.default(e,t,"get");return d.default(e,a)};var l=c(s("fExtF")),d=c(s("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,a){g.default(e,t),t.set(e,a)};var h,g=(h=s("7K24o"))&&h.__esModule?h:{default:h};var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,a){var i=p.default(e,t,"set");return f.default(e,i,a),a};var p=v(s("fExtF")),f=v(s("3LGG3"));function v(e){return e&&e.__esModule?e:{default:e}}var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a};var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t){w.default(e,t),t.add(e)};var w=function(e){return e&&e.__esModule?e:{default:e}}(s("7K24o"));var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a;return e};var P=new WeakMap,S=new WeakMap,E=new WeakMap,M=new WeakSet,L=new WeakSet,$=new WeakSet;async function A(e){const t=await fetch(e);if(!t.ok)throw new Error(t.status);return await t.json()}function k(e){e.forEach((e=>{e.genre_ids=e.genre_ids.map((e=>this.genres.find((t=>t.id===e)).name)),e.genres=e.genre_ids,delete e.genre_ids}))}function q(e){e.genres=e.genres.map((e=>e.name))}var O=new WeakMap;class C{save(t){try{const a=JSON.stringify(t);localStorage.setItem(e(o)(this,O),a)}catch(e){console.log("Set state error:",e.message)}}load(){try{let t=localStorage.getItem(e(o)(this,O));return t=null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}}remove(){localStorage.removeItem(e(o)(this,O))}constructor(t){e(u)(this,O,{writable:!0,value:void 0}),e(m)(this,O,t)}}var T=new WeakMap,W=new WeakSet;function x(){e(m)(this,T,this.load()),e(o)(this,T)||e(m)(this,T,{language:"default",theme:"default",isUser:void 0})}var U=new WeakMap,j=new WeakMap,R=new WeakSet,G=new WeakSet;class B extends C{getCollectionPage({page:t=1}){if(!this.isCollectionExist())return void console.log("Collection is empty");if(this.currentPage=t,void 0===e(o)(this,U)||e(o)(this,U)===[]||this.currentPage>e(o)(this,j))return;const a=(this.currentPage-1)*this.perPage;return{bundle:1===e(o)(this,j)?e(o)(this,U):e(o)(this,U).slice(a,a+this.perPage),totalPages:e(o)(this,j),page:this.currentPage}}addToCollection({id:t=null}){t&&!this.isInCollection({id:t})&&(e(o)(this,U).push(t),e(_)(this,G,H).call(this))}removeFromCollection({id:t=null}){if(!this.isInCollection(t))return;const a=e(o)(this,U).indexOf(t);e(o)(this,U).splice(a,1),e(_)(this,G,H).call(this)}isInCollection({id:t=null}){if(t)return e(o)(this,U).includes(t)}isCollectionExist(){return!!e(o)(this,j)}set currentPage(e){this.currentPage=e}get currentPage(){return this.currentPage}set perPage(e){this.perPage=e}get perPage(){return this.perPage}resetCurrentPage(){this.currentPage=1}constructor(t){super(t),e(b)(this,R),e(b)(this,G),e(y)(this,"currentPage",void 0),e(y)(this,"perPage",void 0),e(u)(this,U,{writable:!0,value:void 0}),e(u)(this,j,{writable:!0,value:void 0}),e(m)(this,j,0),this.perPage=9,this.currentPage=1,e(_)(this,R,D).call(this)}}function D(){e(m)(this,U,this.load()),e(o)(this,U)||e(m)(this,U,[]),e(m)(this,j,Math.ceil(e(o)(this,U).length/this.perPage))}function H(){this.save(e(o)(this,U))}class I{static getImagePath({path:e,width:t}){const a=Object.keys(this.width).includes(t)?this.width[t]:this.width.default;return`${this.BASE_URL}${a}${e}`}}function F({genres:e,poster_path:t,release_date:a,title:i,vote_average:s,id:n}){if(0!==e.length)return(e=e.map((e=>`<span class="movie-card_genres">${e}</span>`))).length>2&&(e=e.slice(0,2)).push('<span class="movie-card_genres">Other</span>'),`<article class="movie-card" data-movie-id="${n}">\n    <picture>\n        <source srcset="${I.getImagePath({path:t})}, 1x, ${I.getImagePath({path:t,width:"retina"})}, 2x" type="image/jpeg">\n        <img class="movie-card_img" src= "${I.getImagePath({path:t})} " alt=${i}>\n    </picture>\n    <h2 class="movie-card_title">${i}</h2>\n    <div class="movie-card_info">\n        ${e.join(", ")}\n        <p class="movie-card_symbol">|</p>\n        <p class="movie-card_date">${a}</p>\n        <div class="movie-card_avarage">\n            <p class="movie-card_avarage__accent">${s}</p>\n        </div>\n    </div>\n</article>`}function N({loader:e,target:t,content:a}){e(a).then((e=>{const a=e.results.map((e=>F(e))).join("");t.innerHTML=a})).catch(console.log)}e(y)(I,"BASE_URL","https://image.tmdb.org/t/p/"),e(y)(I,"width",{default:"w342",retina:"w780",original:"original"});const Q={backdrop:document.querySelector("#backdrop-modal-card"),testOpenModalCard:document.querySelector("#try-to-open-modal-card"),modalContainer:document.querySelector("#modal")};function K({about:e,imgSrc:t,imgAlt:a,originalTitle:i,vote:s,votes:n,popularity:r,genre:o}){return`\n\n        <div class="modal-card-thumb__img" >\n            <img src="${t}" alt="${a}" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>\n        </div>   \n            \n        <div class="modal-card-thumb__content">\n            <div class="modal-card-info">\n                <h2 class="modal-card-info__title">${i}</h2>\n                <div class="modal-card__thumb--characteristics">\n                    <ul class="modal-card-info__characteristics">\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Vote/Votes</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Popularity</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Original Title</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Genre</p>\n                        </li>\n                    </ul>\n                    <ul class="modal-card-info__data">\n                        <li class="modal-card-info__data--item">                            \n                            <p class="modal-card-info__data--slesh">\n                                <span class="modal-card-info__data--vote">${s}</span>\n                                /\n                                <span class="modal-card-info__data--votes">${n}</span>\n                            </p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--popularity">${r}</p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--original-title">${i}</p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--genre">${o}</p>\n                        </li>\n                    </ul>\n                </div>\n                <h3 class="modal-card-info-about__title">About</h3>\n                <p class="modal-card-info-about__description">${e}</p>\n            </div>\n            <div class="modal-card-thumb__btn">\n                <button type="button" id="watched-add" title="add to Watched" class="modal-card-btn__watched">add to Watched</button>\n                <button type="button" id="queue-add" title="add to Queue" class="modal-card-btn__queue">add to queue</button>\n            </div>\n        </div>\n    \n    `}var z=new WeakMap,J=new WeakMap,V=new WeakMap,Z=new WeakSet;function X(){const e=r.headerHomeBtn.disabled;r.headerHomeBtn.disabled=!e,r.headerMyLibBtn.disabled=e,r.headerLogo.classList.toggle("disabled")}let Y=new class extends C{getPreferences(){return e(o)(this,T)}setLanguage({language:t}){e(o)(this,T).language=t,this.save(e(o)(this,T))}setTheme({theme:t}){e(o)(this,T).theme=t,this.save(e(o)(this,T))}setIsUser({isUser:t}){e(o)(this,T).isUser=t,this.save(e(o)(this,T))}constructor(t){super(t),e(b)(this,W),e(u)(this,T,{writable:!0,value:void 0}),e(_)(this,W,x).call(this)}}("userPreferences").getPreferences().language;const ee=new class{async getGenres(){const t=`${e(o)(this,S)}/${this.URL_PARAMETERS.genres}?api_key=${e(o)(this,P)}&language=${e(o)(this,E)}`,a=await e(_)(this,M,A).call(this,t);this.genres=a.genres}async getTrendingMovies(){const t=`${e(o)(this,S)}/${this.URL_PARAMETERS.trending}?api_key=${e(o)(this,P)}&page=${this.page}&language=${e(o)(this,E)}`,a=await e(_)(this,M,A).call(this,t);return e(_)(this,L,k).call(this,a.results),a}async searchMovies({query:t}){const a=`${e(o)(this,S)}/${this.URL_PARAMETERS.search}?api_key=${e(o)(this,P)}&language=${e(o)(this,E)}&query=${t}&page=${this.page}&include_adult=false`,i=await e(_)(this,M,A).call(this,a);return e(_)(this,L,k).call(this,i.results),i}async getMovie({movieId:t}){const a=`${e(o)(this,S)}/${this.URL_PARAMETERS.movieDetails}/${t}?api_key=${e(o)(this,P)}&language=${e(o)(this,E)}`,i=await e(_)(this,M,A).call(this,a);return e(_)(this,$,q).call(this,i),i}async getMoviesBundle({bundle:e,page:t=1,total_pages:a=1}){const i=e.map((e=>this.getMovie({movieId:e})));return{results:await Promise.all(i),page:t,total_pages:a}}resetPage(){this.page=1}set page(e){this.page=e}get page(){return this.page}incrementPage(){this.page+=1}decrementPage(){this.page-=1}setCurrentLanguage({language:t}){e(m)(this,E,Object.values(this.LANGUAGES).includes(t)?t:this.LANGUAGES.default),this.getGenres()}constructor({language:t="default"}){e(b)(this,M),e(b)(this,L),e(b)(this,$),e(u)(this,P,{writable:!0,value:void 0}),e(u)(this,S,{writable:!0,value:void 0}),e(y)(this,"page",void 0),e(u)(this,E,{writable:!0,value:void 0}),e(m)(this,P,"704d5b04a49684ea4810e36d12ae79df"),e(m)(this,S,"https://api.themoviedb.org/3"),this.URL_PARAMETERS={trending:"trending/movie/day",search:"search/movie",movieDetails:"movie",genres:"genre/movie/list"},this.LANGUAGES={default:"en-US",ukrainian:"uk-UA"},this.page=1,this.genres=null,this.setCurrentLanguage({language:this.LANGUAGES[t]})}}({language:Y}),te=new B("moviesWatched"),ae=new B("moviesQueue");new class{init(){r.headerLogo.addEventListener("click",this.homeHandler.bind(this)),r.headerHomeBtn.addEventListener("click",this.homeHandler.bind(this)),r.headerMyLibBtn.addEventListener("click",this.watchedHandler.bind(this))}homeHandler(t){r.collectionsBtnsContainer.classList.add(this.hiderClass),e(_)(this,Z,X).call(this),N({loader:e(o)(this,z).getTrendingMovies.bind(e(o)(this,z)),target:r.libraryContainer}),console.log("HOME PAGE LOADED")}searchHandler(){console.log("QUEUE PAGE LOADED")}watchedHandler(){e(_)(this,Z,X).call(this),console.log("WATCHED PAGE LOADED")}queueHandler(){console.log("QUEUE PAGE LOADED")}modalHandler({content:e}){console.log("MODAL LOADED")}constructor({apiService:t,wathedService:a,queueService:i}){e(b)(this,Z),e(u)(this,z,{writable:!0,value:void 0}),e(u)(this,J,{writable:!0,value:void 0}),e(u)(this,V,{writable:!0,value:void 0}),this.siteCurrentPage=n.home,e(m)(this,z,t),e(m)(this,J,a),e(m)(this,V,i),this.hiderClass="js-hidden",this.init(),this.homeHandler()}}({apiService:ee,wathedService:te,queueService:ae});Q.testOpenModalCard.addEventListener("click",(function(){Q.backdrop.classList.remove("js-hidden");const e=K({about:"Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?",imgSrc:"https://image.tmdb.org/t/p/original//ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg",imgAlt:"test",originalTitle:"A FISTFUL OF LEAD",vote:"7.3",votes:"1260",popularity:"100.2",genre:"Western"});Q.modalContainer.innerHTML=e}));
//# sourceMappingURL=index.9ef9b776.js.map
