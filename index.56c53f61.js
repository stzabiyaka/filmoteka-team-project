!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i={body:document.body,headerContainer:document.querySelector("#header"),headerLogo:document.querySelector("#logo"),headerLogoName:document.querySelector("#logo-name"),headerHomeBtn:document.querySelector("#home"),headerMyLibBtn:document.querySelector("#my-library"),collectionsBtnsContainer:document.querySelector("#collections-nav"),collectionWatchedBtn:document.querySelector("#watched"),collectionQueueBtn:document.querySelector("#queue"),searchFormContainer:document.querySelector("#search-form-container"),searchForm:document.querySelector("#search-form"),libraryContainer:document.querySelector("#library"),backdrop:document.querySelector("#backdrop-modal-card"),modalContainer:document.querySelector("#modal"),modalAddToWatchedBtn:document.querySelector("#watched-add"),modalAddToQueueBtn:document.querySelector("#queue-add"),modalCloseBtn:document.querySelector("#modal-close"),teamLink:document.querySelector("#team"),paginator:document.querySelector("#paginator"),languageSelector:document.querySelector("#language"),themeButton:document.querySelector("theme"),modalOpenMovie:document.querySelector("#modal-open-movie"),spinner:document.querySelector("#spinner")},o={default:{buttons:{home:"home",library:"my library",watched:"watched",queue:"queue",addToWatched:{add:"add to Watched",remove:"remove from Watched"},addToQueue:{add:"add to queue",remove:"remove from Queue"}},logoName:"Filmoteka",searchPlaceholder:"Search movies",notifications:{searchFault:"Sorry, there are no movies, matching your search query. Please try again.",searchMinLength:"Please, enter at least two symbols to start search.",searchRestricted:"Please, do not enter any special characters.",technicalFault:"Oops (( looks, like some technical troubles occured.",collecionEmpty:"Looks like you vave not add any movie to this collection, yet.",languageNotify:"Цей сайт доступний також укріїнською мовою"},movieDetails:{vote:"Vote",votes:"Votes",popularity:"Popularity",title:"Original Title",genre:"Genre",about:"About",other:"Other",poster:"Poster"},copyright:"All Rights Reserved",developedWidth:"Developed with"},ukrainian:{buttons:{home:"головна",library:"моя фільмотека",watched:"переглянуті",queue:"у черзі",addToWatched:{add:"додати до переглянутих",remove:"видалити з переглянутих"},addToQueue:{add:"додати до черги",remove:"видалити з черги"}},logoName:"Фільмотека",searchPlaceholder:"Пошук фильмів",notifications:{searchFault:"Нажаль, немає фільмів, відповідаючих вашому запиту. Будь ласка, спробуйте ще раз.",searchMinLength:"Будь ласка, введіть хоча б два символи для початку пошуку.",searchRestricted:"Будь ласка, не використовуйте будь-які спеціальні символи.",technicalFault:"От халепа (( схоже, сталась якась технічна проблема.",collecionEmpty:"Схоже, ви покищо не додали жодного фильму до цієї коллекції."},movieDetails:{vote:"Голос",votes:"Голоси",popularity:"Популярнісь",title:"Оригінальна назва",genre:"Жанр",about:"Опис",other:"Інші",poster:"Постер"},copyright:"Всі права захищено",developedWidth:"Розроблено із"}},c={watched:"watched",queue:"queue"},s={};function l(e,t,n,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){l(i,r,a,o,c,"next",e)}function c(e){l(i,r,a,o,c,"throw",e)}o(void 0)}))}};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t){var n=h.default(e,t,"get");return f.default(e,n)};var h=v(a("1UHsN")),f=v(a("ffZzF"));function v(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){m.default(e,t),t.set(e,n)};var g,m=(g=a("5k7tO"))&&g.__esModule?g:{default:g};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,n){var r=w.default(e,t,"set");return b.default(e,r,n),n};var w=_(a("1UHsN")),b=_(a("jdVyQ"));function _(e){return e&&e.__esModule?e:{default:e}}var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var M={};Object.defineProperty(M,"__esModule",{value:!0}),M.default=function(e,t){L.default(e,t),t.add(e)};var L=function(e){return e&&e.__esModule?e:{default:e}}(a("5k7tO"));var P={};function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(P,"__esModule",{value:!0}),P.default=function(e,t,n){t&&x(e.prototype,t);n&&x(e,n);return e};var S={},E=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),o=new E(r||[]);return i._invoke=function(e,t,n){var r=d;return function(a,i){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===a)throw i;return j()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=P(o,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?v:h,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(e,n,o),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",v="completed",p={};function g(){}function m(){}function y(){}var w={};s(w,i,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(O([])));_&&_!==n&&r.call(_,i)&&(w=_);var k=y.prototype=g.prototype=Object.create(w);function M(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(a,i,o,c){var s=u(e[a],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function P(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=y,s(k,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},M(L.prototype),s(L.prototype,o,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new L(l(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},M(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(S);try{regeneratorRuntime=E}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=E:Function("r","regeneratorRuntime = r")(E)}var O=new WeakMap,j=function(){"use strict";function t(){e(u)(this,t),e(p)(this,O,{writable:!0,value:void 0}),e(y)(this,O,i.spinner)}return e(P)(t,[{key:"showSpinner",value:function(){e(d)(this,O).classList.remove("js-hidden")}},{key:"hideSpinner",value:function(){e(d)(this,O).classList.add("js-hidden")}}]),t}(),W=new WeakMap,T=new WeakMap,C=new WeakMap,B=new WeakMap,q=new WeakSet,R=new WeakSet,N=new WeakSet,A=function(){"use strict";function t(n){var r=n.language,a=void 0===r?"default":r;e(u)(this,t),e(M)(this,q),e(M)(this,R),e(M)(this,N),e(p)(this,W,{writable:!0,value:void 0}),e(p)(this,T,{writable:!0,value:void 0}),e(p)(this,C,{writable:!0,value:void 0}),e(p)(this,B,{writable:!0,value:void 0}),e(y)(this,W,"704d5b04a49684ea4810e36d12ae79df"),e(y)(this,T,"https://api.themoviedb.org/3"),this.URL_PARAMETERS={trending:"trending/movie/day",search:"search/movie",movieDetails:"movie",genres:"genre/movie/list"},this.LANGUAGES={default:"en-US",ukrainian:"uk-UA"},this.genres=null,e(y)(this,B,new j),this.setCurrentLanguage({language:this.LANGUAGES[a]})}return e(P)(t,[{key:"getGenres",value:function(){var t=this;return e(s)(e(S).mark((function n(){var r,a;return e(S).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(e(d)(t,T),"/").concat(t.URL_PARAMETERS.genres,"?api_key=").concat(e(d)(t,W),"&language=").concat(e(d)(t,C)),n.next=3,e(k)(t,q,H).call(t,r);case 3:a=n.sent,t.genres=a.genres;case 5:case"end":return n.stop()}}),n)})))()}},{key:"getTrendingMovies",value:function(t){var n=t.page,r=void 0===n?1:n,a=this;return e(s)(e(S).mark((function t(){var n,i;return e(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(e(d)(a,T),"/").concat(a.URL_PARAMETERS.trending,"?api_key=").concat(e(d)(a,W),"&page=").concat(r,"&language=").concat(e(d)(a,C)),t.next=3,e(k)(a,q,H).call(a,n);case 3:return i=t.sent,e(k)(a,R,I).call(a,i.results),t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})))()}},{key:"searchMovies",value:function(t){var n=t.query,r=t.page,a=void 0===r?1:r,i=this;return e(s)(e(S).mark((function t(){var r,o;return e(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(e(d)(i,T),"/").concat(i.URL_PARAMETERS.search,"?api_key=").concat(e(d)(i,W),"&language=").concat(e(d)(i,C),"&query=").concat(n,"&page=").concat(a,"&include_adult=false"),t.next=3,e(k)(i,q,H).call(i,r);case 3:return o=t.sent,e(k)(i,R,I).call(i,o.results),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))()}},{key:"getMovie",value:function(t){var n=t.movieId,r=this;return e(s)(e(S).mark((function t(){var a,i;return e(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(e(d)(r,T),"/").concat(r.URL_PARAMETERS.movieDetails,"/").concat(n,"?api_key=").concat(e(d)(r,W),"&language=").concat(e(d)(r,C)),t.next=3,e(k)(r,q,H).call(r,a);case 3:return i=t.sent,e(k)(r,N,D).call(r,i),t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})))()}},{key:"getMoviesBundle",value:function(t){var n=t.bundle,r=t.page,a=void 0===r?1:r,i=t.total_pages,o=void 0===i?1:i,c=this;return e(s)(e(S).mark((function t(){var r,i;return e(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.map((function(e){return c.getMovie({movieId:e})})),e.next=3,Promise.all(r);case 3:return i=e.sent,e.abrupt("return",{results:i,page:a,total_pages:o});case 5:case"end":return e.stop()}}),t)})))()}},{key:"setCurrentLanguage",value:function(t){var n=t.language;e(y)(this,C,Object.values(this.LANGUAGES).includes(n)?n:this.LANGUAGES.default),this.getGenres()}}]),t}();function H(e){return F.apply(this,arguments)}function F(){return(F=e(s)(e(S).mark((function t(n){var r,a;return e(S).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d)(this,B).showSpinner(),t.next=3,fetch(n);case 3:if((r=t.sent).ok){t.next=6;break}throw new Error(r.status);case 6:return t.next=8,r.json();case 8:return a=t.sent,e(d)(this,B).hideSpinner(),t.abrupt("return",a);case 11:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function I(e){var t=this;e.forEach((function(e){var n=t;e.genre_ids=e.genre_ids.map((function(e){return n.genres.find((function(t){return t.id===e})).name})),e.genres=e.genre_ids,delete e.genre_ids}))}function D(e){e.genres=e.genres.map((function(e){return e.name}))}var G=a("ds8z5"),U={};Object.defineProperty(U,"__esModule",{value:!0}),U.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q.default(e,t)};var Q=function(e){return e&&e.__esModule?e:{default:e}}(a("gD1JV"));var V={};Object.defineProperty(V,"__esModule",{value:!0}),V.default=function(e){var t=z.default();return function(){var n,r=J.default(e);if(t){var a=J.default(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Y.default(this,n)}};var z=$(a("aTHs7")),J=$(a("fVNic")),Y=$(a("jmhxu"));function $(e){return e&&e.__esModule?e:{default:e}}var Z=new WeakMap,K=function(){"use strict";function t(n){e(u)(this,t),e(p)(this,Z,{writable:!0,value:void 0}),e(y)(this,Z,n)}return e(P)(t,[{key:"save",value:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e(d)(this,Z),n)}catch(e){console.log("Set state error:",e.message)}}},{key:"load",value:function(){try{var t=localStorage.getItem(e(d)(this,Z));return null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}}},{key:"remove",value:function(){localStorage.removeItem(e(d)(this,Z))}}]),t}(),X=new WeakMap,ee=new WeakMap,te=new WeakSet,ne=function(t){"use strict";e(U)(r,t);var n=e(V)(r);function r(t){var a;return e(u)(this,r),a=n.call(this,t),e(M)(e(G)(a),te),e(p)(e(G)(a),X,{writable:!0,value:void 0}),e(p)(e(G)(a),ee,{writable:!0,value:void 0}),e(k)(a,te,re).call(e(G)(a)),a}return e(P)(r,[{key:"getPreferences",value:function(){return e(d)(this,X)}},{key:"setLanguage",value:function(t){var n=t.language;e(d)(this,X).language=n,this.save(e(d)(this,X))}},{key:"setTheme",value:function(t){var n=t.theme;e(d)(this,X).theme=n,this.save(e(d)(this,X))}},{key:"getIsUserNew",value:function(){return e(d)(this,ee)}}]),r}(K);function re(){e(y)(this,X,this.load()),e(d)(this,X)||(e(y)(this,X,{language:"default",theme:"default"}),e(y)(this,ee,!0),this.save(e(d)(this,X))),e(y)(this,ee,!1)}G=a("ds8z5");var ae={};Object.defineProperty(ae,"__esModule",{value:!0}),ae.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var ie=new WeakMap,oe=new WeakMap,ce=new WeakMap,se=new WeakSet,le=new WeakSet,ue=function(t){"use strict";e(U)(r,t);var n=e(V)(r);function r(t){var a;return e(u)(this,r),a=n.call(this,t),e(M)(e(G)(a),se),e(M)(e(G)(a),le),e(ae)(e(G)(a),"currentPage",{}),e(ae)(e(G)(a),"perPage",9),e(p)(e(G)(a),ie,{writable:!0,value:void 0}),e(p)(e(G)(a),oe,{writable:!0,value:{}}),e(p)(e(G)(a),ce,{writable:!0,value:Object.values(c)}),e(d)(a,ce).forEach((function(e){a.currentPage[e]=1})),e(k)(a,se,de).call(e(G)(a)),a}return e(P)(r,[{key:"getCollectionIdsBundle",value:function(t){var n=t.collection,r=t.page,a=void 0===r?1:r;if(!this.isCollectionExist({collection:n}))return"collection is empty";if(!this.isPageExist({collection:n,page:a}))return"there is no such page in the collection";this.currentPage[n]=a;var i=(this.currentPage[n]-1)*this.perPage;return{bundle:1===e(d)(this,oe)[n]?e(d)(this,ie)[n]:e(d)(this,ie)[n].slice(i,i+this.perPage),totalPages:e(d)(this,oe)[n],page:this.currentPage[n]}}},{key:"addToCollection",value:function(t){var n=t.collection,r=t.id;if(!r||this.isInCollection({collection:n,id:r}))return"this id is already in the collection, or you didn`t spicified an id";e(d)(this,ie)[n].push(r),e(k)(this,le,he).call(this)}},{key:"removeFromCollection",value:function(t){var n=t.collection,r=t.id,a=void 0===r?null:r;if(!this.isInCollection({collection:n,id:a}))return"there is no such id in the collection";var i=e(d)(this,ie)[n].indexOf(a);e(d)(this,ie)[n].splice(i,1),e(k)(this,le,he).call(this)}},{key:"isCollectionExist",value:function(t){var n=t.collection;return!!e(d)(this,oe)[n]}},{key:"isPageExist",value:function(t){var n=t.collection,r=t.page,a=void 0===r?1:r;return e(d)(this,oe)[n]>=a}},{key:"isInCollection",value:function(t){var n=t.collection,r=t.id,a=void 0===r?null:r;return a?e(d)(this,ie)[n].includes(a):"there is no such id in the collection"}},{key:"setCurrentPage",value:function(e){var t=e.collection,n=e.newPage;this.currentPage[t]=n}},{key:"getCurrentPage",value:function(e){var t=e.collection;return this.currentPage[t]}},{key:"perPage",get:function(){return this.perPage},set:function(e){this.perPage=e}},{key:"resetCurrentPage",value:function(e){var t=e.collection;this.currentPage[t]=1}}]),r}(K);function de(){var t=this;if(e(y)(this,ie,this.load()),!e(d)(this,ie)){var n=this;e(y)(this,ie,{}),e(d)(this,ce).forEach((function(t){e(d)(n,ie)[t]=[]}))}var r=Object.keys(e(d)(this,ie));e(d)(this,ce).forEach((function(n){e(d)(t,ie)[n]=e(d)(t,ie)[n]?e(d)(t,ie)[n]:[]})),r.forEach((function(n){e(d)(t,oe)[n]=Math.ceil(e(d)(t,ie)[n].length/t.perPage)}))}function he(){this.save(e(d)(this,ie))}var fe=new WeakMap,ve=new WeakMap,pe=new WeakMap,ge=function(){"use strict";function t(n){var r=n.apiService,a=n.markupRender,i=n.currentLanguage;e(u)(this,t),e(p)(this,fe,{writable:!0,value:void 0}),e(p)(this,ve,{writable:!0,value:void 0}),e(p)(this,pe,{writable:!0,value:void 0}),e(y)(this,fe,r),e(y)(this,ve,a),e(y)(this,pe,i)}return e(P)(t,[{key:"getMovieById",value:function(t){var n=t.movieId;e(d)(this,fe).getMovie.bind(e(d)(this,fe),{movieId:n})}}]),t}(),me=function(){"use strict";function t(){e(u)(this,t)}return e(P)(t,null,[{key:"getImagePath",value:function(e){var t=e.path,n=e.width,r=Object.keys(this.width).includes(n)?this.width[n]:this.width.default;return"".concat(this.BASE_URL).concat(r).concat(t)}}]),t}();e(ae)(me,"BASE_URL","https://image.tmdb.org/t/p/"),e(ae)(me,"width",{default:"w342",retina:"w780",original:"original"});var ye=new ne("userPreferences").getPreferences().language;function we(e){var t=e.overview,n=e.poster_path,r=e.title,a=e.original_title,i=e.vote_average,c=e.vote_count,s=e.popularity,l=e.genres,u=(e.homepage,"".concat(me.getImagePath({path:n}),", 1x, ").concat(me.getImagePath({path:n,width:"retina"}),", 2x")),d=o[ye].movieDetails.vote,h=o[ye].movieDetails.votes,f=o[ye].movieDetails.popularity,v=o[ye].movieDetails.title,p=o[ye].movieDetails.genre,g=o[ye].movieDetails.about;o[ye].buttons.addToWatched,o[ye].buttons.addToQueue;return'\n\n        <div class="modal-card-thumb__img" >  \n        \n            <picture class="modal-card__picture">                \n                <source srcset="'.concat(u,'" type="image/jpeg" class="modal-card__picture--source">\n                <img src="').concat(me.getImagePath({path:n}),'" alt="').concat(r,'" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>\n            </picture>           \n            \n        </div>\n            \n        <div class="modal-card-thumb__content">\n            <div class="modal-card-info">\n                <h2 class="modal-card-info__title">').concat(r,'</h2>\n                <div class="modal-card__thumb--characteristics">\n                    <ul class="modal-card-info__characteristics">\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">').concat(d,"/").concat(h,'</p>\n                            <p class="modal-card-info__data modal-card-info__data--slesh">\n                                <span class="modal-card-info__data--vote">').concat(i,'</span>\n                                /\n                                <span class="modal-card-info__data--votes">').concat(c,'</span>\n                            </p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">').concat(f,'</p>\n                            <p class="modal-card-info__data modal-card-info__data--popularity">').concat(s,'</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">').concat(v,'</p>\n                            <p class="modal-card-info__data modal-card-info__data--original-title">').concat(a,'</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">').concat(p,'</p>\n                            <p class="modal-card-info__data modal-card-info__data--genre">').concat(l.join(", "),'</p>\n                        </li>\n                    </ul>\n                    \n                </div>\n                <h3 class="modal-card-info-about__title">').concat(g,'</h3>\n                <p class="modal-card-info-about__description">').concat(t,"</p>\n            </div>\n            \n        </div>\n    \n    ")}var be=new ne("userPreferences").getPreferences().language;function _e(e){return ke.apply(this,arguments)}function ke(){return(ke=e(s)(e(S).mark((function t(n){var r,a,o;return e(S).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"IMG"===n.target.nodeName||"H2"===n.target.nodeName||"SPAN"===n.target.nodeName||"P"===n.target.nodeName){e.next=5;break}return e.abrupt("return");case 5:return n.path.map((function(e){if("movie-card"===e.className)return r=e.getAttribute("data-movie-id")})),a=new A({language:be}),e.next=11,a.getMovie({movieId:r});case 11:o=e.sent;try{console.log(o),i.backdrop.classList.remove("js-hidden"),i.body.classList.add("js-modal-is-open"),i.modalContainer.innerHTML=we(o),i.modalAddToWatchedBtn.addEventListener("click",Le),i.modalAddToQueueBtn.addEventListener("click",Pe),o.homepage&&(i.modalOpenMovie.classList.remove("js-hidden"),i.modalOpenMovie.addEventListener("click",Me))}catch(e){console.log("somthing wrong with modal content"),console.log(e)}case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Me(e){e.preventDefault(),console.log("відкриваємо фільм")}function Le(e){console.log("we need to change btn ADD TO WATCHED text container"),i.modalAddToWatchedBtn.textContent=o[be].buttons.removeFromWatched}function Pe(e){console.log("we need to change btn ADD TO QUEUE text container"),i.modalAddToQueueBtn.textContent=o[be].buttons.removeFromQueue}function xe(e){var t=e.genres,n=e.poster_path,r=e.release_date,a=e.title,i=e.vote_average,o=e.id;if(0!==t.length){r=r.slice(0,4),(t=t.map((function(e){return'<li class="movie-card_genres">'.concat(e,",</li>")}))).length>2&&(t=t.slice(0,2)).push('<li class="movie-card_genres">Other</li>');var c="".concat(a," poster");return'<article class="movie-card" data-movie-id="'.concat(o,'">\n    <h2 class="visually_hidden">').concat(a,'</h2>\n    <picture>\n        <source srcset="').concat(me.getImagePath({path:n}),", 1x, ").concat(me.getImagePath({path:n,width:"retina"}),', 2x" type="image/jpeg">\n        <img class="movie-card_img" src= "').concat(me.getImagePath({path:n}),' " alt=').concat(c,'>\n    </picture>\n    <h2 class="movie-card_title">').concat(a,'</h2>\n    <div class="movie-card_info">\n    <ul class = "movie-card_list">\n        ').concat(t.join(""),'\n        </ul>\n        <p class="movie-card_symbol">|</p>\n        <p class="movie-card_date">').concat(r,'</p>\n        <p class="movie-card_avarage__accent">').concat(i,"</p>\n    </div>\n</article>")}}function Se(e){var t=e.loader,n=e.target,r=e.content;n.removeEventListener("click",_e),t(r).then((function(e){var t=e.results.map((function(e){return xe(e)})).join("");n.innerHTML=t,n.addEventListener("click",_e)})).catch((function(e){n.innerHTML="content doesn't exist"}))}var Ee=new WeakMap,Oe=new WeakMap,je=new WeakMap,We=new WeakMap,Te=new WeakMap,Ce=new WeakMap,Be=new WeakSet,qe=new WeakSet,Re=new WeakSet,Ne=new WeakSet,Ae=new WeakSet,He=new WeakSet,Fe=new WeakSet,Ie=new WeakSet,De=new WeakSet,Ge=new WeakSet;function Ue(){i.headerLogo.addEventListener("click",e(k)(this,qe,Qe).bind(this)),i.headerHomeBtn.addEventListener("click",e(k)(this,qe,Qe).bind(this)),i.headerMyLibBtn.addEventListener("click",e(k)(this,Ne,ze).bind(this,{isFromHome:!0})),i.searchForm.addEventListener("input",e(k)(this,Re,Ve).bind(this))}function Qe(){e(k)(this,Fe,Ye).call(this),e(k)(this,Ge,Ke).call(this),e(d)(this,Ee).getTrendingMoviesPage({page:1})}function Ve(t){var n=t.currentTarget.value.trim();if(/^([\s%&#@])*$/.test(n)||/^([>(.*?)<])*$/.test(n))console.log("недопустимі символи & теги");else{if(/^([а-яА-ЯёЁ]*)$/.test(n)&&console.log("тільки кирилиця"),n.length<2)return console.log("Search was not successful. Please, enter another movie name and try again"),!1;console.log("HOORAY! Found total_results movies"),e(d)(this,We).getMoviesBySearch({query:n,page:1})}}function ze(t){t.page;t.isFromHome&&(e(k)(this,Fe,Ye).call(this),e(k)(this,De,Ze).call(this),i.collectionWatchedBtn.disabled=!1),e(k)(this,Ie,$e).call(this),e(d)(this,Oe).getCollectionMoviesPage({collectionName:c.watched,page:1})}function Je(t){t.page;e(k)(this,Ie,$e).call(this),e(d)(this,Oe).getCollectionMoviesPage({collectionName:c.queue,page:1})}function Ye(){var e=i.headerHomeBtn.disabled;i.headerHomeBtn.disabled=!e,i.headerMyLibBtn.disabled=e,i.headerLogo.classList.toggle("disabled"),i.headerContainer.classList.toggle(this.myLibraryClass),i.searchFormContainer.classList.toggle(this.hiderClass),i.collectionsBtnsContainer.classList.toggle(this.hiderClass)}function $e(){var e=i.collectionWatchedBtn.disabled;i.collectionWatchedBtn.disabled=!e,i.collectionQueueBtn.disabled=e}function Ze(){e(y)(this,Te,e(k)(this,Ae,Je).bind(this)),e(y)(this,Ce,e(k)(this,Ne,ze).bind(this,{isFromHome:!1})),i.collectionQueueBtn.addEventListener("click",e(d)(this,Te)),i.collectionWatchedBtn.addEventListener("click",e(d)(this,Ce))}function Ke(){i.collectionQueueBtn.removeEventListener("click",e(d)(this,Te)),i.collectionWatchedBtn.removeEventListener("click",e(d)(this,Ce))}var Xe=i.body,et=i.backdrop,tt=i.modalCloseBtn;function nt(){et.classList.add("js-hidden"),modalContainer.innerHTML="",Xe.classList.remove("js-modal-is-open"),tt.removeEventListener("click",nt)}tt.addEventListener("click",nt),et.addEventListener("click",(function e(t){t.target===t.currentTarget&&(nt(),et.removeEventListener("click",e))})),window.addEventListener("keydown",(function e(t){"Escape"===t.key&&(nt(),window.removeEventListener("keydown",e))}));var rt=new WeakMap,at=new WeakMap,it=function(){"use strict";function t(n){var r=n.apiService,a=n.markupRender;e(u)(this,t),e(p)(this,rt,{writable:!0,value:void 0}),e(p)(this,at,{writable:!0,value:void 0}),e(y)(this,rt,r),e(y)(this,at,a)}return e(P)(t,[{key:"getTrendingMoviesPage",value:function(t){var n=t.page,r=void 0===n?1:n,a=e(d)(this,rt).getTrendingMovies.bind(e(d)(this,rt),{page:r});e(d)(this,at).call(this,{loader:a,target:i.libraryContainer})}}]),t}(),ot=new WeakMap,ct=new WeakMap,st=new WeakMap,lt=function(){"use strict";function t(n){var r=n.apiService,a=n.markupRender,i=n.collectionsService;e(u)(this,t),e(p)(this,ot,{writable:!0,value:void 0}),e(p)(this,ct,{writable:!0,value:void 0}),e(p)(this,st,{writable:!0,value:void 0}),e(y)(this,ot,r),e(y)(this,st,i),e(y)(this,ct,a)}return e(P)(t,[{key:"getCollectionMoviesPage",value:function(t){var n=t.collectionName,r=t.page,a=void 0===r?1:r;if(!e(d)(this,st).isCollectionExist({collection:n}))return console.log("collection ".concat(n," does not exist"));if(!e(d)(this,st).isPageExist({collection:n,page:a}))return console.log("page ".concat(a," does not exist in the collection ").concat(n));var o=e(d)(this,st).getCollectionIdsBundle({collection:n,page:a}),c=e(d)(this,ot).getMoviesBundle.bind(e(d)(this,ot));e(d)(this,ct).call(this,{loader:c,target:i.libraryContainer,content:o})}}]),t}(),ut=new WeakMap,dt=new WeakMap,ht=function(){"use strict";function t(n){var r=n.apiService,a=n.markupRender;e(u)(this,t),e(p)(this,ut,{writable:!0,value:void 0}),e(p)(this,dt,{writable:!0,value:void 0}),e(y)(this,ut,r),e(y)(this,dt,a)}return e(P)(t,[{key:"getMoviesBySearch",value:function(t){var n=t.query,r=t.page,a=void 0===r?1:r,o=e(d)(this,ut).searchMovies.bind(e(d)(this,ut),{query:n,page:a});e(d)(this,dt).call(this,{loader:o,target:i.libraryContainer})}}]),t}(),ft=new WeakMap,vt=function(){"use strict";function t(){e(u)(this,t),e(p)(this,ft,{writable:!0,value:void 0})}return e(P)(t,[{key:"switchCaptions",value:function(t){var n=t.captions;e(y)(this,ft,n),console.log(e(d)(this,ft)),i.headerLogoName.textContent=e(d)(this,ft).logoName,i.headerHomeBtn.textContent=e(d)(this,ft).buttons.home,i.headerMyLibBtn.textContent=e(d)(this,ft).buttons.library,i.collectionWatchedBtn.textContent=e(d)(this,ft).buttons.watched,i.collectionQueueBtn.textContent=e(d)(this,ft).buttons.queue,i.searchForm.placeholder=e(d)(this,ft).searchPlaceholder}}]),t}(),pt=new WeakMap,gt=new WeakMap,mt=function(){"use strict";function t(n){var r=n.userPreferences;e(u)(this,t),e(p)(this,pt,{writable:!0,value:void 0}),e(p)(this,gt,{writable:!0,value:void 0}),e(ae)(this,"captions",void 0),e(y)(this,pt,r.getPreferences().language),e(y)(this,gt,new vt),"default"!==e(d)(this,pt)&&this.setCurrentLanguage({language:e(d)(this,pt)})}return e(P)(t,[{key:"setCurrentLanguage",value:function(t){var n=t.language;this.captions=o[n],e(d)(this,gt).switchCaptions({captions:this.captions})}},{key:"captions",get:function(){return this.captions}},{key:"getCurrentLanguage",value:function(){return e(d)(this,pt)}}]),t}(),yt=new WeakMap,wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,kt=function(){"use strict";function t(n){var r=n.renderTarget,a=n.timeOut;e(u)(this,t),e(p)(this,yt,{writable:!0,value:void 0}),e(p)(this,wt,{writable:!0,value:void 0}),e(p)(this,bt,{writable:!0,value:500}),e(p)(this,_t,{writable:!0,value:{language:"language",warning:"warning"}}),e(y)(this,yt,r),e(y)(this,bt,a||e(d)(this,bt)),document.body.insertAdjacentHTML("beforeend",'<div id="notifier-display" class="notifier-display js-hidden"></div>'),e(y)(this,wt,document.querySelector("#notifier-display"))}return e(P)(t,[{key:"showNotification",value:function(t){var n=t.message,r=t.type,a=void 0===r?"warning":r,i=this;n&&Object.keys(e(d)(this,_t)).includes(a)&&(e(d)(this,wt).innerHTML=n,e(d)(this,wt).classList.add(e(d)(this,_t)[a]),e(d)(this,wt).classList.remove("js-hidden"),setTimeout((function(){e(d)(i,wt).innerHTML="",e(d)(i,wt).classList.add("js-hidden"),e(d)(i,wt).classList.remove(e(d)(i,_t)[a])}),e(d)(this,bt)))}},{key:"renderNotification",value:function(t){var n=t.message;n&&(e(d)(this,yt).innerHtml='<p class="notifier__message">'.concat(n,"</p>"))}}]),t}(),Mt=new ne("userPreferences"),Lt=Mt.getPreferences().language,Pt=new ue("userCollections"),xt=(new kt({renderTarget:i.libraryContainer,timeOut:2e3}),new mt({userPreferences:Mt}),new A({language:Lt}));new function t(n){"use strict";var r=n.trendingHandler,a=n.collectionHandler,i=n.modalHandler,o=n.searchHandler;e(u)(this,t),e(M)(this,Be),e(M)(this,qe),e(M)(this,Re),e(M)(this,Ne),e(M)(this,Ae),e(M)(this,He),e(M)(this,Fe),e(M)(this,Ie),e(M)(this,De),e(M)(this,Ge),e(p)(this,Ee,{writable:!0,value:void 0}),e(p)(this,Oe,{writable:!0,value:void 0}),e(p)(this,je,{writable:!0,value:void 0}),e(p)(this,We,{writable:!0,value:void 0}),e(p)(this,Te,{writable:!0,value:void 0}),e(p)(this,Ce,{writable:!0,value:void 0}),e(y)(this,Ee,r),e(y)(this,Oe,a),e(y)(this,je,i),e(y)(this,We,o),this.hiderClass="js-hidden",this.myLibraryClass="my-library",e(k)(this,Be,Ue).call(this),e(k)(this,qe,Qe).call(this)}({trendingHandler:new it({apiService:xt,markupRender:Se}),collectionHandler:new lt({apiService:xt,collectionsService:Pt,markupRender:Se}),modalHandler:new ge({apiService:xt}),searchHandler:new ht({apiService:xt,markupRender:Se})})}();
//# sourceMappingURL=index.56c53f61.js.map
