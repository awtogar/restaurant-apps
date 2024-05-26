// // sw.js
// import 'regenerator-runtime';
// import CacheHelper from './utils/cache-helper';

// // Daftar asset yang akan di-caching
// const assetsToCache = [
//     '/',
//     '/index.html',
//     '/app.bundle.js',
//     '/sw.bundle.js',
//     '/app.webmanifest',
//     '/images/icons/icon-72x72.png',
//     '/images/icons/icon-96x96.png',
//     '/images/icons/icon-128x128.png',
//     '/images/icons/icon-144x144.png',
//     '/images/icons/icon-192x192.png',
//     '/images/icons/icon-384x384.png',
//     '/images/icons/icon-512x512.png',
// ];

// self.addEventListener('install', (event) => {
//     event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
// });

// self.addEventListener('activate', (event) => {
//     event.waitUntil(CacheHelper.deleteOldCache());
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(CacheHelper.revalidateCache(event.request));
// });
