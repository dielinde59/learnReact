"use strict";var precacheConfig=[["/index.html","2e7f3fa81bba52d9636800e76702e52b"],["/static/css/main.5977e6aa.css","f433163765641f6bbc3159d4b9a98eca"],["/static/js/main.257304ce.js","e204e4b82db50e228a7f9ac6d554397c"],["/static/media/Advent1.ff582766.jpg","ff58276688c3ebfd23bc71e16cee8181"],["/static/media/Advent2.81dc4c01.jpg","81dc4c0118caf868b3c189b22243c812"],["/static/media/Advent3.a1f6c6d7.jpg","a1f6c6d7c9c047decc3ccccbf9fa16fd"],["/static/media/Agility1.462f0d9a.jpg","462f0d9adeb80e36d9bf5030f7cfef7a"],["/static/media/Agility2.334b0cdf.jpg","334b0cdf3ea75ca9355b87cb4ca74968"],["/static/media/Anfahrt1.5bffd495.jpg","5bffd495cc51e42d6572e461bfe5107c"],["/static/media/Anfahrt2.79af3e4e.jpg","79af3e4e0049e5ad441cc47987e24692"],["/static/media/BH_Katharina.e09bf3fe.jpg","e09bf3fea2b58cf073aec6987ab44851"],["/static/media/BH_SeppTeddy.3df9d159.jpg","3df9d159ebba805e2198a362aa287952"],["/static/media/BW201910_01.537ad602.jpg","537ad602f5ebd85a15c257a886021352"],["/static/media/BW201910_02.1bfe056c.jpg","1bfe056cf09a0c5774fcd6c40f0b4d67"],["/static/media/BW201910_03.69c30bd4.jpg","69c30bd41e756b79f9fb9f90d7d6c017"],["/static/media/BW201910_04.3bcf2e08.jpg","3bcf2e0894621ee0227e40104cc135c6"],["/static/media/C001.7bf96860.jpg","7bf96860f05df7e79032378199aa590f"],["/static/media/C002.7f8d3a92.jpg","7f8d3a9276607338d480ec66cfecade7"],["/static/media/C003.d4fd1d3e.jpg","d4fd1d3e9f6516332cbe886798e428eb"],["/static/media/C004.84bad5a4.jpg","84bad5a495b98c92051b4e4a219024fc"],["/static/media/C005.beed6899.jpg","beed6899d3166cb4c24dc044dd7a140c"],["/static/media/C006.e5554182.jpg","e5554182b259e6901b80fd890b2ec97f"],["/static/media/C007.2578fd3a.jpg","2578fd3ade01585b7223a463ed60138d"],["/static/media/C008.cbb2a795.jpg","cbb2a795f60df17796a24e8e9065ef7d"],["/static/media/C009.beae5982.jpg","beae598207c9367af2db68c88617db45"],["/static/media/C010.255576a1.jpg","255576a18abe269faa8a8dfcf402a5b1"],["/static/media/C011.c793ae7b.jpg","c793ae7b4e984d4c0a6788d08dde94bb"],["/static/media/C012.899a01c6.jpg","899a01c6a91623bda24b55c1cbe73cc8"],["/static/media/C013.cf1e5c9f.jpg","cf1e5c9f555296498fdd5cf0e955c58d"],["/static/media/C014.ceb7ea42.jpg","ceb7ea42044e5be1f248f0a50fc44d98"],["/static/media/C015.4de2423f.jpg","4de2423ff338b25f0e564f2abe87b386"],["/static/media/C016.dcfee731.jpg","dcfee731737963d45b27df07b6941b90"],["/static/media/C017.4e31507e.jpg","4e31507ecb337fb7e63aad948edcc04f"],["/static/media/C018.90778486.jpg","90778486d8cc7d8f200111777fad47d7"],["/static/media/C019.54bde743.jpg","54bde743b4197735609eae188ef559e0"],["/static/media/C020.27ac6b82.jpg","27ac6b82780febea55cc979a168bf47a"],["/static/media/C021.0da0c270.jpg","0da0c27037f306706c24d6a9822684b8"],["/static/media/C022.e6101e86.jpg","e6101e86d4db566a83d4c704402e3921"],["/static/media/C023.f3dee42c.jpg","f3dee42c6d506445ac584c4add85f749"],["/static/media/C024.eecc0ebb.jpg","eecc0ebb339ac758743062d81631ed0b"],["/static/media/C025.edb06f71.jpg","edb06f715eb25358dbd8e2d87a01aa53"],["/static/media/C026.79ab9160.jpg","79ab91603120517f4caceded7ecbd6a3"],["/static/media/C027.41113fef.jpg","41113fef8732bfc20f437cfd3d83cc38"],["/static/media/C028.e120b0fa.jpg","e120b0fa4d33067e8f5e08c9a6bbf06e"],["/static/media/C029.8038a679.jpg","8038a67971461b90482669b55b843410"],["/static/media/C030.66c61a8c.jpg","66c61a8c2d002303116d334c4d1b35fc"],["/static/media/C031.cb924fe0.jpg","cb924fe00199fec4ea7e5b110703eb4c"],["/static/media/C032.6b3ffcb8.jpg","6b3ffcb892ebe60124c398453fa76ad7"],["/static/media/C033.85f56900.jpg","85f569004cd8b4c3069124e2abff7e61"],["/static/media/C034.4011c6a8.jpg","4011c6a815c506333377aeafd9776e5c"],["/static/media/C035.4d312d4f.jpg","4d312d4ff26c9cb409eff083ff568164"],["/static/media/Einzelstunden1.ebf538da.jpg","ebf538dae3be11815d8f57e094121b08"],["/static/media/Einzelstunden2.ef4bc2d1.jpg","ef4bc2d11cf08c9d7e0dc097b884797d"],["/static/media/Experten1.eca864b1.jpg","eca864b16c1faee93b3113a12df37f81"],["/static/media/Experten2.7cc92a83.jpg","7cc92a836264476e841c7129aab8e7e5"],["/static/media/Experten3.9201fb7c.jpg","9201fb7c92fddda9c874ff4bc5073b4b"],["/static/media/Gelaende01.5197d906.jpg","5197d906565636dcef3c2b6d98af7ecb"],["/static/media/Gelaende02.09c04570.jpg","09c0457005cf72496d1e2b101c6be271"],["/static/media/GemischteGruppen1.4b08bcc0.jpg","4b08bcc0e0d04c51bd259ebb691d6d6b"],["/static/media/GemischteGruppen2.7da05b05.jpg","7da05b057aa493511d505ddc4e9e3368"],["/static/media/Impressum01.29b08f16.jpg","29b08f165ba440710bdd408c23d3113e"],["/static/media/Impressum02.5f080060.jpg","5f08006065c4a11179c1c9c4e01329f6"],["/static/media/Junghunde1.06eb43cf.jpg","06eb43cf99885871631af0d1d77038cc"],["/static/media/Junghunde2.1a34424b.jpg","1a34424bcea46bf01452144ef448b21a"],["/static/media/Logo.94e63088.jpg","94e63088b893b3149255cfd999e1ce45"],["/static/media/Longieren1.55b87223.jpg","55b87223924cca6cbe44a2a5ebf6eb0f"],["/static/media/Longieren2.b94ff8e9.jpg","b94ff8e92e77c4dbcd2fa557f5abdbb0"],["/static/media/Obedience1.c8062637.jpg","c8062637349569560314b6cf2b59055c"],["/static/media/Obedience2.201cec15.jpg","201cec15e3e5e365512cfa89e5518eb3"],["/static/media/Obedience3.ba30659d.jpg","ba30659d302724a682bce73c992a7d0c"],["/static/media/SF2011_01.458b4222.jpg","458b42225565fee0dc8b968a69630f69"],["/static/media/SF2011_02.75b8a3f6.jpg","75b8a3f6694103cc63e49d4dd7fd3dc8"],["/static/media/Stadtgang1.4da1c9be.jpg","4da1c9be918495ef5b45c6cd44f2f028"],["/static/media/Stadtgang2.4f29d4d5.jpg","4f29d4d5b3548dda9464de0653b7c68b"],["/static/media/Startseite.8681eaac.jpg","8681eaac2456271af35f9808f95d3a0e"],["/static/media/Stoeberkurs_10.76f8573b.jpg","76f8573b5ea3b5a1a12271ca542178ee"],["/static/media/Stoeberkurs_25.0408f4ce.jpg","0408f4ce2c599a2ba554a5266be84528"],["/static/media/Stöbern1.bccb7448.jpg","bccb74487749eaeb985921fcf2ce7536"],["/static/media/Stöbern2.1345d476.jpg","1345d476e33452efecffe0c2778049b6"],["/static/media/Ueberuns1.4304d6cf.jpg","4304d6cf94bdf45da7987b537471e0db"],["/static/media/Ueberuns2.06919012.jpg","06919012b1b1e0d3e3ea89e1a4837f7a"],["/static/media/VorbereitungBH1.b19daadd.jpg","b19daaddf4faff987087cfa6a401a46d"],["/static/media/VorbereitungBH2.7cef2be6.jpg","7cef2be60494a8e07dc31ddbf4095c04"],["/static/media/Welpen1.2e0cd81a.jpg","2e0cd81ae2be02e5014294f4c84d4aad"],["/static/media/Welpen3.dabac7c7.jpg","dabac7c722e55ec8ab6c79fc85315047"],["/static/media/analyse1.bf9e7057.jpg","bf9e7057677abeefe262adeea4c550d8"],["/static/media/analyse2.a7f2420c.jpg","a7f2420cf08ac84a08dafe3fe32adb07"],["/static/media/analyse3.d624fbc8.jpg","d624fbc87cd33dc9c3eb658274126ee2"],["/static/media/header-photo1CroppedRand2.0024a7f4.jpg","0024a7f4900cccb4fef68ce1c53844e1"],["/static/media/header-text.738c7810.jpg","738c78108780fc65025f3322ebab18b1"],["/static/media/schlegel_train_1.abac4455.jpg","abac445560fb8892e9377ddaceaf1dfd"],["/static/media/schlegel_train_2.9cd7b53d.jpg","9cd7b53d0a115c29331db7aba0727ef8"],["/static/media/schlegel_train_3.defa56d2.jpg","defa56d25a35fa1122fc013b5e57b640"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});