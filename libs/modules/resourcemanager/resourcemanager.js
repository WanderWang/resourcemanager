!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.async=t.async||{})}(this,function(t){"use strict";function n(t,n,r){var e=r.length;switch(e){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}function r(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function e(t){var n=r(t)?Vn.call(t):"";return n==Hn||n==Jn}function o(t){if(r(t)){var n=e(t.valueOf)?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Yn,"");var o=tr.test(t);return o||nr.test(t)?rr(t.slice(2),o?2:8):Zn.test(t)?Xn:+t}function u(t){if(!t)return 0===t?t:0;if(t=o(t),t===er||t===-er){var n=0>t?-1:1;return n*or}var r=t%1;return t===t?r?t-r:t:0}function i(t,r){if("function"!=typeof t)throw new TypeError(ur);return r=ir(void 0===r?t.length-1:u(r),0),function(){for(var e=arguments,o=-1,u=ir(e.length-r,0),i=Array(u);++o<u;)i[o]=e[r+o];switch(r){case 0:return t.call(this,i);case 1:return t.call(this,e[0],i);case 2:return t.call(this,e[0],e[1],i)}var c=Array(r+1);for(o=-1;++o<r;)c[o]=e[o];return c[r]=i,n(t,this,c)}}function c(t){return i(function(n,r){var e=i(function(r){var e=this,o=r.pop();return t(n,function(t,n,o){t.apply(e,r.concat([o]))},o)});return r.length?e.apply(this,r):e})}function a(){}function f(t,n){var r;if("function"!=typeof n)throw new TypeError(cr);return t=u(t),function(){return--t>0&&(r=n.apply(this,arguments)),1>=t&&(n=void 0),r}}function l(t){return f(2,t)}function s(t){return function(n){return null==n?void 0:n[t]}}function p(t){return"number"==typeof t&&t>-1&&t%1==0&&fr>=t}function y(t){return null!=t&&p(ar(t))&&!e(t)}function h(t,n){return sr.call(t,n)||"object"==typeof t&&n in t&&null===pr(t)}function v(t){return yr(Object(t))}function d(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}function m(t){return!!t&&"object"==typeof t}function g(t){return m(t)&&y(t)}function b(t){return g(t)&&dr.call(t,"callee")&&(!gr.call(t,"callee")||mr.call(t)==hr)}function j(t){return"string"==typeof t||!br(t)&&m(t)&&Or.call(t)==jr}function w(t){var n=t?t.length:void 0;return p(n)&&(br(t)||j(t)||b(t))?d(n,String):null}function O(t,n){return t="number"==typeof t||_r.test(t)?+t:-1,n=null==n?Sr:n,t>-1&&t%1==0&&n>t}function S(t){var n=t&&t.constructor,r="function"==typeof n&&n.prototype||kr;return t===r}function _(t){var n=S(t);if(!n&&!y(t))return v(t);var r=w(t),e=!!r,o=r||[],u=o.length;for(var i in t)!h(t,i)||e&&("length"==i||O(i,u))||n&&"constructor"==i||o.push(i);return o}function k(t){var n,r=-1;if(y(t))return n=t.length,function(){return r++,n>r?r:null};var e=_(t);return n=e.length,function(){return r++,n>r?e[r]:null}}function E(t){return function(){if(null===t)throw new Error("Callback was already called.");t.apply(this,arguments),t=null}}function A(t){return function(n,r,e){e=l(e||a),n=n||[];var o=k(n);if(0>=t)return e(null);var u=!1,i=0,c=!1;!function f(){if(u&&0>=i)return e(null);for(;t>i&&!c;){var a=o();if(null===a)return u=!0,void(0>=i&&e(null));i+=1,r(n[a],a,E(function(t){i-=1,t?(e(t),c=!0):f()}))}}()}}function L(t,n,r,e){A(n)(t,r,e)}function x(t,n){return function(r,e,o){return t(r,n,e,o)}}function I(t){return i(function(n){var e,o=n.pop();try{e=t.apply(this,n)}catch(u){return o(u)}r(e)&&"function"==typeof e.then?e.then(function(t){o(null,t)})["catch"](function(t){o(t.message?t:new Error(t))}):o(null,e)})}function T(t,n){for(var r=-1,e=t.length;++r<e&&n(t[r],r,t)!==!1;);return t}function F(t){return t}function M(t){return"function"==typeof t?t:F}function $(t){return function(n,r,e){for(var o=-1,u=Object(n),i=e(n),c=i.length;c--;){var a=i[t?c:++o];if(r(u[a],a,u)===!1)break}return n}}function U(t,n){return t&&Tr(t,n,_)}function P(t,n){return t&&U(t,M(n))}function z(t,n,r){for(var e=t.length,o=n+(r?0:-1);r?o--:++o<e;){var u=t[o];if(u!==u)return o}return-1}function B(t,n,r){if(n!==n)return z(t,r);for(var e=r-1,o=t.length;++e<o;)if(t[e]===n)return e;return-1}function C(t,n,r){var e=t?t.length:0;return e?(r=u(r),0>r&&(r=Fr(e+r,0)),B(t,n,r)):-1}function q(t,n,r){function e(t,n){m.push(function(){f(t,n)})}function o(){if(0===m.length&&0===h)return r(null,y);for(;m.length&&n>h;){var t=m.shift();t()}}function u(t,n){var r=d[t];r||(r=d[t]=[]),r.push(n)}function c(t){var n=d[t]||[];T(n,function(t){t()}),o()}function f(t,n){if(!v){var e=E(i(function(n,e){if(h--,e.length<=1&&(e=e[0]),n){var o={};P(y,function(t,n){o[n]=t}),o[t]=e,v=!0,d=[],r(n,o)}else y[t]=e,c(t)}));h++;var o=n[n.length-1];n.length>1?o(y,e):o(e)}}"function"==typeof n&&(r=n,n=null),r=l(r||a);var s=_(t),p=s.length;if(!p)return r(null);n||(n=p);var y={},h=0,v=!1,d={},m=[];P(t,function(n,r){function o(){for(var n,e=i.length;e--;){if(!(n=t[i[e]]))throw new Error("async.auto task `"+r+"` has non-existent dependency in "+i.join(", "));if(br(n)&&C(n,r)>=0)throw new Error("async.auto task `"+r+"`Has cyclic dependencies")}}if(!br(n))return void e(r,[n]);var i=n.slice(0,n.length-1),c=i.length;o(),T(i,function(t){u(t,function(){c--,0===c&&e(r,n)})})}),o()}function D(t,n){for(var r=-1,e=t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o}function R(){this.__data__={array:[],map:null}}function W(t,n){return t===n||t!==t&&n!==n}function N(t,n){for(var r=t.length;r--;)if(W(t[r][0],n))return r;return-1}function G(t,n){var r=N(t,n);if(0>r)return!1;var e=t.length-1;return r==e?t.pop():$r.call(t,r,1),!0}function Q(t){var n=this.__data__,r=n.array;return r?G(r,t):n.map["delete"](t)}function H(t,n){var r=N(t,n);return 0>r?void 0:t[r][1]}function J(t){var n=this.__data__,r=n.array;return r?H(r,t):n.map.get(t)}function K(t,n){return N(t,n)>-1}function V(t){var n=this.__data__,r=n.array;return r?K(r,t):n.map.has(t)}function X(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(r){}return n}function Y(t){return null==t?!1:e(t)?qr.test(Br.call(t)):m(t)&&(X(t)?qr:Pr).test(t)}function Z(t,n){var r=t[n];return Y(r)?r:void 0}function tt(){}function nt(t){return t&&t.Object===Object?t:null}function rt(){this.__data__={hash:new tt,map:Xr?new Xr:[],string:new tt}}function et(t,n){return Dr?void 0!==t[n]:Zr.call(t,n)}function ot(t,n){return et(t,n)&&delete t[n]}function ut(t){var n=typeof t;return"number"==n||"boolean"==n||"string"==n&&"__proto__"!=t||null==t}function it(t){var n=this.__data__;return ut(t)?ot("string"==typeof t?n.string:n.hash,t):Xr?n.map["delete"](t):G(n.map,t)}function ct(t,n){if(Dr){var r=t[n];return r===te?void 0:r}return re.call(t,n)?t[n]:void 0}function at(t){var n=this.__data__;return ut(t)?ct("string"==typeof t?n.string:n.hash,t):Xr?n.map.get(t):H(n.map,t)}function ft(t){var n=this.__data__;return ut(t)?et("string"==typeof t?n.string:n.hash,t):Xr?n.map.has(t):K(n.map,t)}function lt(t,n,r){var e=N(t,n);0>e?t.push([n,r]):t[e][1]=r}function st(t,n,r){t[n]=Dr&&void 0===r?ee:r}function pt(t,n){var r=this.__data__;return ut(t)?st("string"==typeof t?r.string:r.hash,t,n):Xr?r.map.set(t,n):lt(r.map,t,n),this}function yt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function ht(t,n){var r=this.__data__,e=r.array;e&&(e.length<oe-1?lt(e,t,n):(r.array=null,r.map=new yt(e)));var o=r.map;return o&&o.set(t,n),this}function vt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function dt(t,n,r){var e=t[n];ie.call(t,n)&&W(e,r)&&(void 0!==r||n in t)||(t[n]=r)}function mt(t,n,r,e){r||(r={});for(var o=-1,u=n.length;++o<u;){var i=n[o],c=e?e(r[i],t[i],i,r,t):t[i];dt(r,i,c)}return r}function gt(t,n,r){return mt(t,n,r)}function bt(t,n){return t&&gt(n,_(n),t)}function jt(t,n){if(n)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}function wt(t,n){var r=-1,e=t.length;for(n||(n=Array(e));++r<e;)n[r]=t[r];return n}function Ot(t,n){return gt(t,ae(t),n)}function St(t){return me.call(t)}function _t(t){var n=t.length,r=t.constructor(n);return n&&"string"==typeof t[0]&&Se.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function kt(t){var n=new t.constructor(t.byteLength);return new _e(n).set(new _e(t)),n}function Et(t,n){return t.set(n[0],n[1]),t}function At(t,n,r,e){var o=-1,u=t.length;for(e&&u&&(r=t[++o]);++o<u;)r=n(r,t[o],o,t);return r}function Lt(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r}function xt(t){return At(Lt(t),Et,new t.constructor)}function It(t){var n=new t.constructor(t.source,ke.exec(t));return n.lastIndex=t.lastIndex,n}function Tt(t,n){return t.add(n),t}function Ft(t){var n=-1,r=Array(t.size);return t.forEach(function(t){r[++n]=t}),r}function Mt(t){return At(Ft(t),Tt,new t.constructor)}function $t(t){return Le?Object(Le.call(t)):{}}function Ut(t,n){var r=n?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}function Pt(t,n,r){var e=t.constructor;switch(n){case ze:return kt(t);case xe:case Ie:return new e(+t);case Be:case Ce:case qe:case De:case Re:case We:case Ne:case Ge:case Qe:return Ut(t,r);case Te:return xt(t);case Fe:case Ue:return new e(t);case Me:return It(t);case $e:return Mt(t);case Pe:return $t(t)}}function zt(t){return r(t)?He(t):{}}function Bt(t){return"function"!=typeof t.constructor||S(t)?{}:zt(Je(t))}function Ct(t){return function(){return t}}function qt(t,n,e,o,u,i,c){var a;if(o&&(a=i?o(t,u,i,c):o(t)),void 0!==a)return a;if(!r(t))return t;var f=br(t);if(f){if(a=_t(t),!n)return wt(t,a)}else{var l=we(t),s=l==io||l==co;if(to(t))return jt(t,n);if(l==lo||l==no||s&&!i){if(X(t))return i?t:{};if(a=Bt(s?{}:t),!n)return a=bt(a,t),e?Ot(t,a):a}else{if(!Ao[l])return i?t:{};a=Pt(t,l,n)}}c||(c=new vt);var p=c.get(t);return p?p:(c.set(t,a),(f?T:U)(t,function(r,u){dt(a,u,qt(r,n,e,o,u,t,c))}),e&&!f?Ot(t,a):a)}function Dt(t){return t.toString().match(xo)[1].split(/\s*\,\s*/)}function Rt(t,n){var r={};P(t,function(t,n){function e(n,r){var e=D(o,function(t){return n[t]});e.push(r),t.apply(null,e)}var o;if(br(t))o=qt(t),t=o.pop(),r[n]=o.concat(e);else{if(0===t.length)throw new Error("autoInject task functions require explicit parameters.");1===t.length?r[n]=t:(o=Dt(t),o.pop(),r[n]=o.concat(e))}}),q(r,n)}function Wt(t,n,r){function e(t,n,r,e){if(null!=e&&"function"!=typeof e)throw new Error("task callback must be a function");return t.started=!0,br(n)||(n=[n]),0===n.length&&t.idle()?To(function(){t.drain()}):(T(n,function(n){var o={data:n,callback:e||a};r?t.tasks.unshift(o):t.tasks.push(o),t.tasks.length===t.concurrency&&t.saturated(),t.tasks.length<=t.concurrency-t.buffer&&t.unsaturated()}),void To(t.process))}function o(t,n){return function(){u-=1;var r=!1,e=arguments;T(n,function(t){T(i,function(n,e){n!==t||r||(i.splice(e,1),r=!0)}),t.callback.apply(t,e)}),t.tasks.length+u===0&&t.drain(),t.process()}}if(null==n)n=1;else if(0===n)throw new Error("Concurrency must not be zero");var u=0,i=[],c={tasks:[],concurrency:n,payload:r,saturated:a,unsaturated:a,buffer:n/4,empty:a,drain:a,started:!1,paused:!1,push:function(t,n){e(c,t,!1,n)},kill:function(){c.drain=a,c.tasks=[]},unshift:function(t,n){e(c,t,!0,n)},process:function(){for(;!c.paused&&u<c.concurrency&&c.tasks.length;){var n=c.payload?c.tasks.splice(0,c.payload):c.tasks.splice(0,c.tasks.length),r=D(n,s("data"));0===c.tasks.length&&c.empty(),u+=1,i.push(n[0]);var e=E(o(c,n));t(r,e)}},length:function(){return c.tasks.length},running:function(){return u},workersList:function(){return i},idle:function(){return c.tasks.length+u===0},pause:function(){c.paused=!0},resume:function(){if(c.paused!==!1){c.paused=!1;for(var t=Math.min(c.concurrency,c.tasks.length),n=1;t>=n;n++)To(c.process)}}};return c}function Nt(t,n){return Wt(t,1,n)}function Gt(t,n,r,e){Lr(t,function(t,e,o){r(n,t,function(t,r){n=r,o(t)})},function(t){e(t,n)})}function Qt(){var t=arguments;return i(function(n){var r=this,e=n[n.length-1];"function"==typeof e?n.pop():e=a,Gt(t,n,function(t,n,e){n.apply(r,t.concat([i(function(t,n){e(t,n)})]))},function(t,n){e.apply(r,[t].concat(n))})})}function Ht(){return Qt.apply(null,Fo.call(arguments))}function Jt(t,n,r,e){var o=[];t(n,function(t,n,e){r(t,function(t,n){o=o.concat(n||[]),e(t)})},function(t){e(t,o)})}function Kt(t){return function(n,r,e){return t(Er,n,r,e)}}function Vt(t){return function(n,r,e){return t(Lr,n,r,e)}}function Xt(t,n,r){return function(e,o,u,i){function c(t){i&&(t?i(t):i(null,r(!1)))}function a(t,e,o){return i?void u(t,function(e,c){i&&(e?(i(e),i=u=!1):n(c)&&(i(null,r(!0,t)),i=u=!1)),o()}):o()}arguments.length>3?t(e,o,a,c):(i=u,u=o,t(e,a,c))}}function Yt(t,n){return n}function Zt(t){return i(function(n,r){n.apply(null,r.concat([i(function(n,r){"object"==typeof console&&(n?console.error&&console.error(n):console[t]&&T(r,function(n){console[t](n)}))})]))})}function tn(t,n,r){r=r||a;var e=i(function(n,e){n?r(n):(e.push(o),t.apply(this,e))}),o=function(t,o){return t?r(t):o?void n(e):r(null)};t(o)}function nn(t,n,r){var e=0;tn(function(t){return e++<1?t(null,!0):void n.apply(this,arguments)},t,r)}function rn(t,n,r){if(r=r||a,!t())return r(null);var e=i(function(o,u){return o?r(o):t.apply(this,u)?n(e):void r.apply(null,[null].concat(u))});n(e)}function en(t,n,r){var e=0;return rn(function(){return++e<=1||n.apply(this,arguments)},t,r)}function on(t,n,r){return en(t,function(){return!n.apply(this,arguments)},r)}function un(t){return function(n,r,e){return t(n,e)}}function cn(t,n,r,e){return A(n)(t,un(r),e)}function an(t){return i(function(n){var r=n.pop(),e=!0;n.push(function(){var t=arguments;e?To(function(){r.apply(null,t)}):r.apply(null,t)}),t.apply(this,n),e=!1})}function fn(t){return!t}function ln(t,n,r,e){var o=[];t(n,function(t,n,e){r(t,function(r,u){r?e(r):(u&&o.push({index:n,value:t}),e())})},function(t){t?e(t):e(null,D(o.sort(function(t,n){return t.index-n.index}),s("value")))})}function sn(t){return function(n,r,e,o){return t(A(r),n,e,o)}}function pn(t,n){function r(t){return t?e(t):void o(r)}var e=E(n||a),o=an(t);r()}function yn(t){function n(r){function e(){return t.length&&t[r].apply(null,arguments),e.next()}return e.next=function(){return r<t.length-1?n(r+1):null},e}return n(0)}function hn(t,n,r,e){e=l(e||a),n=n||[];var o=y(n)?[]:{};t(n,function(t,n,e){r(t,function(t,r){o[n]=r,e(t)})},function(t){e(t,o)})}function vn(t){return"symbol"==typeof t||m(t)&&tu.call(t)==Yo}function dn(t){if("string"==typeof t)return t;if(null==t)return"";if(vn(t))return eu?eu.call(t):"";var n=t+"";return"0"==n&&1/t==-nu?"-0":n}function mn(t){var n=[];return dn(t).replace(ou,function(t,r,e,o){n.push(e?o.replace(uu,"$1"):r||t)}),n}function gn(t){return br(t)?t:mn(t)}function bn(t,n){return"number"==typeof t?!0:!br(t)&&(cu.test(t)||!iu.test(t)||null!=n&&t in Object(n))}function jn(t){var n=t?t.length:0;return n?t[n-1]:void 0}function wn(t,n,r){var e=-1,o=t.length;0>n&&(n=-n>o?0:o+n),r=r>o?o:r,0>r&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}function On(t,n){n=bn(n,t)?[n+""]:gn(n);for(var r=0,e=n.length;null!=t&&e>r;)t=t[n[r++]];return r&&r==e?t:void 0}function Sn(t,n,r){var e=null==t?void 0:On(t,n);return void 0===e?r:e}function _n(t,n){return 1==n.length?t:Sn(t,wn(n,0,-1))}function kn(t,n,r){if(null==t)return!1;var e=r(t,n);e||bn(n)||(n=gn(n),t=_n(t,n),null!=t&&(n=jn(n),e=r(t,n)));var o=t?t.length:void 0;return e||!!o&&p(o)&&O(n,o)&&(br(t)||j(t)||b(t))}function En(t,n){return kn(t,n,h)}function An(t,n){var r=Object.create(null),e=Object.create(null);n=n||F;var o=i(function(o){var u=o.pop(),c=n.apply(null,o);En(r,c)?To(function(){u.apply(null,r[c])}):En(e,c)?e[c].push(u):(e[c]=[u],t.apply(null,o.concat([i(function(t){r[c]=t;var n=e[c];delete e[c];for(var o=0,u=n.length;u>o;o++)n[o].apply(null,t)})])))});return o.memo=r,o.unmemoized=t,o}function Ln(t,n,r){r=r||a;var e=y(n)?[]:{};t(n,function(t,n,r){t(i(function(t,o){o.length<=1&&(o=o[0]),e[n]=o,r(t)}))},function(t){r(t,e)})}function xn(t,n,r){return Ln(A(n),t,r)}function In(t,n){return Wt(function(n,r){t(n[0],r)},n,1)}function Tn(t,n){function r(t,n){return t.priority-n.priority}function e(t,n,r){for(var e=-1,o=t.length-1;o>e;){var u=e+(o-e+1>>>1);r(n,t[u])>=0?e=u:o=u-1}return e}function o(t,n,o,u){if(null!=u&&"function"!=typeof u)throw new Error("task callback must be a function");return t.started=!0,br(n)||(n=[n]),0===n.length?To(function(){t.drain()}):void T(n,function(n){var i={data:n,priority:o,callback:"function"==typeof u?u:a};t.tasks.splice(e(t.tasks,i,r)+1,0,i),t.tasks.length===t.concurrency&&t.saturated(),t.tasks.length<=t.concurrency-t.buffer&&t.unsaturated(),To(t.process)})}var u=In(t,n);return u.push=function(t,n,r){o(u,t,n,r)},delete u.unshift,u}function Fn(t,n){return function(r,e){if(null==r)return r;if(!y(r))return t(r,e);for(var o=r.length,u=n?o:-1,i=Object(r);(n?u--:++u<o)&&e(i[u],u,i)!==!1;);return r}}function Mn(t,n){return"function"==typeof n&&br(t)?T(t,n):fu(t,M(n))}function $n(t,n){return n=l(n||a),br(t)?t.length?void Mn(t,function(t){t(n)}):n():n(new TypeError("First argument to race must be an array of functions"))}function Un(t,n,r,e){var o=lu.call(t).reverse();Gt(o,n,r,e)}function Pn(t,n,r,e){ln(t,n,function(t,n){r(t,function(t,r){t?n(t):n(null,!r)})},e)}function zn(t,n){return Ln(Lr,t,n)}function Bn(t,n,r){function e(t,n){if("object"==typeof n)t.times=+n.times||i,t.interval=+n.interval||c;else{if("number"!=typeof n&&"string"!=typeof n)throw new Error("Invalid arguments for async.retry");t.times=+n||i}}function o(t){return function(r){n(function(n,e){r(!n||t,{err:n,result:e})})}}function u(t){return function(n){setTimeout(function(){n(null)},t)}}var i=5,c=0,f={times:i,interval:c};if(arguments.length<3&&"function"==typeof t?(r=n||a,n=t):(e(f,t),r=r||a),"function"!=typeof n)throw new Error("Invalid arguments for async.retry");for(var l=[];f.times;){var s=!(f.times-=1);l.push(o(s)),!s&&f.interval>0&&l.push(u(f.interval))}zn(l,function(t,n){n=n[n.length-1],r(n.err,n.result)})}function Cn(t,n,r){function e(t,n){var r=t.criteria,e=n.criteria;return e>r?-1:r>e?1:0}Vo(t,function(t,r){n(t,function(n,e){return n?r(n):void r(null,{value:t,criteria:e})})},function(t,n){return t?r(t):void r(null,D(n.sort(e),s("value")))})}function qn(t,n){function r(){a||(i.apply(null,arguments),clearTimeout(c))}function e(){var t=new Error("Callback function timed out.");t.code="ETIMEDOUT",a=!0,i(t)}function o(t){var n=Array.prototype.slice.call(t,0);return i=n[n.length-1],n[n.length-1]=r,n}function u(){c=setTimeout(e,n),t.apply(null,o(arguments))}var i,c,a=!1;return u}function Dn(t,n,r,e){for(var o=-1,u=gu(mu((n-t)/(r||1)),0),i=Array(u);u--;)i[e?u:++o]=t,t+=r;return i}function Rn(t,n,r,e){return Ko(Dn(0,t,1),n,r,e)}function Wn(t,n,r,e){3===arguments.length&&(e=r,r=n,n=br(t)?[]:{}),Er(t,function(t,e,o){r(n,t,e,o)},function(t){e(t,n)})}function Nn(t){return function(){return(t.unmemoized||t).apply(null,arguments)}}function Gn(t,n,r){return rn(function(){return!t.apply(this,arguments)},n,r)}function Qn(t,n){function r(o){if(e===t.length)return n.apply(null,[null].concat(o));var u=E(i(function(t,e){return t?n.apply(null,[t].concat(e)):void r(e)}));o.push(u);var c=t[e++];c.apply(null,o)}if(n=l(n||a),!br(t))return n(new Error("First argument to waterfall must be an array of functions"));if(!t.length)return n();var e=0;r([])}var Hn="[object Function]",Jn="[object GeneratorFunction]",Kn=Object.prototype,Vn=Kn.toString,Xn=NaN,Yn=/^\s+|\s+$/g,Zn=/^[-+]0x[0-9a-f]+$/i,tr=/^0b[01]+$/i,nr=/^0o[0-7]+$/i,rr=parseInt,er=1/0,or=1.7976931348623157e308,ur="Expected a function",ir=Math.max,cr="Expected a function",ar=s("length"),fr=9007199254740991,lr=Object.prototype,sr=lr.hasOwnProperty,pr=Object.getPrototypeOf,yr=Object.keys,hr="[object Arguments]",vr=Object.prototype,dr=vr.hasOwnProperty,mr=vr.toString,gr=vr.propertyIsEnumerable,br=Array.isArray,jr="[object String]",wr=Object.prototype,Or=wr.toString,Sr=9007199254740991,_r=/^(?:0|[1-9]\d*)$/,kr=Object.prototype,Er=x(L,1/0),Ar=c(Er),Lr=x(L,1),xr=c(Lr),Ir=i(function(t,n){return i(function(r){return t.apply(null,n.concat(r))})}),Tr=$(),Fr=Math.max,Mr=Array.prototype,$r=Mr.splice,Ur=/[\\^$.*+?()[\]{}|]/g,Pr=/^\[object .+?Constructor\]$/,zr=Object.prototype,Br=Function.prototype.toString,Cr=zr.hasOwnProperty,qr=RegExp("^"+Br.call(Cr).replace(Ur,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Dr=Z(Object,"create"),Rr=Object.prototype;tt.prototype=Dr?Dr(null):Rr;var Wr={"function":!0,object:!0},Nr=Wr[typeof t]&&t&&!t.nodeType?t:void 0,Gr=Wr[typeof module]&&module&&!module.nodeType?module:void 0,Qr=nt(Nr&&Gr&&"object"==typeof global&&global),Hr=nt(Wr[typeof self]&&self),Jr=nt(Wr[typeof window]&&window),Kr=nt(Wr[typeof this]&&this),Vr=Qr||Jr!==(Kr&&Kr.window)&&Jr||Hr||Kr||Function("return this")(),Xr=Z(Vr,"Map"),Yr=Object.prototype,Zr=Yr.hasOwnProperty,te="__lodash_hash_undefined__",ne=Object.prototype,re=ne.hasOwnProperty,ee="__lodash_hash_undefined__";yt.prototype.clear=rt,yt.prototype["delete"]=it,yt.prototype.get=at,yt.prototype.has=ft,yt.prototype.set=pt;var oe=200;vt.prototype.clear=R,vt.prototype["delete"]=Q,vt.prototype.get=J,vt.prototype.has=V,vt.prototype.set=ht;var ue=Object.prototype,ie=ue.hasOwnProperty,ce=Object.getOwnPropertySymbols,ae=ce||function(){return[]},fe=Z(Vr,"Set"),le=Z(Vr,"WeakMap"),se="[object Map]",pe="[object Object]",ye="[object Set]",he="[object WeakMap]",ve=Object.prototype,de=Function.prototype.toString,me=ve.toString,ge=Xr?de.call(Xr):"",be=fe?de.call(fe):"",je=le?de.call(le):"";(Xr&&St(new Xr)!=se||fe&&St(new fe)!=ye||le&&St(new le)!=he)&&(St=function(t){var n=me.call(t),r=n==pe?t.constructor:null,e="function"==typeof r?de.call(r):"";if(e)switch(e){case ge:return se;case be:return ye;case je:return he}return n});var we=St,Oe=Object.prototype,Se=Oe.hasOwnProperty,_e=Vr.Uint8Array,ke=/\w*$/,Ee=Vr.Symbol,Ae=Ee?Ee.prototype:void 0,Le=Ae?Ae.valueOf:void 0,xe="[object Boolean]",Ie="[object Date]",Te="[object Map]",Fe="[object Number]",Me="[object RegExp]",$e="[object Set]",Ue="[object String]",Pe="[object Symbol]",ze="[object ArrayBuffer]",Be="[object Float32Array]",Ce="[object Float64Array]",qe="[object Int8Array]",De="[object Int16Array]",Re="[object Int32Array]",We="[object Uint8Array]",Ne="[object Uint8ClampedArray]",Ge="[object Uint16Array]",Qe="[object Uint32Array]",He=Object.create,Je=Object.getPrototypeOf,Ke={"function":!0,object:!0},Ve=Ke[typeof t]&&t&&!t.nodeType?t:void 0,Xe=Ke[typeof module]&&module&&!module.nodeType?module:void 0,Ye=Xe&&Xe.exports===Ve?Ve:void 0,Ze=Ye?Vr.Buffer:void 0,to=Ze?function(t){return t instanceof Ze}:Ct(!1),no="[object Arguments]",ro="[object Array]",eo="[object Boolean]",oo="[object Date]",uo="[object Error]",io="[object Function]",co="[object GeneratorFunction]",ao="[object Map]",fo="[object Number]",lo="[object Object]",so="[object RegExp]",po="[object Set]",yo="[object String]",ho="[object Symbol]",vo="[object WeakMap]",mo="[object ArrayBuffer]",go="[object Float32Array]",bo="[object Float64Array]",jo="[object Int8Array]",wo="[object Int16Array]",Oo="[object Int32Array]",So="[object Uint8Array]",_o="[object Uint8ClampedArray]",ko="[object Uint16Array]",Eo="[object Uint32Array]",Ao={};Ao[no]=Ao[ro]=Ao[mo]=Ao[eo]=Ao[oo]=Ao[go]=Ao[bo]=Ao[jo]=Ao[wo]=Ao[Oo]=Ao[ao]=Ao[fo]=Ao[lo]=Ao[so]=Ao[po]=Ao[yo]=Ao[ho]=Ao[So]=Ao[_o]=Ao[ko]=Ao[Eo]=!0,Ao[uo]=Ao[io]=Ao[vo]=!1;var Lo,xo=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Io="function"==typeof setImmediate&&setImmediate;Lo=Io?Io:"object"==typeof process&&"function"==typeof process.nextTick?process.nextTick:function(t){setTimeout(t,0)};var To=i(function(t,n){Lo(function(){t.apply(null,n)})}),Fo=Array.prototype.reverse,Mo=Kt(Jt),$o=Vt(Jt),Uo=i(function(t){var n=[null].concat(t);return function(){var t=[].slice.call(arguments).pop();return t.apply(this,n)}}),Po=Xt(Er,F,Yt),zo=Xt(L,F,Yt),Bo=Xt(Lr,F,Yt),Co=Zt("dir"),qo=x(cn,1/0),Do=x(cn,1),Ro=Xt(L,fn,fn),Wo=x(Ro,1/0),No=x(Ro,1),Go=sn(ln),Qo=x(Go,1/0),Ho=x(Go,1),Jo=Zt("log"),Ko=sn(hn),Vo=x(Ko,1/0),Xo=x(Ko,1),Yo="[object Symbol]",Zo=Object.prototype,tu=Zo.toString,nu=1/0,ru=Ee?Ee.prototype:void 0,eu=ru?ru.toString:void 0,ou=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,uu=/\\(\\)?/g,iu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cu=/^\w*$/,au=x(xn,1/0),fu=Fn(U),lu=Array.prototype.slice,su=sn(Pn),pu=x(su,1/0),yu=x(su,1),hu=Xt(L,Boolean,F),vu=x(hu,1/0),du=x(hu,1),mu=Math.ceil,gu=Math.max,bu=x(Rn,1/0),ju=x(Rn,1),wu={applyEach:Ar,applyEachSeries:xr,apply:Ir,asyncify:I,auto:q,autoInject:Rt,cargo:Nt,compose:Ht,concat:Mo,concatSeries:$o,constant:Uo,detect:Po,detectLimit:zo,detectSeries:Bo,dir:Co,doDuring:nn,doUntil:on,doWhilst:en,during:tn,each:qo,eachLimit:cn,eachOf:Er,eachOfLimit:L,eachOfSeries:Lr,eachSeries:Do,ensureAsync:an,every:Wo,everyLimit:Ro,everySeries:No,filter:Qo,filterLimit:Go,filterSeries:Ho,forever:pn,iterator:yn,log:Jo,map:Vo,mapLimit:Ko,mapSeries:Xo,memoize:An,nextTick:To,parallel:au,parallelLimit:xn,priorityQueue:Tn,queue:In,race:$n,reduce:Gt,reduceRight:Un,reject:pu,rejectLimit:su,rejectSeries:yu,retry:Bn,seq:Qt,series:zn,setImmediate:To,some:vu,someLimit:hu,someSeries:du,sortBy:Cn,timeout:qn,times:bu,timesLimit:Rn,timesSeries:ju,transform:Wn,unmemoize:Nn,until:Gn,waterfall:Qn,whilst:rn,all:Wo,any:vu,forEach:qo,forEachSeries:Do,forEachLimit:cn,forEachOf:Er,forEachOfSeries:Lr,forEachOfLimit:L,inject:Gt,foldl:Gt,foldr:Un,select:Qo,selectLimit:Go,selectSeries:Ho,wrapSync:I};t["default"]=wu,t.applyEach=Ar,t.applyEachSeries=xr,t.apply=Ir,t.asyncify=I,t.auto=q,t.autoInject=Rt,t.cargo=Nt,t.compose=Ht,t.concat=Mo,t.concatSeries=$o,t.constant=Uo,t.detect=Po,t.detectLimit=zo,t.detectSeries=Bo,t.dir=Co,t.doDuring=nn,t.doUntil=on,t.doWhilst=en,t.during=tn,t.each=qo,t.eachLimit=cn,t.eachOf=Er,t.eachOfLimit=L,t.eachOfSeries=Lr,t.eachSeries=Do,t.ensureAsync=an,t.every=Wo,t.everyLimit=Ro,t.everySeries=No,t.filter=Qo,t.filterLimit=Go,t.filterSeries=Ho,t.forever=pn,t.iterator=yn,t.log=Jo,t.map=Vo,t.mapLimit=Ko,t.mapSeries=Xo,t.memoize=An,t.nextTick=To,t.parallel=au,t.parallelLimit=xn,t.priorityQueue=Tn,t.queue=In,t.race=$n,t.reduce=Gt,t.reduceRight=Un,t.reject=pu,t.rejectLimit=su,t.rejectSeries=yu,t.retry=Bn,t.seq=Qt,t.series=zn,t.setImmediate=To,t.some=vu,t.someLimit=hu,t.someSeries=du,t.sortBy=Cn,t.timeout=qn,t.times=bu,t.timesLimit=Rn,t.timesSeries=ju,t.transform=Wn,t.unmemoize=Nn,t.until=Gn,t.waterfall=Qn,t.whilst=rn,t.all=Wo,t.allLimit=Ro,t.allSeries=No,t.any=vu,t.anyLimit=hu,t.anySeries=du,t.find=Po,t.findLimit=zo,t.findSeries=Bo,t.forEach=qo,t.forEachSeries=Do,t.forEachLimit=cn,t.forEachOf=Er,t.forEachOfSeries=Lr,t.forEachOfLimit=L,t.inject=Gt,t.foldl=Gt,t.foldr=Un,t.select=Qo,t.selectLimit=Go,t.selectSeries=Ho,t.wrapSync=I});
//# sourceMappingURL=dist/async.min.map
var ResourceState;
(function (ResourceState) {
    ResourceState[ResourceState["UNLOADED"] = 0] = "UNLOADED";
    ResourceState[ResourceState["LOADING"] = 1] = "LOADING";
    ResourceState[ResourceState["LOADED"] = 2] = "LOADED";
})(ResourceState || (ResourceState = {}));
var ResourceManager = (function () {
    function ResourceManager() {
    }
    var d = __define,c=ResourceManager,p=c.prototype;
    p.exists = function () {
        return true;
    };
    p.readFile = function (path) {
        return new ImageResource();
    };
    p.writeFile = function () {
    };
    /**
     * temp
     * */
    p.preload = function (path) {
        var _this = this;
        var testObject = { name: '111' };
        var paths = [];
        if (typeof path === "string") {
            paths = [path];
        }
        else {
            paths = path;
        }
        var tasks = paths.map(function (p) {
            var resource = new JsonResource();
            resource.path = p;
            return resource;
        });
        var q = async.priorityQueue(function (task, callback) {
            console.log('load ' + task.path);
            _this.onChange("complete", task);
            callback();
        }, 2);
        this.q = q;
        // assign a callback
        q.drain = function () {
            console.log('all items have been processed');
            // q.push({ name: 'foo1' }, 0, function (err) {
            //     console.log('finished processing foo1');
            //     q.resume();
            // });
        };
        // add some items to the queue
        q.push(tasks, 0, function (err) {
            console.log('finished processing foo');
        });
    };
    return ResourceManager;
}());
egret.registerClass(ResourceManager,'ResourceManager');
var JsonResource = (function () {
    function JsonResource() {
    }
    var d = __define,c=JsonResource,p=c.prototype;
    p.preload = function (callback) {
        var request = new egret.URLRequest(this.path);
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        loader.load(request);
    };
    p.onComplete = function (e) {
        var loader = e.target;
        loader.removeEventListener(egret.Event.COMPLETE, this.onComplete, this);
        var text = loader.data;
        this.data = JSON.parse(text);
    };
    p.load = function (callback) {
    };
    p.unload = function () {
    };
    p.dispose = function () {
    };
    return JsonResource;
}());
egret.registerClass(JsonResource,'JsonResource',["ResourceFile"]);
var ImageResource = (function () {
    function ImageResource() {
    }
    var d = __define,c=ImageResource,p=c.prototype;
    p.preload = function (callback) {
        var request = new egret.URLRequest(this.path);
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        loader.load(request);
    };
    p.onComplete = function (e) {
        var loader = e.target;
        loader.removeEventListener(egret.Event.COMPLETE, this.onComplete, this);
        var texture = loader.data;
        this.data = texture;
    };
    p.load = function (callback) {
    };
    p.unload = function () {
    };
    p.dispose = function () {
    };
    return ImageResource;
}());
egret.registerClass(ImageResource,'ImageResource',["ResourceFile"]);

var ResourceShim = (function (_super) {
    __extends(ResourceShim, _super);
    function ResourceShim() {
        _super.apply(this, arguments);
    }
    var d = __define,c=ResourceShim,p=c.prototype;
    return ResourceShim;
}(egret.EventDispatcher));
egret.registerClass(ResourceShim,'ResourceShim');
var shim = new ResourceShim();
var resourceManager = new ResourceManager();
var RES;
(function (RES) {
    var ResourceEvent = (function (_super) {
        __extends(ResourceEvent, _super);
        function ResourceEvent() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ResourceEvent,p=c.prototype;
        return ResourceEvent;
    }(egret.Event));
    RES.ResourceEvent = ResourceEvent;
    egret.registerClass(ResourceEvent,'RES.ResourceEvent');
    RES.fs = new ResourceManager();
    var ResourceEvent;
    (function (ResourceEvent) {
        ResourceEvent.CONFIG_COMPLETE = "CONFIG_COMPLETE";
        ResourceEvent.GROUP_COMPLETE = "GROUP_COMPLETE";
        ResourceEvent.GROUP_LOAD_ERROR = "GROUP_LOAD_ERROR";
        ResourceEvent.GROUP_PROGRESS = "GROUP_PROGRESS";
    })(ResourceEvent = RES.ResourceEvent || (RES.ResourceEvent = {}));
    function addEventListener(type, listener, thisObject) {
        shim.addEventListener(type, listener, thisObject);
    }
    RES.addEventListener = addEventListener;
    function removeEventListener(type, listener, thisObject) {
        shim.removeEventListener(type, listener, thisObject);
    }
    RES.removeEventListener = removeEventListener;
    function loadConfig(configFile, resourceRoot) {
        var onChange = function (type, resource) {
            shim.dispatchEvent(new ResourceEvent(RES.ResourceEvent.CONFIG_COMPLETE));
        };
        resourceManager.onChange = onChange;
        resourceManager.preload(configFile);
        return;
        // var request = new egret.URLRequest(configFile);
        // var loader = new egret.URLLoader();
        // loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        // loader.addEventListener(egret.Event.COMPLETE,onConfigLoadComplete,this);
        // loader.load(request);
        // setTimeout(()=> dispatchResourceEvent(),1000);
    }
    RES.loadConfig = loadConfig;
    var config;
    function onConfigLoadComplete(e) {
        var loader = e.target;
        loader.removeEventListener(egret.Event.COMPLETE, onConfigLoadComplete, this);
        config = JSON.parse(loader.data);
    }
    function dispatchResourceEvent() {
        shim.dispatchEvent(new RES.ResourceEvent(RES.ResourceEvent.CONFIG_COMPLETE));
    }
    function loadGroup(groupName) {
        console.log(groupName, config);
    }
    RES.loadGroup = loadGroup;
    function getRes(resourceName) {
        return null;
    }
    RES.getRes = getRes;
    function getResAsync(name, callback, thisObject) {
    }
    RES.getResAsync = getResAsync;
})(RES || (RES = {}));

