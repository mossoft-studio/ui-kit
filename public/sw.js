if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),u={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>u[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e4f07cedc6010371fb5369882d6740d1"},{url:"/_next/static/RHkbbJe2Y-H5KurQgzCuo/_buildManifest.js",revision:"d38281a6a9b90928087dd54147c486bc"},{url:"/_next/static/RHkbbJe2Y-H5KurQgzCuo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/128-6e89fd0ff4b14ea9.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/14-3ce4cbb84cf4c571.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/171-4274a8247d7fb441.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/251-0808d222ea8d173c.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/65-27df35b57b457f49.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/67-c8eeeedefd16d8a0.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/6f26639a-ccf423b50c8f3845.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/761-82851cf115f124d2.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/7694e0e6-cd6626788c060401.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/831-ef3dad678dc7d1ac.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/active-task/%5Btask_id%5D/%5Bstep_id%5D/page-9723d2205fe4b6f7.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/active-task/page-6ac86f12022e2973.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/layout-44fe29fb3147ff52.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/map/layout-fd89f34a595d6171.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/map/page-b5b1d0b4abc69d7c.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/map/rows/%5Bblock_id%5D/page-d8b5a3a575d45b7e.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/offers/%5Boffer_id%5D/page-bae559326fd3b79b.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/offers/page-9744f228ed6f122b.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/page-33d800c3b3948b7b.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/scan-verif/page-b1889bf645ff23ae.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/tasks/%5Btask_id%5D/page-1ce53edf3ca4a737.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/tasks/blocks/page-88156ff5a0e7cefa.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/tasks/page-143f19544d36406d.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/tasks/sections/page-62ec1eac55b39353.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/tasks/task/page-49a95dda57e60cf9.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/tasks/types/page-6118e81a71b22a2d.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/tasks/workers/page-5687675db362b6bd.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/me/verification/%5Buser_id%5D/page-65cda90ab5378a82.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/offers/page-126373fc82c268a5.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/%5BdeviceType%5D/signin/page-bc247c92af4ac8c9.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/layout-7057cd123f7e00de.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/not-found-43bb75770ed021e0.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/only-mob/page-9b933bbf55d1b206.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/app/page-5e18b0e4c0d5f371.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/fc3e9806-8524d8d3a347a17d.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/fd2fc5b7-0f88a9b53f023a9f.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/main-app-dbb7b9fa0a4b9a9a.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/main-c0fe9e6a0b4ef332.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/pages/_app-2507a4f7a2b0c89a.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/pages/_error-dc768fb7e166edf4.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-600461286027e6b6.js",revision:"RHkbbJe2Y-H5KurQgzCuo"},{url:"/_next/static/css/3e0967c580e7abcc.css",revision:"3e0967c580e7abcc"},{url:"/_next/static/css/5140858a8861a1d1.css",revision:"5140858a8861a1d1"},{url:"/_next/static/css/9e76756c16956aba.css",revision:"9e76756c16956aba"},{url:"/_next/static/css/b70285e813a956ff.css",revision:"b70285e813a956ff"},{url:"/_next/static/css/b8a3b5495146afb9.css",revision:"b8a3b5495146afb9"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"26f1e1b694ca5b8b44143de65ab42a4e"},{url:"/android-chrome-512x512.png",revision:"957d70c1e2f1b9d3a903027b72410e86"},{url:"/apple-touch-icon.png",revision:"bd306c0a6120f24481d450145b8f961c"},{url:"/ava.jpg",revision:"5d88ede937b9388b2dbd8be8eb5295f9"},{url:"/favicon-16x16.png",revision:"076378bc4fb1f465496839239b3dcaa7"},{url:"/favicon-32x32.png",revision:"4e4676bcfa05e763c908fbfb5dfaf066"},{url:"/favicon.ico",revision:"52d3d0590a5ebe0c5c5e5dec438eae86"},{url:"/icons/checked.svg",revision:"e1d4f09b4cbadc2b55cffcd5f0ca7239"},{url:"/icons/sprite.svg",revision:"ee5c10f8bcfd3e83991e284ae5cd8f45"},{url:"/icons/success.svg",revision:"a6de75709d6ccba9dad636fcc819acc4"},{url:"/manifest.json",revision:"95a914120236b10ba795fddb931b0d7a"},{url:"/onlymob.png",revision:"4024a688fc5ee3289aa1024ef0fc1e98"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
