function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(t.set)t.set.call(e,a);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=a}}}));const o={home:"home",search:"search results",watched:"watched",queue:"queue"},s={body:document.body,headerContainer:document.querySelector("#header"),headerLogo:document.querySelector("#logo"),headerLogoName:document.querySelector("#logo-name"),headerHomeBtn:document.querySelector("#home"),headerMyLibBtn:document.querySelector("#my-library"),collectionsBtnsContainer:document.querySelector("#collections-nav"),collectionWatchedBtn:document.querySelector("#watched"),collectionQueueBtn:document.querySelector("#queue"),searchFormContainer:document.querySelector("#search-form-container"),searchForm:document.querySelector("#search-form"),libraryContainer:document.querySelector("#library"),backdrop:document.querySelector("#backdrop"),modalContainer:document.querySelector("#modal"),modalAddToWatchedBtn:document.querySelector("#watched-add"),modalAddToQueueBtn:document.querySelector("#queue-add"),modalCloseBtn:document.querySelector("#modal-close"),teamLink:document.querySelector("#team"),paginator:document.querySelector("#paginator")},r={default:{buttons:{home:"home",library:"my library",watched:"watched",queue:"queue",addToWatched:"add to Watched",removeFromWatched:"remove from Watched",addToQueue:"add to queue",removeFromQueue:"remove from Queue"},logoName:"Filmoteka",searchPlaceholder:"Search movies",notification:"Search result not successful. Enter the correct movie name and try again",movieDetails:{vote:"Vote",votes:"Votes",popularity:"Popularity",title:"Original Title",genre:"Genre",about:"About",other:"Other"},copyright:"All Rights Reserved",developedWidth:"Developed with"},ukrainian:{buttons:{home:"головна",library:"моя бібліотека",watched:"переглянуті",queue:"у черзі",addToWatched:"додати до переглянутих",removeFromWatched:"видалити з переглянутих",addToQueue:"додати до черги",removeFromQueue:"видалити з черги"},logoName:"Фільмотека",searchPlaceholder:"Пошук фильмів",notification:"Пошук не мав успіху. Введить правильну назву фільму та спробуйте ще раз",movieDetails:{vote:"Голос",votes:"Голоси",popularity:"Популярнісь",title:"Оригінальна назва",genre:"Жанр",about:"Опис",other:"Інші"},copyright:"Всі права захищено",developedWidth:"Розроблено із"}},l={watched:"watched",queue:"queue"};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){var a=d.default(e,t,"get");return h.default(e,a)};var d=u(n("fExtF")),h=u(n("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,a){p.default(e,t),t.set(e,a)};var m,p=(m=n("7K24o"))&&m.__esModule?m:{default:m};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,a){var i=v.default(e,t,"set");return _.default(e,i,a),a};var v=b(n("fExtF")),_=b(n("3LGG3"));function b(e){return e&&e.__esModule?e:{default:e}}var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a};var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t){P.default(e,t),t.add(e)};var P=function(e){return e&&e.__esModule?e:{default:e}}(n("7K24o"));var S=new WeakMap,E=new WeakMap,M=new WeakMap,L=new WeakSet,k=new WeakSet,C=new WeakSet;async function A(e){const t=await fetch(e);if(!t.ok)throw new Error(t.status);return await t.json()}function $(e){e.forEach((e=>{e.genre_ids=e.genre_ids.map((e=>this.genres.find((t=>t.id===e)).name)),e.genres=e.genre_ids,delete e.genre_ids}))}function q(e){e.genres=e.genres.map((e=>e.name))}var W=new WeakMap;class O{save(t){try{const a=JSON.stringify(t);localStorage.setItem(e(c)(this,W),a)}catch(e){console.log("Set state error:",e.message)}}load(){try{let t=localStorage.getItem(e(c)(this,W));return t=null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}}remove(){localStorage.removeItem(e(c)(this,W))}constructor(t){e(g)(this,W,{writable:!0,value:void 0}),e(f)(this,W,t)}}var x=new WeakMap,T=new WeakSet;function R(){e(f)(this,x,this.load()),e(c)(this,x)||e(f)(this,x,{language:"default",theme:"default",user:!1})}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a;return e};var B=new WeakMap,G=new WeakMap,U=new WeakMap,D=new WeakSet,F=new WeakSet;function H(){e(f)(this,B,this.load()),e(c)(this,B)||(e(f)(this,B,{}),e(c)(this,U).forEach((t=>{e(c)(this,B)[t]=[]})));const t=Object.keys(e(c)(this,B));e(c)(this,U).forEach((t=>{e(c)(this,B)[t]=e(c)(this,B)[t]?e(c)(this,B)[t]:[]})),t.forEach((t=>{e(c)(this,G)[t]=Math.ceil(e(c)(this,B)[t].length/this.perPage)}))}function I(){this.save(e(c)(this,B))}class N{static getImagePath({path:e,width:t}){const a=Object.keys(this.width).includes(t)?this.width[t]:this.width.default;return`${this.BASE_URL}${a}${e}`}}function Q({genres:e,poster_path:t,release_date:a,title:i,vote_average:n,id:o}){if(0!==e.length)return(e=e.map((e=>`<span class="movie-card_genres">${e}</span>`))).length>2&&(e=e.slice(0,2)).push('<span class="movie-card_genres">Other</span>'),`<article class="movie-card" data-movie-id="${o}">\n    <picture>\n        <source srcset="${N.getImagePath({path:t})}, 1x, ${N.getImagePath({path:t,width:"retina"})}, 2x" type="image/jpeg">\n        <img class="movie-card_img" src= "${N.getImagePath({path:t})} " alt=${i}>\n    </picture>\n    <h2 class="movie-card_title">${i}</h2>\n    <div class="movie-card_info">\n        ${e.join(", ")}\n        <p class="movie-card_symbol">|</p>\n        <p class="movie-card_date">${a}</p>\n        <div class="movie-card_avarage">\n            <p class="movie-card_avarage__accent">${n}</p>\n        </div>\n    </div>\n</article>`}e(j)(N,"BASE_URL","https://image.tmdb.org/t/p/"),e(j)(N,"width",{default:"w342",retina:"w780",original:"original"});const K={backdrop:document.querySelector("#backdrop-modal-card"),testOpenModalCard:document.querySelector("#try-to-open-modal-card"),modalContainer:document.querySelector("#modal")};function V({about:e,imgSrc:t,imgAlt:a,originalTitle:i,vote:n,votes:o,popularity:s,genre:r}){return`\n\n        <div class="modal-card-thumb__img" >\n            <img src="${t}" alt="${a}" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>\n        </div>   \n            \n        <div class="modal-card-thumb__content">\n            <div class="modal-card-info">\n                <h2 class="modal-card-info__title">${i}</h2>\n                <div class="modal-card__thumb--characteristics">\n                    <ul class="modal-card-info__characteristics">\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Vote/Votes</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Popularity</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Original Title</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Genre</p>\n                        </li>\n                    </ul>\n                    <ul class="modal-card-info__data">\n                        <li class="modal-card-info__data--item">                            \n                            <p class="modal-card-info__data--slesh">\n                                <span class="modal-card-info__data--vote">${n}</span>\n                                /\n                                <span class="modal-card-info__data--votes">${o}</span>\n                            </p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--popularity">${s}</p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--original-title">${i}</p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--genre">${r}</p>\n                        </li>\n                    </ul>\n                </div>\n                <h3 class="modal-card-info-about__title">About</h3>\n                <p class="modal-card-info-about__description">${e}</p>\n            </div>\n            <div class="modal-card-thumb__btn">\n                <button type="button" id="watched-add" title="add to Watched" class="modal-card-btn__watched">add to Watched</button>\n                <button type="button" id="queue-add" title="add to Queue" class="modal-card-btn__queue">add to queue</button>\n            </div>\n        </div>\n    \n    `}var z=new WeakMap,J=new WeakMap,Z=new WeakMap,X=new WeakMap,Y=new WeakSet;function ee(){const e=s.headerHomeBtn.disabled;s.headerHomeBtn.disabled=!e,s.headerMyLibBtn.disabled=e,s.headerLogo.classList.toggle("disabled"),s.headerContainer.classList.toggle(this.myLibraryClass),s.searchFormContainer.classList.toggle(this.hiderClass),s.collectionsBtnsContainer.classList.toggle(this.hiderClass)}var te=new WeakMap;let ae=new class extends O{getPreferences(){return e(c)(this,x)}setLanguage({language:t}){e(c)(this,x).language=t,e(c)(this,x).user=!0,this.save(e(c)(this,x))}setTheme({theme:t}){e(c)(this,x).theme=t,e(c)(this,x).user=!0,this.save(e(c)(this,x))}constructor(t){super(t),e(w)(this,T),e(g)(this,x,{writable:!0,value:void 0}),e(y)(this,T,R).call(this)}}("userPreferences").getPreferences().language;ae="ukrainian";new class{switchCaptions({language:t="default"}){e(f)(this,te,t),s.headerLogoName.textContent=r[e(c)(this,te)].logoName,s.headerHomeBtn.textContent=r[e(c)(this,te)].buttons.home,s.headerMyLibBtn.textContent=r[e(c)(this,te)].buttons.library,s.collectionWatchedBtn.textContent=r[e(c)(this,te)].buttons.watched,s.collectionQueueBtn.textContent=r[e(c)(this,te)].buttons.queue,s.searchForm.placeholder=r[e(c)(this,te)].searchPlaceholder}constructor({language:t="default"}){e(g)(this,te,{writable:!0,value:void 0}),e(f)(this,te,t),this.switchCaptions({language:e(c)(this,te)})}}({language:"ukrainian"});const ie=new class{async getGenres(){const t=`${e(c)(this,E)}/${this.URL_PARAMETERS.genres}?api_key=${e(c)(this,S)}&language=${e(c)(this,M)}`,a=await e(y)(this,L,A).call(this,t);this.genres=a.genres}async getTrendingMovies({page:t=1}){const a=`${e(c)(this,E)}/${this.URL_PARAMETERS.trending}?api_key=${e(c)(this,S)}&page=${t}&language=${e(c)(this,M)}`,i=await e(y)(this,L,A).call(this,a);return e(y)(this,k,$).call(this,i.results),i}async searchMovies({query:t,page:a=1}){const i=`${e(c)(this,E)}/${this.URL_PARAMETERS.search}?api_key=${e(c)(this,S)}&language=${e(c)(this,M)}&query=${t}&page=${a}&include_adult=false`,n=await e(y)(this,L,A).call(this,i);return e(y)(this,k,$).call(this,n.results),n}async getMovie({movieId:t}){const a=`${e(c)(this,E)}/${this.URL_PARAMETERS.movieDetails}/${t}?api_key=${e(c)(this,S)}&language=${e(c)(this,M)}`,i=await e(y)(this,L,A).call(this,a);return e(y)(this,C,q).call(this,i),i}async getMoviesBundle({bundleArray:e,page:t=1,total_pages:a=1}){const i=bundle.map((e=>this.getMovie({movieId:e})));return{results:await Promise.all(i),page:t,total_pages:a}}setCurrentLanguage({language:t}){e(f)(this,M,Object.values(this.LANGUAGES).includes(t)?t:this.LANGUAGES.default),this.getGenres()}constructor({language:t="default"}){e(w)(this,L),e(w)(this,k),e(w)(this,C),e(g)(this,S,{writable:!0,value:void 0}),e(g)(this,E,{writable:!0,value:void 0}),e(g)(this,M,{writable:!0,value:void 0}),e(f)(this,S,"704d5b04a49684ea4810e36d12ae79df"),e(f)(this,E,"https://api.themoviedb.org/3"),this.URL_PARAMETERS={trending:"trending/movie/day",search:"search/movie",movieDetails:"movie",genres:"genre/movie/list"},this.LANGUAGES={default:"en-US",ukrainian:"uk-UA"},this.genres=null,this.setCurrentLanguage({language:this.LANGUAGES[t]})}}({language:"ukrainian"}),ne=new class extends O{getCollectionIdsBundle({collection:t,page:a=1}){if(!this.isCollectionExist())return"collection is empty";if(!this.isPageExist({collection:t,page:a}))return"there is no such page in the collection";this.currentPage[t]=a;const i=(this.currentPage[t]-1)*this.perPage;return{bundleArray:1===e(c)(this,G)[t]?e(c)(this,B)[t]:e(c)(this,B)[t].slice(i,i+this.perPage),totalPages:e(c)(this,G)[t],page:this.currentPage[t]}}addToCollection({collection:t,id:a}){if(!a||this.isInCollection({collection:t,id:a}))return"this id is already in the collection, or you didn`t spicified an id";e(c)(this,B)[t].push(a),e(y)(this,F,I).call(this)}removeFromCollection({collection:t,id:a=null}){if(!this.isInCollection({collection:t,id:a}))return"there is no such id in the collection";const i=e(c)(this,B)[t].indexOf(a);e(c)(this,B)[t].splice(i,1),e(y)(this,F,I).call(this)}isCollectionExist({collection:t}){return!!e(c)(this,G)[t]}isPageExist({collection:t,page:a=1}){return e(c)(this,G)[t]>=a}isInCollection({collection:t,id:a=null}){return a?e(c)(this,B)[t].includes(a):"there is no such id in the collection"}setCurrentPage({collection:e,newPage:t}){this.currentPage[e]=t}getCurrentPage({collection:e}){return this.currentPage[e]}set perPage(e){this.perPage=e}get perPage(){return this.perPage}resetCurrentPage({collection:e}){this.currentPage[e]=1}constructor(t){super(t),e(w)(this,D),e(w)(this,F),e(j)(this,"currentPage",{}),e(j)(this,"perPage",9),e(g)(this,B,{writable:!0,value:void 0}),e(g)(this,G,{writable:!0,value:{}}),e(g)(this,U,{writable:!0,value:Object.values(l)}),e(c)(this,U).forEach((e=>{this.currentPage[e]=1})),e(y)(this,D,H).call(this)}}("userCollections");new class{init(){s.headerLogo.addEventListener("click",this.homeHandler.bind(this)),s.headerHomeBtn.addEventListener("click",this.homeHandler.bind(this)),s.headerMyLibBtn.addEventListener("click",this.watchedHandler.bind(this))}homeHandler(){const t=e(c)(this,z).getTrendingMovies.bind(e(c)(this,z),{page:1});s.collectionsBtnsContainer.classList.add(this.hiderClass),e(y)(this,Y,ee).call(this),e(c)(this,Z).call(this,{loader:t,target:s.libraryContainer})}searchHandler({searchQuery:t,page:a=1}){e(c)(this,z).searchMovies.bind(e(c)(this,z),{searchQuery:t,page:a});console.log("QUEUE PAGE LOADED")}watchedHandler({page:t=1}){e(y)(this,Y,ee).call(this),console.log("WATCHED PAGE LOADED")}queueHandler({page:e=1}){console.log("QUEUE PAGE LOADED")}modalHandler({content:e}){console.log("MODAL LOADED")}constructor({apiService:t,collectionsService:a,markupRender:i,modalRender:n}){e(w)(this,Y),e(g)(this,z,{writable:!0,value:void 0}),e(g)(this,J,{writable:!0,value:void 0}),e(g)(this,Z,{writable:!0,value:void 0}),e(g)(this,X,{writable:!0,value:void 0}),this.siteCurrentPage=o.home,e(f)(this,z,t),e(f)(this,J,a),e(f)(this,Z,i),e(f)(this,X,n),this.hiderClass="js-hidden",this.myLibraryClass="my-library",this.init(),this.homeHandler()}}({apiService:ie,collectionsService:ne,markupRender:function({loader:e,target:t,content:a}){e(a).then((e=>{const a=e.results.map((e=>Q(e))).join("");t.innerHTML=a})).catch(console.log)}});K.testOpenModalCard.addEventListener("click",(function(){K.backdrop.classList.remove("js-hidden");const e=V({about:"Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?",imgSrc:"https://image.tmdb.org/t/p/original//ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg",imgAlt:"test",originalTitle:"A FISTFUL OF LEAD",vote:"7.3",votes:"1260",popularity:"100.2",genre:"Western"});K.modalContainer.innerHTML=e}));
//# sourceMappingURL=index.21e141a2.js.map