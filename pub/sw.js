!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=8)}([function(t,e,r){t.exports=r(9)},function(t,e,r){"use strict";(function(t){var r=t((function(){importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js")}),"SW/Util/Workbox/importExternalScripts"),n=t((function(){workbox.loadModule("workbox-core"),workbox.loadModule("workbox-routing"),workbox.loadModule("workbox-strategies"),workbox.loadModule("workbox-cache-expiration")}),"SW/Util/Workbox/loadModules");"undefined"==typeof workbox&&r(),workbox?(n(),console.log("Yay! Workbox is loaded 🎉")):console.log("Boo! Workbox didn't load 😬"),e.a=workbox}).call(this,r(2))},function(t,e,r){var n=r(10),o=r(11),i=r(12),a=r(13),c=function(t){return t.prototype.__namespaces__};t.exports=function(t,e){!function(t,e){var r=Object.assign([],Reflect.get(t.prototype,"__namespaces__"));r.includes(e)||r.push(e),t.prototype.__namespaces__=r}(t,e);var r={get:n("class",c(t)),apply:o(c(t)),construct:i(c(t))},u=new Proxy(t,r);return a(u)}},function(t,e){t.exports=function(t,e){var r=t.implementation;if("function"==typeof t)return t;if("function"==typeof r)return r;throw new Error("No implementation found in plugin definition for member ".concat(e,"."))}},function(t,e){t.exports=function(t,e,r){return t.reduce((function(t,n){if(r){var o,i,a=(Object.getOwnPropertyDescriptor((null===(o=globalThis.plugins)||void 0===o||null===(i=o[n])||void 0===i?void 0:i[e])||{},r)||{}).value;if(a)return t.concat(a)}else{var c,u,f=null===(c=globalThis.plugins)||void 0===c||null===(u=c[n])||void 0===u?void 0:u[e];if(f)return t.concat(f)}return t}),[])}},function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return a}));var n=r(0),o=r.n(n);function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var a=200,c=t((function(t,e){return fetch(t).then((function(r){var n=r.status===a,o=r.clone();return n&&e.put(t.url,o),r}))}),"SW/Handler/StaleWhileRevalidateHandler/makeRequestAndUpdateCache"),u=t((function(t,e){var r=t.headers.get("Application-Model");return c(t,e).then((function(t){t.clone().json().then((function(t){var e=new BroadcastChannel(r);e.postMessage({payload:t,type:r}),e.close()}),(function(t){return console.log(t)}))}),(function(t){return console.log(t)})),!0}),"SW/Handler/StaleWhileRevalidateHandler/shouldBeRevalidated"),f=t(function(){var t,e=(t=o.a.mark((function t(e){var r,n,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.request,n=e.request,t.next=3,caches.open(self.CACHE_NAME);case 3:return i=t.sent,t.next=6,i.match(n);case 6:if(!(a=t.sent)){t.next=10;break}return u(r,i),t.abrupt("return",a);case 10:return t.abrupt("return",c(r,i));case 11:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}(),"SW/Handler/StaleWhileRevalidateHandler/staleWhileRevalidate"),l=t((function(t){var e=t.event;e.respondWith(f(e))}),"SW/Handler/StaleWhileRevalidateHandler/staleWhileRevalidateHandler");e.b=l}).call(this,r(2))},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(3);t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return function(){for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];var u=e.reduce((function(e,i){return function(){var c=o(i,t.name);return"object"===n(t)?c(e,r):c(a,e.bind(r),r)}}),t);return u(a)}}},function(t,e,r){"use strict";(function(t){var r=t((function(t){return new workbox.strategies.CacheFirst({cacheName:CACHE_NAME,plugins:[new workbox.expiration.Plugin({maxAgeSeconds:t})]})}),"SW/Handler/StaleWhileRevalidateHandler/cacheFirst\n"),n=t((function(t){return r(263e4).handle(t)}),"SW/Handler/StaleWhileRevalidateHandler/CacheFirstOneYear\n");e.a=n}).call(this,r(2))},function(t,e,r){t.exports=r(15)},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function s(){}function p(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=h.prototype=s.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m.constructor=h,h.constructor=p,p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(6),i=r(4);t.exports=function(t,e){return function(r,a,c){var u=Reflect.get(r,a,c),f=i(e,"class"===t?"static-member":"member-function",a);if(!f.length)return u;var l=o(u,f,c);return"object"===n(u)?l():l}}},function(t,e,r){function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=r(6),i=r(4);t.exports=function(t){return function(e,r,a){var c=i(t,"function");return c.length?o(e,c,r).apply(void 0,n(a)):e.apply(r,a)}}},function(t,e,r){function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e,r){return(i=o()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&a(o,r.prototype),o}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=r(3),f=r(4);t.exports=function(t){return function(e,r){var o=i(e,c(r));return f(t,"member-property").forEach((function(t){return Object.entries(t).forEach((function(t){var e=n(t,2),r=e[0],i=e[1],a=o[r]||function(){},c=i.reduce((function(t,e){return u(e,a.name)(t,o)}),a);o[r]=c}))})),o.__construct&&o.__construct.apply(o,c(r)),o}}},function(t,e,r){var n=r(3),o=r(14);t.exports=function(t){var e=t.prototype.__namespaces__;return o(e).reduce((function(e,r){return n(r,t.name)(e)}),t)}},function(t,e){t.exports=function(t){var e,r,n=t[t.length-1];return(null===(e=globalThis.plugins)||void 0===e||null===(r=e[n])||void 0===r?void 0:r.class)||[]}},function(t,e,r){"use strict";r.r(e),r.d(e,"respondOffline",(function(){return d})),r.d(e,"onFetch",(function(){return v}));var n=r(0),o=r.n(n);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=["member-function","member-property","static-member","function","class"],c=["function","class"];var u=function(t){return Array.isArray(t)?t:[t]},f=function(t){return t.sort((function(t,e){var r=t.position,n=void 0===r?100:r,o=e.position;return n-(void 0===o?100:o)}))};globalThis.plugins=function(t){var e=t.reduce((function(t,e){return Object.entries(e).forEach((function(e){var r=i(e,2),n=r[0],o=r[1];t[n]||(t[n]={}),Object.entries(o).forEach((function(e){var r=i(e,2),o=r[0],f=r[1];!function(t,e){if(!a.includes(t))throw Error("Unexpected handler type '".concat(t,"' for namespace '").concat(e,"', expected one of [").concat(a.join(", "),"]"))}(o,n),c.includes(o)?function(t,e,r,n){t[e][r]||(t[e][r]=[]),u(n).forEach((function(n){t[e][r].push(n)}))}(t,n,o,f):function(t,e,r,n){t[e][r]||(t[e][r]={}),Object.entries(n).forEach((function(n){var o=i(n,2),a=o[0],c=o[1];t[e][r][a]||(t[e][r][a]=[]),u(c).forEach((function(n){t[e][r][a].push(n)}))}))}(t,n,o,f)}))})),t}),{});return function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))for(var r in t[e])if(Object.prototype.hasOwnProperty.call(t[e],r)){if(c.includes(r)){t[e][r]=f(t[e][r]);continue}for(var n in t[e][r])Object.prototype.hasOwnProperty.call(t[e][r],n)&&(t[e][r][n]=f(t[e][r][n]))}}(e),e}([]);var l=r(1),s=r(7),p=r(5);function h(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}self.__precacheManifest&&(self.__precacheManifest.push({revision:(new Date).getTime(),url:"/"}),l.a.precaching.precacheAndRoute(self.__precacheManifest));var d=function(){var t,e=(t=o.a.mark((function t(e){var r,n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.open(self.CACHE_NAME);case 2:return r=t.sent,t.next=5,r.match("/");case 5:if(n=t.sent,navigator.onLine){t.next=8;break}return t.abrupt("return",n);case 8:if(n){t.next=13;break}return t.next=11,fetch("/");case 11:(i=t.sent).status===p.a&&r.put("/",i.clone());case 13:return t.abrupt("return",fetch(e.request));case 14:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}(),v=function(t){var e=t.request,r=e.url,n=e.destination,o=new URL(r).hostname;"document"===n&&o===self.location.hostname&&t.respondWith(d(t))};self.addEventListener("fetch",v),self.addEventListener("install",(function(){self.skipWaiting()}));self.addEventListener("activate",(function(t){t.waitUntil(Promise.all([caches.keys().then((function(t){return Promise.all(t.map((function(t){return caches.delete(t)})))})),new Promise((function(t){indexedDB||t();var e=indexedDB.deleteDatabase(self.CACHE_NAME);e.onerror=function(){return t()},e.onsuccess=function(){return t()}}))]))})),self.CACHE_NAME="app-runtime-static",l.a.routing.registerRoute(new RegExp(/\/graphql/),p.b),l.a.routing.registerRoute(new RegExp(/(\/assets|\.css|\.js)/),s.a)}]);
//# sourceMappingURL=sw.js.map