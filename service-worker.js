"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/PaperRockScissors/index.html","47357e941dd36763753cda03544e6364"],["/PaperRockScissors/static/css/main.2e8f0fb9.css","b501c261c87d30f8a5e407f7a739186e"],["/PaperRockScissors/static/js/main.62a82d29.js","98af6e514fbf343ae1524626d82de8b4"],["/PaperRockScissors/static/media/bg.86ffb875.jpg","86ffb87572d657f335cd7cd828c70de3"],["/PaperRockScissors/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/PaperRockScissors/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/PaperRockScissors/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/PaperRockScissors/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/PaperRockScissors/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/PaperRockScissors/static/media/paper.81cbd615.png","81cbd615f4f50998754d0bfb79bf94bc"],["/PaperRockScissors/static/media/rock.86dbdfcd.png","86dbdfcd387730383d1d1096e46da531"],["/PaperRockScissors/static/media/scissors.b9f61643.png","b9f61643a0521341cbe42dea201ec7de"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,r,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var n=new Request(r,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),t=urlsToCacheKeys.has(r));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL("/PaperRockScissors/index.html",self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});