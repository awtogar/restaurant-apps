const CacheHelper = {
    async cachingAppShell(requests) {
        const cache = await this._openCache();
        cache.addAll(requests);
    },

    async deleteOldCache() {
        const cacheNames = await caches.keys();
        cacheNames
            .filter((name) => name !== 'happs-cache')
            .map((filteredName) => caches.delete(filteredName));
    },

    async revalidateCache(request) {
        const response = await caches.match(request);
        if (response) {
            return response;
        }

        return fetch(request);
    },

    async _openCache() {
        return caches.open('happs-cache');
    },
};

export default CacheHelper;
