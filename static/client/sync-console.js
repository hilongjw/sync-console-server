/*!
 * SyncConsole.js v0.1.7
 * (c) 2017 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 * 
 */
!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){function t(e){delete M[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+_+".hot-update.js",t.appendChild(n)}function o(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,o=p.p+""+_+".hot-update.json";n.open("GET",o,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(n.responseText)}catch(e){return void t(e)}e(r)}}})}function r(e){var t=L[e];if(!t)return p;var n=function(n){return t.hot.active?(L[n]?L[n].parents.indexOf(e)<0&&L[n].parents.push(e):(x=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),x=[]),p(n)};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&"e"!==o&&Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(o));return n.e=function(e){function t(){P--,"prepare"===E&&(T[e]||l(e),0===P&&0===S&&f())}return"ready"===E&&c("prepare"),P++,p.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:a,apply:d,status:function(e){if(!e)return E;k.push(e)},addStatusHandler:function(e){k.push(e)},removeStatusHandler:function(e){var t=k.indexOf(e);t>=0&&k.splice(t,1)},data:O[e]};return v=void 0,t}function c(e){E=e;for(var t=0;t<k.length;t++)k[t].call(null,e)}function u(e){return+e+""===e?+e:e}function a(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return w=e,c("check"),o().then(function(e){if(!e)return c("idle"),null;C={},T={},I=e.c,g=e.h,c("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});b={};for(var n in M)l(n);return"prepare"===E&&0===P&&0===S&&f(),t})}function s(e,t){if(I[e]&&C[e]){C[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(b[n]=t[n]);0==--S&&0===P&&f()}}function l(e){I[e]?(C[e]=!0,S++,n(e)):T[e]=!0}function f(){c("ready");var e=m;if(m=null,e)if(w)d(w).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.push(u(n));e.resolve(t)}}function d(n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];e.indexOf(o)<0&&e.push(o)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");n=n||{};var r,i,a,s,l,f={},d=[],h={},y=function(){console.warn("[HMR] unexpected require("+m.moduleId+") to disposed module")};for(var v in b)if(Object.prototype.hasOwnProperty.call(b,v)){l=u(v);var m;m=b[v]?function(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),c=i.id,u=i.chain;if((s=L[c])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:u,moduleId:c};if(s.hot._main)return{type:"unaccepted",chain:u,moduleId:c};for(var a=0;a<s.parents.length;a++){var l=s.parents[a],f=L[l];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:u.concat([l]),moduleId:c,parentId:l};t.indexOf(l)>=0||(f.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),o(n[l],[c])):(delete n[l],t.push(l),r.push({chain:u.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:v};var w=!1,j=!1,k=!1,S="";switch(m.chain&&(S="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":n.onDeclined&&n.onDeclined(m),n.ignoreDeclined||(w=new Error("Aborted because of self decline: "+m.moduleId+S));break;case"declined":n.onDeclined&&n.onDeclined(m),n.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+S));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(m),n.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+S));break;case"accepted":n.onAccepted&&n.onAccepted(m),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(m),k=!0;break;default:throw new Error("Unexception type "+m.type)}if(w)return c("abort"),Promise.reject(w);if(j){h[l]=b[l],o(d,m.outdatedModules);for(l in m.outdatedDependencies)Object.prototype.hasOwnProperty.call(m.outdatedDependencies,l)&&(f[l]||(f[l]=[]),o(f[l],m.outdatedDependencies[l]))}k&&(o(d,[m.moduleId]),h[l]=y)}var P=[];for(i=0;i<d.length;i++)l=d[i],L[l]&&L[l].hot._selfAccepted&&P.push({module:l,errorHandler:L[l].hot._selfAccepted});c("dispose"),Object.keys(I).forEach(function(e){!1===I[e]&&t(e)});for(var T,C=d.slice();C.length>0;)if(l=C.pop(),s=L[l]){var M={},A=s.hot._disposeHandlers;for(a=0;a<A.length;a++)(r=A[a])(M);for(O[l]=M,s.hot.active=!1,delete L[l],a=0;a<s.children.length;a++){var D=L[s.children[a]];D&&((T=D.parents.indexOf(l))>=0&&D.parents.splice(T,1))}}var H,q;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)&&(s=L[l]))for(q=f[l],a=0;a<q.length;a++)H=q[a],(T=s.children.indexOf(H))>=0&&s.children.splice(T,1);c("apply"),_=g;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var R=null;for(l in f)if(Object.prototype.hasOwnProperty.call(f,l)){s=L[l],q=f[l];var $=[];for(i=0;i<q.length;i++)H=q[i],r=s.hot._acceptedDependencies[H],$.indexOf(r)>=0||$.push(r);for(i=0;i<$.length;i++){r=$[i];try{r(q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:q[i],error:e}),n.ignoreErrored||R||(R=e)}}}for(i=0;i<P.length;i++){var N=P[i];l=N.module,x=[l];try{p(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e}),n.ignoreErrored||R||(R=t),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||R||(R=e)}}return R?(c("fail"),Promise.reject(R)):(c("idle"),Promise.resolve(d))}function p(t){if(L[t])return L[t].exports;var n=L[t]={i:t,l:!1,exports:{},hot:i(t),parents:(j=x,x=[],j),children:[]};return e[t].call(n.exports,n,n.exports,r(t)),n.l=!0,n.exports}var h=window.webpackJsonp;window.webpackJsonp=function(t,n,o){for(var r,i,c=0,u=[];c<t.length;c++)i=t[c],M[i]&&u.push(M[i][0]),M[i]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);for(h&&h(t,n,o);u.length;)u.shift()()};var y=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){s(e,t),y&&y(e,t)};var v,m,b,g,w=!0,_="c3e064b113e36e96892f",O={},x=[],j=[],k=[],E="idle",S=0,P=0,T={},C={},I={},L={},M={4:0};return p.e=function(e){function t(){r.onerror=r.onload=null,clearTimeout(i);var t=M[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),M[e]=void 0)}if(0===M[e])return Promise.resolve();if(M[e])return M[e][2];var n=new Promise(function(t,n){M[e]=[t,n]});M[e][2]=n;var o=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.timeout=12e4,p.nc&&r.setAttribute("nonce",p.nc),r.src=p.p+"client/sync-console-chunk-"+({}[e]||e)+"-"+{0:"f51b9a20ed3ac251f435",1:"106ec161ba634e730d66",2:"ca54067c1dc5920cb720"}[e]+".js";var i=setTimeout(t,12e4);return r.onerror=r.onload=t,o.appendChild(r),n},p.m=e,p.c=L,p.i=function(e){return e},p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e},p.h=function(){return _},r(115)(p.s=115)}({0:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},100:function(e,t,n){"use strict";var o=n(105),r=n.n(o),i=n(106),c=n.n(i);window.Promise||(window.Promise=c.a),Object.assign||(Object.assign=r.a),Array.prototype.map||(Array.prototype.map=function(e){for(var t=[],n=0,o=this.length;n<o;n++)t.push(e(this[n]));return t}),Array.prototype.filter||(Array.prototype.filter=function(e){for(var t=[],n=0,o=this.length;n<o;n++)e(this[n])&&t.push(this[n]);return t})},104:function(e,t){function n(e,t,n,r){return JSON.stringify(e,o(t,r),n)}function o(e,t){var n=[],o=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+o.slice(0,n.indexOf(t)).join(".")+"]"}),function(r,i){if(n.length>0){var c=n.indexOf(this);~c?n.splice(c+1):n.push(this),~c?o.splice(c,1/0,r):o.push(r),~n.indexOf(i)&&(i=t.call(this,r,i))}else n.push(i);return null==e?i:e.call(this,r,i)}}t=e.exports=n,t.getSerialize=o},105:function(e,t,n){"use strict";function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,a=o(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var l in n)i.call(n,l)&&(a[l]=n[l]);if(r){u=r(n);for(var f=0;f<u.length;f++)c.call(n,u[f])&&(a[u[f]]=n[u[f]])}}return a}},106:function(e,t,n){(function(t){!function(n){function o(){}function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function c(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?u:a)(t.promise,e._value);var o;try{o=n(e._value)}catch(e){return void a(t.promise,e)}u(t.promise,o)})}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void f(r(n,t),e)}e._state=1,e._value=t,s(e)}catch(t){a(e,t)}}function a(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}var d=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o);return c(this,new l(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function o(i,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var u=c.then;if("function"==typeof u)return void u.call(c,function(e){o(i,e)},n)}t[i]=c,0==--r&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var r=t.length,i=0;i<t.length;i++)o(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(95).setImmediate)},107:function(e,t,n){(function(e,t){!function(e,n){"use strict";function o(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[a]=o,u(a),a++}function r(e){delete s[e]}function i(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}function c(e){if(l)setTimeout(c,0,e);else{var t=s[e];if(t){l=!0;try{i(t)}finally{r(e),l=!1}}}}if(!e.setImmediate){var u,a=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){c(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&c(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){c(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var n=f.createElement("script");n.onreadystatechange=function(){c(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(c,0,e)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(0),n(7))},112:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},115:function(e,t,n){e.exports=n(39)},19:function(e,t){(function(t){e.exports=t}).call(t,{})},39:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=(n(100),n(96)),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,o){"object"===("undefined"==typeof exports?"undefined":r(exports))&&void 0!==e?e.exports=o():"function"==typeof define&&n(19)?define(o):t.SyncConsoleManager=o()}(this,function(){return o.a}),n.p="https://sync-console-fe.luojilab.com/"}).call(t,n(112)(e))},4:function(e,t,n){"use strict";function o(e,t){return t?t.toUpperCase():""}function r(){return"undefined"==typeof document||void 0===document.location?"":document.location.href}function i(e,t){var n=e||window.location.search||"",o=[],r={};if(n=n.replace(/.*?\?/,""),n.length){o=n.split("&");for(var i=0,c=o.length;i<c;i++){var u=o[i].split("=")[0];u.length&&(t?(void 0===r[u]&&(r[u]=[]),r[u].push(o[i].split("=")[1])):r[u]=o[i].split("=")[1])}}return r}function c(e){return"[object Number]"==Object.prototype.toString.call(e)}function u(e){return"[object String]"==Object.prototype.toString.call(e)}function a(e){return"[object Array]"==Object.prototype.toString.call(e)}function s(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function l(e){return"[object Undefined]"==Object.prototype.toString.call(e)}function f(e){return"[object Null]"==Object.prototype.toString.call(e)}function d(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function p(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(c(e)||u(e)||s(e)||a(e)||f(e)||h(e)||l(e)||d(e)))}function h(e){return"[object Function]"==Object.prototype.toString.call(e)}function y(e){if(!p(e)&&!a(e))return[];var t=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=[];for(var o in e)t.indexOf(o)<0&&n.push(o);return n=n.sort()}function v(e){return void 0===e?"undefined":"object"!==(void 0===e?"undefined":_(e))||e?{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase():"null"}function m(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function b(e){if(!e)return x;if("touchmove"===e.type){var t=e.touches[0];return{x:t.clientX,y:t.clientY}}return j.test(e.type)?{x:e.clientX,y:e.clientY}:x}function g(e,t){if(!window.localStorage)return!1;e="__SyncConsole_"+e;var n=!0;try{localStorage.setItem(e,t)}catch(e){console.debug(e),n=!1}return n}function w(e){if(window.localStorage)return e="__SyncConsole_"+e,localStorage.getItem(e)}n.d(t,"f",function(){return O}),t.d=r,t.a=i,t.e=h,t.c=y,t.b=v,t.g=m,t.j=b,t.h=g,t.i=w;var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=function(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}(function(e){return e.replace(/-(\w)/g,o)}),x={x:0,y:0},j=/mouse/},42:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){o(this,e),this._listeners={}}return r(e,[{key:"$on",value:function(e,t,n){return n=n||null,this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push({cb:t,ctx:n}),this._listeners[e].length-1}},{key:"$once",value:function(e,t,n){n=n||null}},{key:"$off",value:function(e,t){var n=this;this._listeners[e]&&this._listeners[e].length&&(t||(this._listeners[e].map(function(e){return null}),this._listeners[e]=[]),"function"==typeof t&&this._listeners[e].map(function(o,r){o.cb===t&&(n._listeners[e].splice(r,1),o=null)}),"number"==typeof t&&this._listeners[e].splice(t,1))}},{key:"$emit",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.length){var o=t[0];t.shift(),this._listeners[o]&&this._listeners[o].length&&this._listeners[o].map(function(e){e.cb.apply(e.ctx,t)})}}}]),e}();t.a=i},63:function(e,t,n){"use strict";function o(e){var t={};if(!e||!e.attributes)return t;for(var n=e.attributes,o=0;o<n.length;o++)t[n[o].nodeName]=n[o].nodeValue;return t}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{i:1},i=n.i(f.b)(e);if("text"===i)return{key:e.data,type:"string",props:{},index:t.i++,content:e.data};if("comment"===i)return{key:e.data,index:t.i++,is_SCONSOLE_DOM:!0,type:i,props:{},children:[e.data]};if(!e||!y.test(i))return{type:i};e.__sync_console_key__||(e.__sync_console_key__=++v);for(var c=[],u=0,a=e.childNodes.length;u<a;u++)c.push(r(e.childNodes[u],t));return{key:e.__sync_console_key__,index:t.i++,is_SCONSOLE_DOM:!0,tag:e.tagName.toLowerCase(),props:o(e),children:c}}function i(e){return e.props&&e.props.hasOwnProperty("ignore")}function c(e,t,n){var o=[];if(null!==e){if("string"===t.type&&"string"===e.type)e.content!==t.content&&o.push({type:h.a.TEXT,content:e.content});else if(t.tag===e.tag&&t.key===e.key){var r=u(t,e);r&&o.push({type:h.a.PROPS,props:r}),i(e)||a(t.children,e.children,n,o)}else o.push({type:h.a.REPLACE,node:e});o.length&&(n[t.index]=o)}}function u(e,t){var n,o,r=0,i=e.props||{},c=t.props||{},u={};for(n in i)o=i[n],c[n]!==o&&(r++,u[n]=c[n]);for(n in c)o=c[n],i.hasOwnProperty(n)||(r++,u[n]=c[n]);return 0===r?null:u}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments[2],r=arguments[3],i=n.i(d.a)(e,t,"key");if(t=i.children,i.moves.length){var u={type:h.a.REORDER,moves:i.moves};r.push(u)}e.map(function(e,n){c(t[n],e,o)})}function s(e,t){var n={};return c(e,t,n),n}function l(e,t){h()(e,t)}var f=n(4),d=n(97),p=n(99),h=n.n(p);n.d(t,"a",function(){return y}),t.b=r,t.c=s,t.d=l;var y=/HTML([a-zA-Z]*)Element/i,v=0},7:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function c(){y&&p&&(y=!1,p.length?h=p.concat(h):v=-1,h.length&&u())}function u(){if(!y){var e=r(c);y=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,y=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var p,h=[],y=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new a(e,t)),1!==h.length||y||r(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},92:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(4),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(t){var n=t.maxLogCount;o(this,e),this.queue=this.load(),this.maxLogCount=n||30,this._onbeforeunload=null,this.mockQueuePush(),this.onCloseSave()}return i(e,[{key:"mockQueuePush",value:function(){var e=this,t=this.queue.push;this.queue.push=function(n){if(e.queue.length>e.maxLogCount)for(;e.queue.length>e.maxLogCount;)e.queue.shift();t.call(e.queue,n)}}},{key:"offCloseSave",value:function(){n.i(r.e)(this._onbeforeunload)?window.onbeforeunload=this._onbeforeunload:window.onbeforeunload=function(){}}},{key:"onCloseSave",value:function(){this._onbeforeunload=window.onbeforeunload,window.onbeforeunload=this.onbeforeunload.bind(this)}},{key:"onbeforeunload",value:function(){this.save()}},{key:"save",value:function(){var e=JSON.stringify(this.queue);n.i(r.h)("historyQueue",e)||(this.queue=[],n.i(r.h)("historyQueue","[]"))}},{key:"load",value:function(){var e=n.i(r.i)("historyQueue")||"[]",t=[];try{t=JSON.parse(e)}catch(e){console.error(e)}return t}},{key:"destroy",value:function(){this.offCloseSave(),this.queue=[]}}]),e}();t.a=c},93:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(42),u=n(104),a=n.n(u),s=n(94),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.options={methods:e.methods||["log","warn","info","error"]},n.logIndex=0,n.oldMethodMap={},n.mockConsole(),n}return i(t,e),l(t,[{key:"mockConsole",value:function(){var e=this;this.options.methods.map(function(t){e.oldMethodMap[t]=console[t];var n=console[t],o=e;console[t]=function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];if(!r||!r.length)return n.apply(console,r);var c={id:o.logIndex++,type:t,date:Date.now(),args:JSON.parse(a()(r,s.a))};o.$emit("new",c),n.apply(console,r)}})}},{key:"destroy",value:function(){var e=this;this.options.methods.map(function(t){console[t]=e.oldMethodMap[t]}),this.oldMethodMap={}}}]),t}(c.a);t.a=f},94:function(e,t,n){"use strict";function o(e){return e.replace(/\/.*\//,"")}function r(e){var t=e.$options.name||e.$options._componentTag;if(t)return t;var n=e.$options.__file;return n?o(n):e.$root===e?"Root":"Anonymous Component"}function i(e){var t=void 0;if(v&&(t=e._props))return Object.keys(t).map(function(n){var o=t[n],r=o.options;return{type:"props",key:o.path,value:e[o.path],meta:{type:r.type?c(r.type):"any",required:!!r.required,mode:m[o.mode]}}});if(t=e.$options.props){var o=[];for(var r in t){var i=t[r];r=n.i(h.f)(r),o.push({type:"props",key:r,value:e[r],meta:{type:i.type?c(i.type):"any",required:!!i.required}})}return o}return[]}function c(e){var t=e.toString().match(b);return"function"==typeof e?t&&t[1]||"any":"any"}function u(e){var t=v?e._props:e.$options.props,n=e.$options.vuex&&e.$options.vuex.getters;return Object.keys(e._data).filter(function(e){return!(t&&e in t||n&&e in n)}).map(function(t){return{key:t,value:e._data[t]}})}function a(e){var t=[],n=e.$options.computed||{};for(var o in n){var r=n[o],i="function"==typeof r&&r.vuex?"vuex bindings":"computed",c=null;try{c={type:i,key:o,value:e[o]}}catch(e){c={type:i,key:o,value:"(error during evaluation)"}}t.push(c)}return t}function s(e){var t=e.$route;if(t){var n=t.path,o=t.query,r=t.params,i={path:n,query:o,params:r};return t.fullPath&&(i.fullPath=t.fullPath),t.hash&&(i.hash=t.hash),t.name&&(i.name=t.name),t.meta&&(i.meta=t.meta),[{key:"$route",value:i}]}return[]}function l(e){var t=e.$options.vuex&&e.$options.vuex.getters;return t?Object.keys(t).map(function(t){return{type:"vuex getters",key:t,value:e[t]}}):[]}function f(e){var t=e.$observables;return t?Object.keys(t).map(function(t){return{type:"observables",key:t,value:e[t]}}):[]}function d(e){if(e){var t=e.constructor;return t&&t.version&&(v=t.version&&"1"===t.version.split(".")[0]),{id:e._uid,_is_SYNC_CONSOLE_Vue:!0,name:r(e),$el:e.$el,state:i(e).concat(u(e),a(e),s(e),l(e),f(e))}}return{}}function p(e,t){var o=n.i(h.b)(t);return y.a.test(o)?n.i(y.b)(t):t&&t._isVue?d(t):t}var h=n(4),y=n(63);t.a=p;var v=!1,m=["default","sync","once"],b=/^(?:function|class) (\w+)/},95:function(e,t,n){function o(e,t){this._id=e,this._clearFn=t}var r=Function.prototype.apply;t.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(107),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},96:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(4),i=n(93),c=n(92),u=n(98),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s={maxLogCount:50,server:"https://sync-console-fe.luojilab.com/",Vue:null},l=function(){function e(t){var i=this;o(this,e),this.query=n.i(r.a)(),this.options=Object.assign({},s,this.query,t),this.app=null,this.mockConsole=null,this.moveTrigger=new u.a({callback:function(){return i.show()}}),this.check(),this.initLogHistory(this.options)}return a(e,[{key:"initLogHistory",value:function(e){var t=this;this.history=new c.a(e),this.mockConsole=new i.a({methods:e.consoleMethods}),this.mockConsole.$on("new",function(e){t.history.queue.push(e),t.history.save()})}},{key:"destroyLogHistory",value:function(){this.mockConsole&&(this.mockConsole.destroy(),this.mockConsole=null),this.history&&(this.history.destroy(),this.history=null)}},{key:"initSyncConsole",value:function(){var e=this;return this.syncConsole?(this.destroyLogHistory(),Promise.resolve()):n.e(1).then(n.bind(null,117)).then(function(t){var n=t.default;return e.destroyLogHistory(),e.syncConsole=new n(e.options),e.syncConsole}).catch(function(e){console.error(e)})}},{key:"check",value:function(){this.options._sync_console_show?this.show():this.options._sync_console_remote&&this.initSyncConsole()}},{key:"loadApp",value:function(){var e=this;if(this.app)return Promise.resolve(this.app);var t=void 0;return n.e(0).then(n.bind(null,116)).then(function(n){return t=n,e.initSyncConsole()}).then(function(){return e.app=t.install(e.syncConsole),e.app})}},{key:"show",value:function(){var e=this;this.loadApp().then(function(t){t.show(),e.query._sync_console_token&&t.startRemote()})}},{key:"hide",value:function(){this.app.hide()}},{key:"destroy",value:function(){window.removeEventListener("touchmove",this.moveHandler)}}]),e}();t.a=l},97:function(e,t,n){"use strict";function o(e,t,n){function o(e){var t={index:e,type:0};y.push(t)}function c(e,t){var n={index:e,item:t,type:1};y.push(n)}function u(e){_.splice(e,1)}for(var a,s,l=r(e,n),f=r(t,n),d=f.free,p=l.keyIndex,h=f.keyIndex,y=[],v=[],m=0,b=0;m<e.length;){if(a=e[m],s=i(a,n))if(h.hasOwnProperty(s)){var g=h[s];v.push(t[g])}else v.push(null);else{var w=d[b++];v.push(w||null)}m++}var _=v.slice(0);for(m=0;m<_.length;)null===_[m]?(o(m),u(m)):m++;for(var O=m=0;m<t.length;){a=t[m],s=i(a,n);var x=_[O],j=i(x,n);if(x)if(s===j)O++;else if(p.hasOwnProperty(s)){var k=i(_[O+1],n);k===s?(o(m),u(O),O++):c(m,a)}else c(m,a);else c(m,a);m++}for(var E=0;O++<_.length;)o(E+m),E++;return{moves:y,children:v}}function r(e,t){for(var n={},o=[],r=0,c=e.length;r<c;r++){var u=e[r],a=i(u,t);a?n[a]=r:o.push(u)}return{keyIndex:n,free:o}}function i(e,t){if(e&&t)return"string"==typeof t?e[t]:t(e)}t.a=o},98:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(4),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.state={},this.flags=[],this.options=t,this.deviation=t.deviation||50,window.addEventListener("resize",this.init.bind(this)),this.init(t)}return i(e,[{key:"init",value:function(){var e=document.documentElement;this.dots=this.options.dots||[{x:e.clientWidth,y:e.clientHeight},{x:0,y:e.clientHeight},{x:e.clientWidth,y:0}],this.flags=this.dots.map(function(){return!1}),window.addEventListener("touchmove",this._moveHandler.bind(this)),window.addEventListener("touchend",this._moveStart.bind(this)),window.addEventListener("touchstart",this._moveEnd.bind(this)),window.addEventListener("mousedown",this._moveStart.bind(this)),window.addEventListener("mousemove",this._moveHandler.bind(this)),window.addEventListener("mouseup",this._moveEnd.bind(this))}},{key:"destroy",value:function(){window.removeEventListener("resize",this.init),window.removeEventListener("touchmove",this._moveHandler),window.removeEventListener("touchend",this._moveStart),window.removeEventListener("touchstart",this._moveEnd)}},{key:"_isNear",value:function(e,t,n){return Math.abs(e.x-t.x)<n&&Math.abs(e.y-t.y)<n}},{key:"_moveStart",value:function(e){var t=n.i(r.j)(e),o=this.dots[0];this._isNear(t,o,this.deviation)&&(this.flags[0]=!0,e.preventDefault())}},{key:"_moveHandler",value:function(e){var t=n.i(r.j)(e),o=this.flags.indexOf(!1);if(o<0)return this.options.callback();var i=this.dots[o];this._isNear(t,i,this.deviation)&&(this.flags[o]=!0)}},{key:"_moveEnd",value:function(){this.flags=this.flags.map(function(){return!1})}}]),e}();t.a=c},99:function(e,t){function n(e,t){return o(e,t),e}function o(e,t){for(var n=t[e.index],i=e.children?e.children.length:0,c=0;c<i;c++){o(e.children[c],t)}n&&r(e,n)}function r(e,t){t.map(function(t){switch(t.type){case u:e=t.node;break;case a:c(e,t.moves);break;case s:i(e,t.props);break;case l:e.content=t.content;break;default:throw new Error("Unknown patch type "+t.type)}})}function i(e,t){var n=void 0;for(n in t)void 0===t[n]?delete e.props[n]:e.props[n]=t[n]}function c(e,t){t.forEach(function(t){e.children&&(0===t.type?e.children.splice(t.index,1):e.children.splice(t.index,0,t.item))})}var u=0,a=1,s=2,l=3;n.REPLACE=u,n.REORDER=a,n.PROPS=s,n.TEXT=l,e.exports=n}}));