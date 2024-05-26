// // cache-helper.js
// import CONFIG from '../globals/config';

// const CACHE_NAME = CONFIG.CACHE_NAME;

// const CacheHelper = {
//     async cachingAppShell(requests) {
//         const cache = await this._openCache();
//         cache.addAll(requests);
//     },

//     async deleteOldCache() {
//         const cacheNames = await caches.keys();
//         return Promise.all(
//             cacheNames
//                 .filter((name) => name !== CACHE_NAME)
//                 .map((filteredName) => caches.delete(filteredName))
//         );
//     },

//     async revalidateCache(request) {
//         const cachedResponse = await caches.match(request);
//         if (cachedResponse) {
//             return cachedResponse;
//         }

//         try {
//             const response = await fetch(request);
//             if (!response || response.status !== 200) {
//                 return response;
//             }
//             await this._addCache(request, response.clone());
//             return response;
//         } catch (error) {
//             return new Response('You are offline. Please check your internet connection.', {
//                 status: 503,
//                 statusText: 'Offline',
//             });
//         }
//     },

//     async _openCache() {
//         return caches.open(CACHE_NAME);
//     },

//     async _addCache(request, response) {
//         const cache = await this._openCache();
//         cache.put(request, response);
//     },
// };

// export default CacheHelper;
