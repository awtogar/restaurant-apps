// import { openDB } from 'idb';

// const DATABASE_NAME = 'restaurantApp';
// const DATABASE_VERSION = 1;
// const STORE_NAME = 'favorites';

// async function initDB() {
//     const db = await openDB(DATABASE_NAME, DATABASE_VERSION, {
//         upgrade(db) {
//             if (!db.objectStoreNames.contains(STORE_NAME)) {
//                 db.createObjectStore(STORE_NAME, { keyPath: 'id' });
//             }
//         },
//     });
//     return db;
// }

// export async function getAllFavorites() {
//     const db = await initDB();
//     return db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).getAll();
// }

// export async function saveFavorite(restaurant) {
//     const db = await initDB();
//     const tx = db.transaction(STORE_NAME, 'readwrite');
//     tx.objectStore(STORE_NAME).put(restaurant);
//     return tx.complete;
// }

// export async function deleteFavorite(id) {
//     const db = await initDB();
//     const tx = db.transaction(STORE_NAME, 'readwrite');
//     tx.objectStore(STORE_NAME).delete(id);
//     return tx.complete;
// }

// export async function isFavorite(id) {
//     const db = await initDB();
//     return db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(id);
// }
