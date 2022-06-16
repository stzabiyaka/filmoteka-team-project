function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,a){if(t.set)t.set.call(e,a);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=a}}}));const o={home:"home",search:"search results",watched:"watched",queue:"queue"},s={body:document.body,headerContainer:document.querySelector("#header"),headerLogo:document.querySelector("#logo"),headerLogoName:document.querySelector("#logo-name"),headerHomeBtn:document.querySelector("#home"),headerMyLibBtn:document.querySelector("#my-library"),collectionsBtnsContainer:document.querySelector("#collections-nav"),collectionWatchedBtn:document.querySelector("#watched"),collectionQueueBtn:document.querySelector("#queue"),searchFormContainer:document.querySelector("#search-form-container"),searchForm:document.querySelector("#search-form"),libraryContainer:document.querySelector("#library"),backdrop:document.querySelector("#backdrop-modal-card"),modalContainer:document.querySelector("#modal"),modalAddToWatchedBtn:document.querySelector("#watched-add"),modalAddToQueueBtn:document.querySelector("#queue-add"),modalCloseBtn:document.querySelector("#modal-close"),teamLink:document.querySelector("#team"),paginator:document.querySelector("#paginator"),languageSelector:document.querySelector("#language"),themeButton:document.querySelector("theme")},r={default:{buttons:{home:"home",library:"my library",watched:"watched",queue:"queue",addToWatched:"add to Watched",removeFromWatched:"remove from Watched",addToQueue:"add to queue",removeFromQueue:"remove from Queue"},logoName:"Filmoteka",searchPlaceholder:"Search movies",notification:"Search result not successful. Enter the correct movie name and try again",movieDetails:{vote:"Vote",votes:"Votes",popularity:"Popularity",title:"Original Title",genre:"Genre",about:"About",other:"Other"},copyright:"All Rights Reserved",developedWidth:"Developed with"},ukrainian:{buttons:{home:"головна",library:"моя фільмотека",watched:"переглянуті",queue:"у черзі",addToWatched:"додати до переглянутих",removeFromWatched:"видалити з переглянутих",addToQueue:"додати до черги",removeFromQueue:"видалити з черги"},logoName:"Фільмотека",searchPlaceholder:"Пошук фильмів",notification:"Пошук не мав успіху. Введить правильну назву фільму та спробуйте ще раз",movieDetails:{vote:"Голос",votes:"Голоси",popularity:"Популярнісь",title:"Оригінальна назва",genre:"Жанр",about:"Опис",other:"Інші"},copyright:"Всі права захищено",developedWidth:"Розроблено із"}},l={watched:"watched",queue:"queue"};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){var a=d.default(e,t,"get");return u.default(e,a)};var d=h(n("fExtF")),u=h(n("iaRLo"));function h(e){return e&&e.__esModule?e:{default:e}}var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,a){p.default(e,t),t.set(e,a)};var g,p=(g=n("7K24o"))&&g.__esModule?g:{default:g};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,a){var i=f.default(e,t,"set");return _.default(e,i,a),a};var f=b(n("fExtF")),_=b(n("3LGG3"));function b(e){return e&&e.__esModule?e:{default:e}}var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a};var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t){k.default(e,t),t.add(e)};var k=function(e){return e&&e.__esModule?e:{default:e}}(n("7K24o"));var P=new WeakMap,E=new WeakMap,L=new WeakMap,S=new WeakSet,M=new WeakSet,$=new WeakSet;class C{async getGenres(){const t=`${e(c)(this,E)}/${this.URL_PARAMETERS.genres}?api_key=${e(c)(this,P)}&language=${e(c)(this,L)}`,a=await e(y)(this,S,W).call(this,t);this.genres=a.genres}async getTrendingMovies({page:t=1}){const a=`${e(c)(this,E)}/${this.URL_PARAMETERS.trending}?api_key=${e(c)(this,P)}&page=${t}&language=${e(c)(this,L)}`,i=await e(y)(this,S,W).call(this,a);return e(y)(this,M,q).call(this,i.results),i}async searchMovies({query:t,page:a=1}){const i=`${e(c)(this,E)}/${this.URL_PARAMETERS.search}?api_key=${e(c)(this,P)}&language=${e(c)(this,L)}&query=${t}&page=${a}&include_adult=false`,n=await e(y)(this,S,W).call(this,i);return e(y)(this,M,q).call(this,n.results),n}async getMovie({movieId:t}){const a=`${e(c)(this,E)}/${this.URL_PARAMETERS.movieDetails}/${t}?api_key=${e(c)(this,P)}&language=${e(c)(this,L)}`,i=await e(y)(this,S,W).call(this,a);return e(y)(this,$,A).call(this,i),i}async getMoviesBundle({bundleArray:e,page:t=1,total_pages:a=1}){const i=bundle.map((e=>this.getMovie({movieId:e})));return{results:await Promise.all(i),page:t,total_pages:a}}setCurrentLanguage({language:t}){e(v)(this,L,Object.values(this.LANGUAGES).includes(t)?t:this.LANGUAGES.default),this.getGenres()}constructor({language:t="default"}){e(w)(this,S),e(w)(this,M),e(w)(this,$),e(m)(this,P,{writable:!0,value:void 0}),e(m)(this,E,{writable:!0,value:void 0}),e(m)(this,L,{writable:!0,value:void 0}),e(v)(this,P,"704d5b04a49684ea4810e36d12ae79df"),e(v)(this,E,"https://api.themoviedb.org/3"),this.URL_PARAMETERS={trending:"trending/movie/day",search:"search/movie",movieDetails:"movie",genres:"genre/movie/list"},this.LANGUAGES={default:"en-US",ukrainian:"uk-UA"},this.genres=null,this.setCurrentLanguage({language:this.LANGUAGES[t]})}}async function W(e){const t=await fetch(e);if(!t.ok)throw new Error(t.status);return await t.json()}function q(e){e.forEach((e=>{e.genre_ids=e.genre_ids.map((e=>this.genres.find((t=>t.id===e)).name)),e.genres=e.genre_ids,delete e.genre_ids}))}function A(e){e.genres=e.genres.map((e=>e.name))}var x=new WeakMap;class B{save(t){try{const a=JSON.stringify(t);localStorage.setItem(e(c)(this,x),a)}catch(e){console.log("Set state error:",e.message)}}load(){try{let t=localStorage.getItem(e(c)(this,x));return t=null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}}remove(){localStorage.removeItem(e(c)(this,x))}constructor(t){e(m)(this,x,{writable:!0,value:void 0}),e(v)(this,x,t)}}var T=new WeakMap,O=new WeakSet;class j extends B{getPreferences(){return e(c)(this,T)}setLanguage({language:t}){e(c)(this,T).language=t,e(c)(this,T).user=!0,this.save(e(c)(this,T))}setTheme({theme:t}){e(c)(this,T).theme=t,e(c)(this,T).user=!0,this.save(e(c)(this,T))}constructor(t){super(t),e(w)(this,O),e(m)(this,T,{writable:!0,value:void 0}),e(y)(this,O,R).call(this)}}function R(){e(v)(this,T,this.load()),e(c)(this,T)||e(v)(this,T,{language:"default",theme:"default",user:!1})}var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a;return e};var H=new WeakMap,G=new WeakMap,N=new WeakMap,U=new WeakSet,I=new WeakSet;function F(){e(v)(this,H,this.load()),e(c)(this,H)||(e(v)(this,H,{}),e(c)(this,N).forEach((t=>{e(c)(this,H)[t]=[]})));const t=Object.keys(e(c)(this,H));e(c)(this,N).forEach((t=>{e(c)(this,H)[t]=e(c)(this,H)[t]?e(c)(this,H)[t]:[]})),t.forEach((t=>{e(c)(this,G)[t]=Math.ceil(e(c)(this,H)[t].length/this.perPage)}))}function Q(){this.save(e(c)(this,H))}class K{static getImagePath({path:e,width:t}){const a=Object.keys(this.width).includes(t)?this.width[t]:this.width.default;return`${this.BASE_URL}${a}${e}`}}function z({genres:e,poster_path:t,release_date:a,title:i,vote_average:n,id:o}){if(0!==e.length)return(e=e.map((e=>`<span class="movie-card_genres">${e}</span>`))).length>2&&(e=e.slice(0,2)).push('<span class="movie-card_genres">Other</span>'),`<article class="movie-card" data-movie-id="${o}">\n    <picture>\n        <source srcset="${K.getImagePath({path:t})}, 1x, ${K.getImagePath({path:t,width:"retina"})}, 2x" type="image/jpeg">\n        <img class="movie-card_img" src= "${K.getImagePath({path:t})} " alt=${i}>\n    </picture>\n    <h2 class="movie-card_title">${i}</h2>\n    <div class="movie-card_info">\n        ${e.join(", ")}\n        <p class="movie-card_symbol">|</p>\n        <p class="movie-card_date">${a}</p>\n        <div class="movie-card_avarage">\n            <p class="movie-card_avarage__accent">${n}</p>\n        </div>\n    </div>\n</article>`}e(D)(K,"BASE_URL","https://image.tmdb.org/t/p/"),e(D)(K,"width",{default:"w342",retina:"w780",original:"original"});let J=new j("userPreferences").getPreferences().language;const V={backdrop:document.querySelector("#backdrop-modal-card"),modalContainer:document.querySelector("#modal")};function X({overview:e,backdrop_path:t,title:a,original_title:i,vote_average:n,vote_count:o,popularity:s,genres:l}){const c=`${K.getImagePath({path:t})}, 1x, ${K.getImagePath({path:t,width:"retina"})}, 2x`,d=r[J].movieDetails.vote,u=r[J].movieDetails.votes,h=r[J].movieDetails.popularity,m=r[J].movieDetails.title,g=r[J].movieDetails.genre,p=r[J].movieDetails.about,v=r[J].buttons.addToWatched,f=r[J].buttons.addToQueue;return`\n\n        <div class="modal-card-thumb__img" >  \n        \n            <picture class="modal-card__picture">                \n                <source srcset="${c}" type="image/jpeg" class="modal-card__picture--source">\n                <img src="${K.getImagePath({path:t})}" alt="${a}" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>\n            </picture>\n\n        </div>\n            \n        <div class="modal-card-thumb__content">\n            <div class="modal-card-info">\n                <h2 class="modal-card-info__title">${a}</h2>\n                <div class="modal-card__thumb--characteristics">\n                    <ul class="modal-card-info__characteristics">\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">${d}/${u}</p>\n                            <p class="modal-card-info__data--slesh">\n                                <span class="modal-card-info__data--vote">${n}</span>\n                                /\n                                <span class="modal-card-info__data--votes">${o}</span>\n                            </p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">${h}</p>\n                            <p class="modal-card-info__data modal-card-info__data--popularity">${s}</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">${m}</p>\n                            <p class="modal-card-info__data modal-card-info__data--original-title">${i}</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">${g}</p>\n                            <p class="modal-card-info__data modal-card-info__data--genre">${l.join(", ")}</p>\n                        </li>\n                    </ul>\n                    \n                </div>\n                <h3 class="modal-card-info-about__title">${p}</h3>\n                <p class="modal-card-info-about__description">${e}</p>\n            </div>\n            <div class="modal-card-thumb__btn">\n                <button type="button" id="watched-add" title="add to Watched" class="modal-card-btn__watched">${v}</button>\n                <button type="button" id="queue-add" title="add to Queue" class="modal-card-btn__queue">${f}</button>\n            </div>\n        </div>\n    \n    `}let Y=new j("userPreferences").getPreferences().language;s.libraryContainer.addEventListener("click",(async function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName&&"H2"!==e.target.nodeName&&"SPAN"!==e.target.nodeName&&"P"!==e.target.nodeName)return;{let t;e.path.map((e=>{if("movie-card"===e.className)return t=e.getAttribute("data-movie-id"),t}));const a=new C({language:Y});await a.getMovie({movieId:t}).then((e=>{V.backdrop.classList.remove("js-hidden"),s.body.classList.add("js-modal-is-open"),V.modalContainer.innerHTML=X(e)})).catch((e=>console.error(e)))}}));var Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ae=new WeakMap,ie=new WeakMap,ne=new WeakMap,oe=new WeakSet,se=new WeakSet,re=new WeakSet,le=new WeakSet;function ce(){const e=s.headerHomeBtn.disabled;s.headerHomeBtn.disabled=!e,s.headerMyLibBtn.disabled=e,s.headerLogo.classList.toggle("disabled"),s.headerContainer.classList.toggle(this.myLibraryClass),s.searchFormContainer.classList.toggle(this.hiderClass),s.collectionsBtnsContainer.classList.toggle(this.hiderClass)}function de(){const e=s.collectionWatchedBtn.disabled;s.collectionWatchedBtn.disabled=!e,s.collectionQueueBtn.disabled=e}function ue(){e(v)(this,ie,this.queueHandler.bind(this)),e(v)(this,ne,this.watchedHandler.bind(this,{isFromHome:!1})),s.collectionQueueBtn.addEventListener("click",e(c)(this,ie)),s.collectionWatchedBtn.addEventListener("click",e(c)(this,ne))}function he(){s.collectionQueueBtn.removeEventListener("click",e(c)(this,ie)),s.collectionWatchedBtn.removeEventListener("click",e(c)(this,ne))}var me=new WeakMap;const{body:ge,backdrop:pe,modalCloseBtn:ve}=s;function fe(){pe.classList.add("js-hidden"),modalContainer.innerHTML="",ge.classList.remove("js-modal-is-open"),ve.removeEventListener("click",fe)}ve.addEventListener("click",fe),pe.addEventListener("click",(function e(t){t.target===t.currentTarget&&(fe(),pe.removeEventListener("click",e))})),window.addEventListener("keydown",(function e(t){"Escape"===t.key&&(fe(),window.removeEventListener("keydown",e))}));let _e=new j("userPreferences").getPreferences().language;_e="ukrainian";new class{switchCaptions({language:t="default"}){e(v)(this,me,t),s.headerLogoName.textContent=r[e(c)(this,me)].logoName,s.headerHomeBtn.textContent=r[e(c)(this,me)].buttons.home,s.headerMyLibBtn.textContent=r[e(c)(this,me)].buttons.library,s.collectionWatchedBtn.textContent=r[e(c)(this,me)].buttons.watched,s.collectionQueueBtn.textContent=r[e(c)(this,me)].buttons.queue,s.searchForm.placeholder=r[e(c)(this,me)].searchPlaceholder}constructor({language:t="default"}){e(m)(this,me,{writable:!0,value:void 0}),e(v)(this,me,t),this.switchCaptions({language:e(c)(this,me)})}}({language:"ukrainian"});const be=new C({language:"ukrainian"}),ye=new class extends B{getCollectionIdsBundle({collection:t,page:a=1}){if(!this.isCollectionExist())return"collection is empty";if(!this.isPageExist({collection:t,page:a}))return"there is no such page in the collection";this.currentPage[t]=a;const i=(this.currentPage[t]-1)*this.perPage;return{bundleArray:1===e(c)(this,G)[t]?e(c)(this,H)[t]:e(c)(this,H)[t].slice(i,i+this.perPage),totalPages:e(c)(this,G)[t],page:this.currentPage[t]}}addToCollection({collection:t,id:a}){if(!a||this.isInCollection({collection:t,id:a}))return"this id is already in the collection, or you didn`t spicified an id";e(c)(this,H)[t].push(a),e(y)(this,I,Q).call(this)}removeFromCollection({collection:t,id:a=null}){if(!this.isInCollection({collection:t,id:a}))return"there is no such id in the collection";const i=e(c)(this,H)[t].indexOf(a);e(c)(this,H)[t].splice(i,1),e(y)(this,I,Q).call(this)}isCollectionExist({collection:t}){return!!e(c)(this,G)[t]}isPageExist({collection:t,page:a=1}){return e(c)(this,G)[t]>=a}isInCollection({collection:t,id:a=null}){return a?e(c)(this,H)[t].includes(a):"there is no such id in the collection"}setCurrentPage({collection:e,newPage:t}){this.currentPage[e]=t}getCurrentPage({collection:e}){return this.currentPage[e]}set perPage(e){this.perPage=e}get perPage(){return this.perPage}resetCurrentPage({collection:e}){this.currentPage[e]=1}constructor(t){super(t),e(w)(this,U),e(w)(this,I),e(D)(this,"currentPage",{}),e(D)(this,"perPage",9),e(m)(this,H,{writable:!0,value:void 0}),e(m)(this,G,{writable:!0,value:{}}),e(m)(this,N,{writable:!0,value:Object.values(l)}),e(c)(this,N).forEach((e=>{this.currentPage[e]=1})),e(y)(this,U,F).call(this)}}("userCollections");new class{init(){s.headerLogo.addEventListener("click",this.homeHandler.bind(this)),s.headerHomeBtn.addEventListener("click",this.homeHandler.bind(this)),s.headerMyLibBtn.addEventListener("click",this.watchedHandler.bind(this,{isFromHome:!0}))}homeHandler(){const t=e(c)(this,Z).getTrendingMovies.bind(e(c)(this,Z),{page:1});e(y)(this,oe,ce).call(this),e(y)(this,le,he).call(this),e(c)(this,te).call(this,{loader:t,target:s.libraryContainer})}searchHandler({searchQuery:t,page:a=1}){e(c)(this,Z).searchMovies.bind(e(c)(this,Z),{searchQuery:t,page:a});console.log("QUEUE PAGE LOADED")}watchedHandler({page:t=1,isFromHome:a}){a&&(e(y)(this,oe,ce).call(this),e(y)(this,re,ue).call(this)),console.log("WATCHED PAGE LOADED"),e(y)(this,se,de).call(this)}queueHandler({page:t=1}){console.log("QUEUE PAGE LOADED"),e(y)(this,se,de).call(this)}modalHandler({content:e}){console.log("MODAL LOADED")}constructor({apiService:t,collectionsService:a,markupRender:i,modalRender:n}){e(w)(this,oe),e(w)(this,se),e(w)(this,re),e(w)(this,le),e(m)(this,Z,{writable:!0,value:void 0}),e(m)(this,ee,{writable:!0,value:void 0}),e(m)(this,te,{writable:!0,value:void 0}),e(m)(this,ae,{writable:!0,value:void 0}),e(m)(this,ie,{writable:!0,value:void 0}),e(m)(this,ne,{writable:!0,value:void 0}),this.siteCurrentPage=o.home,e(v)(this,Z,t),e(v)(this,ee,a),e(v)(this,te,i),e(v)(this,ae,n),this.hiderClass="js-hidden",this.myLibraryClass="my-library",this.init(),this.homeHandler()}}({apiService:be,collectionsService:ye,markupRender:function({loader:e,target:t,content:a}){e(a).then((e=>{const a=e.results.map((e=>z(e))).join("");t.innerHTML=a})).catch(console.log)}});
//# sourceMappingURL=index.dc655a68.js.map
