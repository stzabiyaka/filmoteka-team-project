!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=o(a("ds8z5")),n=o(a("l5bVx"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var o={home:"home",search:"search results",watched:"watched",queue:"queue"},i={body:document.body,headerContainer:document.querySelector("#header"),headerLogo:document.querySelector("#logo"),headerHomeBtn:document.querySelector("#home"),headerMyLibBtn:document.querySelector("#my-library"),collectionsBtnsContainer:document.querySelector("#collections-nav"),collectionWatchedBtn:document.querySelector("#watched"),collectionQueueBtn:document.querySelector("#queue"),searchFormContainer:document.querySelector("#search-rorm-container"),searchForm:document.querySelector("#search-form"),libraryContainer:document.querySelector("#library"),backdrop:document.querySelector("#backdrop"),modalContainer:document.querySelector("#modal"),modalAddToWatchedBtn:document.querySelector("#watched-add"),modalAddToQueueBtn:document.querySelector("#queue-add"),modalCloseBtn:document.querySelector("#modal-close"),teamLink:document.querySelector("#team"),paginator:document.querySelector("#paginator")},c={};function s(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var r=d.default(e,t,"get");return f.default(e,r)};var d=h(a("1UHsN")),f=h(a("ffZzF"));function h(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){g.default(e,t),t.set(e,r)};var v,g=(v=a("5k7tO"))&&v.__esModule?v:{default:v};var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,r){var n=y.default(e,t,"set");return _.default(e,n,r),r};var y=b(a("1UHsN")),_=b(a("jdVyQ"));function b(e){return e&&e.__esModule?e:{default:e}}var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r};var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(e,t){P.default(e,t),t.add(e)};var P=function(e){return e&&e.__esModule?e:{default:e}}(a("5k7tO"));var x={};function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e,t,r){t&&E(e.prototype,t);r&&E(e,r);return e};var L={};Object.defineProperty(L,"__esModule",{value:!0}),L.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var O={},M=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype),i=new M(n||[]);return o._invoke=function(e,t,r){var n=d;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(e,t,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function g(){}function m(){}function y(){}var _={};s(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==r&&n.call(w,o)&&(_=w);var k=y.prototype=g.prototype=Object.create(_);function P(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=y,s(k,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},P(x.prototype),s(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new x(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},P(k),s(k,c,"Generator"),s(k,o,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(O);try{regeneratorRuntime=M}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=M:Function("r","regeneratorRuntime = r")(M)}var S=new WeakMap,j=new WeakMap,A=new WeakMap,T=new WeakSet,q=new WeakSet,R=new WeakSet,C=function(){"use strict";function t(r){var n=r.language,a=void 0===n?"default":n;e(u)(this,t),e(k)(this,T),e(k)(this,q),e(k)(this,R),e(p)(this,S,{writable:!0,value:void 0}),e(p)(this,j,{writable:!0,value:void 0}),e(L)(this,"page",void 0),e(p)(this,A,{writable:!0,value:void 0}),e(m)(this,S,"704d5b04a49684ea4810e36d12ae79df"),e(m)(this,j,"https://api.themoviedb.org/3"),this.URL_PARAMETERS={trending:"trending/movie/day",search:"search/movie",movieDetails:"movie",genres:"genre/movie/list"},this.LANGUAGES={default:"en-US",ukrainian:"uk-UA"},this.page=1,this.genres=null,this.setCurrentLanguage({language:this.LANGUAGES[a]})}return e(x)(t,[{key:"getGenres",value:function(){var t=this;return e(c)(e(O).mark((function r(){var n,a;return e(O).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(e(l)(t,j),"/").concat(t.URL_PARAMETERS.genres,"?api_key=").concat(e(l)(t,S),"&language=").concat(e(l)(t,A)),r.next=3,e(w)(t,T,W).call(t,n);case 3:a=r.sent,t.genres=a.genres;case 5:case"end":return r.stop()}}),r)})))()}},{key:"getTrendingMovies",value:function(t){var r=t.page,n=this;return e(c)(e(O).mark((function t(){var a,o;return e(O).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),n.page=r,a="".concat(e(l)(n,j),"/").concat(n.URL_PARAMETERS.trending,"?api_key=").concat(e(l)(n,S),"&page=").concat(n.page,"&language=").concat(e(l)(n,A)),t.next=5,e(w)(n,T,W).call(n,a);case 5:return o=t.sent,e(w)(n,q,G).call(n,o.results),t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})))()}},{key:"searchMovies",value:function(t){var r=t.query,n=t.page,a=void 0===n?1:n,o=this;return e(c)(e(O).mark((function t(){var n,i;return e(O).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.page=a,n="".concat(e(l)(o,j),"/").concat(o.URL_PARAMETERS.search,"?api_key=").concat(e(l)(o,S),"&language=").concat(e(l)(o,A),"&query=").concat(r,"&page=").concat(o.page,"&include_adult=false"),t.next=4,e(w)(o,T,W).call(o,n);case 4:return i=t.sent,e(w)(o,q,G).call(o,i.results),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getMovie",value:function(t){var r=t.movieId,n=this;return e(c)(e(O).mark((function t(){var a,o;return e(O).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(e(l)(n,j),"/").concat(n.URL_PARAMETERS.movieDetails,"/").concat(r,"?api_key=").concat(e(l)(n,S),"&language=").concat(e(l)(n,A)),t.next=3,e(w)(n,T,W).call(n,a);case 3:return o=t.sent,e(w)(n,R,N).call(n,o),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))()}},{key:"getMoviesBundle",value:function(t){var r=t.bundle,n=t.page,a=void 0===n?1:n,o=t.total_pages,i=void 0===o?1:o,s=this;return e(c)(e(O).mark((function t(){var n,o;return e(O).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.map((function(e){return s.getMovie({movieId:e})})),e.next=3,Promise.all(n);case 3:return o=e.sent,e.abrupt("return",{results:o,page:a,total_pages:i});case 5:case"end":return e.stop()}}),t)})))()}},{key:"resetPage",value:function(){this.page=1}},{key:"page",get:function(){return this.page},set:function(e){this.page=e}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page-=1}},{key:"setCurrentLanguage",value:function(t){var r=t.language;e(m)(this,A,Object.values(this.LANGUAGES).includes(r)?r:this.LANGUAGES.default),this.getGenres()}}]),t}();function W(e){return U.apply(this,arguments)}function U(){return(U=e(c)(e(O).mark((function t(r){var n,a;return e(O).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.status);case 5:return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function G(e){var t=this;e.forEach((function(e){var r=t;e.genre_ids=e.genre_ids.map((function(e){return r.genres.find((function(t){return t.id===e})).name})),e.genres=e.genre_ids,delete e.genre_ids}))}function N(e){e.genres=e.genres.map((function(e){return e.name}))}var H=a("ds8z5"),B={};Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D.default(e,t)};var D=function(e){return e&&e.__esModule?e:{default:e}}(a("gD1JV"));var I={};Object.defineProperty(I,"__esModule",{value:!0}),I.default=function(e){var t=F.default();return function(){var r,n=Q.default(e);if(t){var a=Q.default(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return V.default(this,r)}};var F=z(a("aTHs7")),Q=z(a("fVNic")),V=z(a("jmhxu"));function z(e){return e&&e.__esModule?e:{default:e}}var J=new WeakMap,Z=function(){"use strict";function t(r){e(u)(this,t),e(p)(this,J,{writable:!0,value:void 0}),e(m)(this,J,r)}return e(x)(t,[{key:"save",value:function(t){try{var r=JSON.stringify(t);localStorage.setItem(e(l)(this,J),r)}catch(e){console.log("Set state error:",e.message)}}},{key:"load",value:function(){try{var t=localStorage.getItem(e(l)(this,J));return null===t?void 0:JSON.parse(t)}catch(e){console.log("Get state error:",e.message)}}},{key:"remove",value:function(){localStorage.removeItem(e(l)(this,J))}}]),t}(),Y=new WeakMap,K=new WeakSet,X=function(t){"use strict";e(B)(n,t);var r=e(I)(n);function n(t){var a;return e(u)(this,n),a=r.call(this,t),e(k)(e(H)(a),K),e(p)(e(H)(a),Y,{writable:!0,value:void 0}),e(w)(a,K,$).call(e(H)(a)),a}return e(x)(n,[{key:"getPreferences",value:function(){return e(l)(this,Y)}},{key:"setLanguage",value:function(t){var r=t.language;e(l)(this,Y).language=r,this.save(e(l)(this,Y))}},{key:"setTheme",value:function(t){var r=t.theme;e(l)(this,Y).theme=r,this.save(e(l)(this,Y))}},{key:"setIsUser",value:function(t){var r=t.isUser;e(l)(this,Y).isUser=r,this.save(e(l)(this,Y))}}]),n}(Z);function $(){e(m)(this,Y,this.load()),e(l)(this,Y)||e(m)(this,Y,{language:"default",theme:"default",isUser:void 0})}H=a("ds8z5");var ee=new WeakMap,te=new WeakMap,re=new WeakSet,ne=new WeakSet,ae=function(t){"use strict";e(B)(n,t);var r=e(I)(n);function n(t){var a;return e(u)(this,n),a=r.call(this,t),e(k)(e(H)(a),re),e(k)(e(H)(a),ne),e(L)(e(H)(a),"currentPage",void 0),e(L)(e(H)(a),"perPage",void 0),e(p)(e(H)(a),ee,{writable:!0,value:void 0}),e(p)(e(H)(a),te,{writable:!0,value:void 0}),e(m)(e(H)(a),te,0),a.perPage=9,a.currentPage=1,e(w)(a,re,oe).call(e(H)(a)),a}return e(x)(n,[{key:"getCollectionPage",value:function(t){var r=t.page,n=void 0===r?1:r;if(!this.isCollectionExist())return"collection is empty";if(void 0===e(l)(this,ee)||e(l)(this,ee)===[]||!e(l)(this,te)||!this.isPageExist({page:n}))return"something went wrong";this.currentPage=n;var a=(this.currentPage-1)*this.perPage;return{bundle:1===e(l)(this,te)?e(l)(this,ee):e(l)(this,ee).slice(a,a+this.perPage),totalPages:e(l)(this,te),page:this.currentPage}}},{key:"addToCollection",value:function(t){var r=t.id,n=void 0===r?null:r;n&&!this.isInCollection({id:n})&&(e(l)(this,ee).push(n),e(w)(this,ne,ie).call(this))}},{key:"removeFromCollection",value:function(t){var r=t.id,n=void 0===r?null:r;if(this.isInCollection(n)){var a=e(l)(this,ee).indexOf(n);e(l)(this,ee).splice(a,1),e(w)(this,ne,ie).call(this)}}},{key:"isInCollection",value:function(t){var r=t.id,n=void 0===r?null:r;if(n)return e(l)(this,ee).includes(n)}},{key:"isCollectionExist",value:function(){return!!e(l)(this,te)}},{key:"currentPage",get:function(){return this.currentPage},set:function(e){this.currentPage=e}},{key:"perPage",get:function(){return this.perPage},set:function(e){this.perPage=e}},{key:"resetCurrentPage",value:function(){this.currentPage=1}},{key:"isPageExist",value:function(t){var r=t.page,n=void 0===r?1:r;return e(l)(this,te)>=n}}]),n}(Z);function oe(){e(m)(this,ee,this.load()),e(l)(this,ee)||e(m)(this,ee,[]),e(m)(this,te,Math.ceil(e(l)(this,ee).length/this.perPage))}function ie(){this.save(e(l)(this,ee))}var ce=function(){"use strict";function t(){e(u)(this,t)}return e(x)(t,null,[{key:"getImagePath",value:function(e){var t=e.path,r=e.width,n=Object.keys(this.width).includes(r)?this.width[r]:this.width.default;return"".concat(this.BASE_URL).concat(n).concat(t)}}]),t}();function se(e){var t=e.genres,r=e.poster_path,n=e.release_date,a=e.title,o=e.vote_average,i=e.id;if(0!==t.length)return(t=t.map((function(e){return'<span class="movie-card_genres">'.concat(e,"</span>")}))).length>2&&(t=t.slice(0,2)).push('<span class="movie-card_genres">Other</span>'),'<article class="movie-card" data-movie-id="'.concat(i,'">\n    <picture>\n        <source srcset="').concat(ce.getImagePath({path:r}),", 1x, ").concat(ce.getImagePath({path:r,width:"retina"}),', 2x" type="image/jpeg">\n        <img class="movie-card_img" src= "').concat(ce.getImagePath({path:r}),' " alt=').concat(a,'>\n    </picture>\n    <h2 class="movie-card_title">').concat(a,'</h2>\n    <div class="movie-card_info">\n        ').concat(t.join(", "),'\n        <p class="movie-card_symbol">|</p>\n        <p class="movie-card_date">').concat(n,'</p>\n        <div class="movie-card_avarage">\n            <p class="movie-card_avarage__accent">').concat(o,"</p>\n        </div>\n    </div>\n</article>")}e(L)(ce,"BASE_URL","https://image.tmdb.org/t/p/"),e(L)(ce,"width",{default:"w342",retina:"w780",original:"original"});var ue={backdrop:document.querySelector("#backdrop-modal-card"),testOpenModalCard:document.querySelector("#try-to-open-modal-card"),modalContainer:document.querySelector("#modal")};var le=new WeakMap,de=new WeakMap,fe=new WeakMap,he=new WeakMap,pe=new WeakMap,ve=new WeakSet,ge=new WeakSet;function me(){var e=i.headerHomeBtn.disabled;i.headerHomeBtn.disabled=!e,i.headerMyLibBtn.disabled=e,i.headerLogo.classList.toggle("disabled")}new(function(){"use strict";function t(r){var n=r.apiService,a=r.wathedService,i=r.queueService,c=r.markupRender,s=r.modalRender;e(u)(this,t),e(k)(this,ve),e(k)(this,ge),e(p)(this,le,{writable:!0,value:void 0}),e(p)(this,de,{writable:!0,value:void 0}),e(p)(this,fe,{writable:!0,value:void 0}),e(p)(this,he,{writable:!0,value:void 0}),e(p)(this,pe,{writable:!0,value:void 0}),this.siteCurrentPage=o.home,e(m)(this,le,n),e(m)(this,de,a),e(m)(this,fe,i),e(m)(this,he,c),e(m)(this,pe,s),this.hiderClass="js-hidden",this.init(),this.homeHandler()}return e(x)(t,[{key:"init",value:function(){i.headerLogo.addEventListener("click",this.homeHandler.bind(this)),i.headerHomeBtn.addEventListener("click",this.homeHandler.bind(this)),i.headerMyLibBtn.addEventListener("click",this.watchedHandler.bind(this))}},{key:"homeHandler",value:function(){var t=e(l)(this,le).getTrendingMovies.bind(e(l)(this,le),{page:1});i.collectionsBtnsContainer.classList.add(this.hiderClass),e(w)(this,ve,me).call(this),e(l)(this,he).call(this,{loader:t,target:i.libraryContainer})}},{key:"searchHandler",value:function(t){var r=t.searchQuery,n=t.page,a=void 0===n?1:n;e(l)(this,le).searchMovies.bind(e(l)(this,le),{searchQuery:r,page:a});console.log("QUEUE PAGE LOADED")}},{key:"watchedHandler",value:function(t){t.page;e(w)(this,ve,me).call(this),console.log("WATCHED PAGE LOADED")}},{key:"queueHandler",value:function(e){e.page;console.log("QUEUE PAGE LOADED")}},{key:"modalHandler",value:function(e){e.content;console.log("MODAL LOADED")}}]),t}())({apiService:new C({language:new X("userPreferences").getPreferences().language}),wathedService:new ae("moviesWatched"),queueService:new ae("moviesQueue"),markupRender:function(e){var t=e.loader,r=e.target;t(e.content).then((function(e){var t=e.results.map((function(e){return se(e)})).join("");r.innerHTML=t})).catch(console.log)}});ue.testOpenModalCard.addEventListener("click",(function(){ue.backdrop.classList.remove("js-hidden");var e,t,r,n,a,o,i,c,s,u=(t=(e={about:"Four of the West’s most infamous outlaws assemble to steal a huge stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to plan one is killed and the other three escapes with bags of gold hide out in the abandoned gold mine where they happen across another gang of three – who themselves were planning to hit the very same bank! As tensions rise, things go from bad to worse as they realise the bags of gold are filled with lead... they’ve been double crossed – but by who and how?",imgSrc:"https://image.tmdb.org/t/p/original//ci5A9TPmNajMxt1L8p4KlZ76sc9.jpg",imgAlt:"test",originalTitle:"A FISTFUL OF LEAD",vote:"7.3",votes:"1260",popularity:"100.2",genre:"Western"}).about,r=e.imgSrc,n=e.imgAlt,a=e.originalTitle,o=e.vote,i=e.votes,c=e.popularity,s=e.genre,'\n\n        <div class="modal-card-thumb__img" >\n            <img src="'.concat(r,'" alt="').concat(n,'" loading="lazy" class="modal-card__img" type="image/jpeg" id="img-in-modal-card-picture"/>\n        </div>   \n            \n        <div class="modal-card-thumb__content">\n            <div class="modal-card-info">\n                <h2 class="modal-card-info__title">').concat(a,'</h2>\n                <div class="modal-card__thumb--characteristics">\n                    <ul class="modal-card-info__characteristics">\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Vote/Votes</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Popularity</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Original Title</p>\n                        </li>\n                        <li class="modal-card-info__characteristics--item">\n                            <p class="modal-card-info__characteristics--name">Genre</p>\n                        </li>\n                    </ul>\n                    <ul class="modal-card-info__data">\n                        <li class="modal-card-info__data--item">                            \n                            <p class="modal-card-info__data--slesh">\n                                <span class="modal-card-info__data--vote">').concat(o,'</span>\n                                /\n                                <span class="modal-card-info__data--votes">').concat(i,'</span>\n                            </p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--popularity">').concat(c,'</p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--original-title">').concat(a,'</p>\n                        </li>\n                        <li class="modal-card-info__data--item">\n                            <p class="modal-card-info__data--genre">').concat(s,'</p>\n                        </li>\n                    </ul>\n                </div>\n                <h3 class="modal-card-info-about__title">About</h3>\n                <p class="modal-card-info-about__description">').concat(t,'</p>\n            </div>\n            <div class="modal-card-thumb__btn">\n                <button type="button" id="watched-add" title="add to Watched" class="modal-card-btn__watched">add to Watched</button>\n                <button type="button" id="queue-add" title="add to Queue" class="modal-card-btn__queue">add to queue</button>\n            </div>\n        </div>\n    \n    '));ue.modalContainer.innerHTML=u}))}();
//# sourceMappingURL=index.83a119b3.js.map
