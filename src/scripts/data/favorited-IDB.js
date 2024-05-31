import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        console.log("Upgrading database...");
        if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
            console.log("Creating object store:", OBJECT_STORE_NAME);
            database.createObjectStore(OBJECT_STORE_NAME, {
                keyPath: 'id',
            });
        } else {
            console.log("Object store already exists:", OBJECT_STORE_NAME);
        }
    },
});

const FavoriteIdb = {
    async getRestaurant(id) {
        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },

    async getAllRestaurant() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },

    async putRestaurant(restaurant) {
        // eslint-disable-next-line no-prototype-builtins
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }
        return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    },
    
    // async putRestaurant(restaurant) {
    //     return (await dbPromise).put(OBJECT_STORE_NAME, JSON.parse(JSON.stringify(restaurant)));
    // },

    async deleteRestaurant(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
};

export default FavoriteIdb;
