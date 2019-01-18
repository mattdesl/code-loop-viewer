!function(){return function e(t,n,r){function o(i,a){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){return o(t[i][1][e]||e)},l,l.exports,e,t,n,r)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}}()({1:[function(e,t,n){var r=e("defined"),o=Number.EPSILON;function u(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}function i(e,t,n){return e*(1-n)+t*n}function a(e,t,n){return Math.abs(e-t)<o?0:(n-e)/(t-e)}function c(e,t){return t=r(t,0),"number"==typeof e&&isFinite(e)?e:t}function f(e){if("number"!=typeof e)throw new TypeError("Expected dims argument");return function(t,n){var o;n=r(n,0),null==t?o=n:"number"==typeof t&&isFinite(t)&&(o=t);var u,i=[];if(null==o)for(u=0;u<e;u++)i[u]=c(t[u],n);else for(u=0;u<e;u++)i[u]=o;return i}}function l(e,t,n,r){if(r=r||[],e.length!==t.length)throw new TypeError("min and max array are expected to have the same length");for(var o=0;o<e.length;o++)r[o]=i(e[o],t[o],n);return r}function m(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");for(var n=[],o=0;o<e;o++)n.push(t);return n}function s(e,t){return(e%t+t)%t}function p(e,t,n,r){return i(e,t,1-Math.exp(-n*r))}t.exports={mod:s,fract:function(e){return e-Math.floor(e)},sign:function(e){return e>0?1:e<0?-1:0},degToRad:function(e){return e*Math.PI/180},radToDeg:function(e){return 180*e/Math.PI},wrap:function(e,t,n){if("number"!=typeof t||"number"!=typeof n)throw new TypeError('Must specify "to" and "from" arguments as numbers');if(t>n){var r=t;t=n,n=r}var o=n-t;return 0===o?n:e-o*Math.floor((e-t)/o)},pingPong:function(e,t){return e=s(e,2*t),t-Math.abs(e-t)},linspace:function(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");"boolean"==typeof(t=t||{})&&(t={endpoint:!0});var n=r(t.offset,0);return t.endpoint?m(e).map(function(t,r){return e<=1?0:(r+n)/(e-1)}):m(e).map(function(t,r){return(r+n)/e})},lerp:i,lerpArray:l,inverseLerp:a,lerpFrames:function(e,t,n){t=u(t,0,1);var r=e.length-1,o=t*r,a=Math.floor(o),c=o-a,f=Math.min(a+1,r),m=e[a%e.length],s=e[f%e.length];if("number"==typeof m&&"number"==typeof s)return i(m,s,c);if(Array.isArray(m)&&Array.isArray(s))return l(m,s,c,n);throw new TypeError("Mismatch in value type of two array elements: "+a+" and "+f)},clamp:u,clamp01:function(e){return u(e,0,1)},smoothstep:function(e,t,n){var r=u(a(e,t,n),0,1);return r*r*(3-2*r)},damp:p,dampArray:function(e,t,n,r,o){o=o||[];for(var u=0;u<e.length;u++)o[u]=p(e[u],t[u],n,r);return o},mapRange:function(e,t,n,r,u,i){if(Math.abs(t-n)<o)return r;var a=(e-t)/(n-t)*(u-r)+r;return i&&(u<r?a<u?a=u:a>r&&(a=r):a>u?a=u:a<r&&(a=r)),a},expand2D:f(2),expand3D:f(3),expand4D:f(4)}},{defined:2}],2:[function(e,t,n){t.exports=function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}},{}],3:[function(e,t,n){"use strict";var r=e("repeat-string");t.exports=function(e,t,n){return e=e.toString(),void 0===t?e:(n=0===n?"0":n?n.toString():" ",r(n,t-e.length)+e)}},{"repeat-string":4}],4:[function(e,t,n){"use strict";var r,o="";t.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");if(1===t)return e;if(2===t)return e+e;var n=e.length*t;if(r!==e||void 0===r)r=e,o="";else if(o.length>=n)return o.substr(0,n);for(;n>o.length&&t>1;)1&t&&(o+=e),t>>=1,e+=e;return o=(o+=e).substr(0,n)}},{}],5:[function(e,t,n){const{mod:r}=e("canvas-sketch-util/math"),o=e("pad-left"),u=document.querySelector(".loop"),i=/(Android|iOS|iPhone|iPod|iPad)/i.test(navigator.userAgent);i?(document.body.style.maxWidth="initial",document.body.style.maxHeight="initial"):document.body.className+="no-touch";const a=[{name:"2018.07.27-15.19.39.mp4"},{name:"2018.07.23-14.27.21.mp4"},{name:"2018.07.23-14.33.08.mp4"},{name:"2018.07.23-14.34.19.mp4"},{name:"2018.07.23-14.36.11.mp4"},{name:"2018.07.23-14.40.31.mp4"},{name:"2018.10.11-17.55.01.mp4",background:"#F5F4F5"},{name:"2018.10.11-17.51.01.mp4",background:"#F5F4F5"},{name:"2018.10.11-17.57.09.mp4",background:"#F5F4F5"},{name:"2018.08.08-13.42.05.mp4",background:"black",foreground:"white"},{name:"2018.08.07-17.39.41.mp4"},{name:"2018.08.08-11.50.26.mp4"},{name:"2018.08.08-12.46.25.mp4"},{name:"2018.08.08-12.47.43.mp4"},{name:"2018.07.22-16.30.23.mp4"},{name:"2018.07.22-16.24.12.mp4"}].map(({name:e,background:t,foreground:n})=>({name:e,background:t||"white",foreground:n||"black",url:`assets/${e}`}));let c,f=0;l();[{query:".next",step:1},{query:".prev",step:-1}].map(({query:e,step:t})=>{const n=document.querySelector(e);return n.addEventListener("click",e=>{e.preventDefault(),function(e){f=r(f+e,a.length),l()}(t)}),n});function l(){c&&c.detach();const e=a[f];console.log(e.url),(c=function(e){const t=document.createElement("video");t.setAttribute("src",e.url),t.setAttribute("loop",!0),t.setAttribute("preload","auto"),t.setAttribute("playsinline",!0),t.setAttribute("webkit-playsinline",!0),t.style.visibility="hidden";const n=document.querySelector(".loader");let r,o=!1,a=setTimeout(()=>{o||(n.style.visibility="visible")},100);const c="canplaythrough",f=()=>{o||(o=!0,t.removeEventListener(c,f),r=setTimeout(()=>{n.style.visibility="hidden",function(e,t){document.body.style.background=e,document.body.style.color=t,document.documentElement.style.background=i?e:t,Array.from(document.querySelectorAll("button")).forEach(n=>{n.style.color=e,n.style.background=t})}(e.background,e.foreground),t.play(),t.style.visibility=""},100))};return t.addEventListener(c,f),{video:t,attach:()=>{t.parentElement||u.appendChild(t)},detach:()=>{t.parentElement&&t.parentElement.removeChild(t),t.setAttribute("src",""),t.removeEventListener(c,f),clearTimeout(a),r&&clearTimeout(r)}}}(e)).attach(),document.querySelector(".current").textContent=o(String(f+1),String(a.length).length,"0"),document.querySelector(".total").textContent=String(a.length)}},{"canvas-sketch-util/math":1,"pad-left":3}],6:[function(e,t,n){(function(e){e.CANVAS_SKETCH_DEFAULT_STORAGE_KEY=window.location.href}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[5,6]);