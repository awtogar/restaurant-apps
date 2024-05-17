import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
        db.createObjectStore(OBJECT_STORE_NAME, {
            keyPath: 'id',
        });
    },
});

const favoritedDB = {
    async getRestaurant(id) {
        const db = await dbPromise;
        return db.get(OBJECT_STORE_NAME, id);
    },

    async getAllRestaurants() {
        const db = await dbPromise;
        return db.getAll(OBJECT_STORE_NAME);
    },

    async putRestaurant(restaurant) {
        const db = await dbPromise;
        return db.put(OBJECT_STORE_NAME, JSON.parse(JSON.stringify(restaurant)));
    },

    async deleteRestaurant(id) {
        const db = await dbPromise;
        return db.delete(OBJECT_STORE_NAME, id);
    },
};

export default favoritedDB;
