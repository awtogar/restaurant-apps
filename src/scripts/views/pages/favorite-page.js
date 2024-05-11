import { openDB } from 'idb';
import { fetchRestaurantById } from '../resto-list.js';
import { createRestaurantFavoriteTemplate } from '../templates/template-creator';

const favoritePage = {
    async render() {
        return `
            <div id="restaurants__favorite" class="favorite-page">
                <h1>Your Favorite Restaurants</h1>
                <div id="favorite-list" class="restaurants-list"></div>
            </div>
        `;
    },

    async afterRender() {
        const db = await openDB('restaurant-db', 1);
        const allFavs = await db.getAll('favorites');
        const restaurantContainer = document.getElementById('favorite-list');

        if (allFavs.length > 0) {
            allFavs.forEach(async (fav) => {
                try {
                    const restaurant = await fetchRestaurantById(fav.id);
                    const restaurantElement = document.createElement('div');
                    restaurantElement.innerHTML = createRestaurantFavoriteTemplate(restaurant);
                    restaurantContainer.appendChild(restaurantElement);
                } catch (error) {
                    restaurantContainer.innerHTML += `<p>Error: ${error.message}</p>`;
                }
            });
        } else {
            restaurantContainer.innerHTML = `<p>You have no favorite restaurants yet.</p>`;
        }
    },
};

export default favoritePage;
