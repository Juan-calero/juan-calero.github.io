"use strict";var precacheConfig=[["/index.html","7195248e2b75fc8681108c6e4c3e09ee"],["/static/css/main.53677dc1.css","30f54da62cbc1a1812ff0e4f4f245349"],["/static/js/main.9c84c873.js","1115f2a6a39dc04e281db68525ad91e6"],["/static/media/JCLOGO.905b32f4.png","905b32f47f40c45a47a3f762505f7757"],["/static/media/JCLOGO.a526afab.webp","a526afab80d1b06add88e8166e9c6954"],["/static/media/PORTUGUESE CV.7948ff85.pdf","7948ff85a2549315bc9fdd9efbf91cdc"],["/static/media/TerArtesLogo.111b0abd.webp","111b0abd92f67399d457bcf3e5d98a24"],["/static/media/TerArtesPrint.5f4368f2.jpg","5f4368f201eefe386436fcf25fd565f2"],["/static/media/WeatherPrint.f1da1bb0.jpg","f1da1bb04971d481e70861d647e154b0"],["/static/media/brain_neon.8cd56bd6.webp","8cd56bd691b322057313e0a6afea0a6c"],["/static/media/design_icon.91c79e5e.webp","91c79e5e839b6833132dd5359e0b4fdd"],["/static/media/envolvimento_icon.754d2974.webp","754d2974291355c3c83fd181848a7028"],["/static/media/gears_icon.8b8f7b8a.webp","8b8f7b8ab350d1f04f9c3bbf83e8bc9b"],["/static/media/jcface.518700e4.jpg","518700e4ccccc53ab5c720aa0407a3fb"],["/static/media/musicaemsiprint.8e4a3c54.webp","8e4a3c546d5827c9ed431ad956aac3f4"],["/static/media/nebula.regular.41d748c1.otf","41d748c1ab9c858a1f990a94559814c5"],["/static/media/washome screenshot.7065617b.webp","7065617b89b4711400756a6186aa13df"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});