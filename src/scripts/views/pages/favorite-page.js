import FavoriteIdb from '../../data/favorite-idb';
import { createItemListTemplate } from '../pages-templates/templates-creator';

const FavoritePage = {
    async render() {
        return `
      <section class="restaurant-section" id="restaurantSection">
        <h1 class="section-title">Favorite Restaurants</h1>
        <div class="restaurant-list" id="restaurantList"></div>
      </section>
    `;
    },

    async afterRender() {
        try {
            const restaurants = await FavoriteIdb.getAllRestaurants();
            const restaurantContainer = document.getElementById('restaurantList');
            restaurantContainer.innerHTML = '';

            if (restaurants.length > 0) {
                restaurants.forEach((restaurant) => {
                    const restaurantElement = createItemListTemplate(restaurant);
                    restaurantContainer.appendChild(restaurantElement);
                });
            } else {
                restaurantContainer.innerHTML = "<p class='empty-message'>No favorite restaurants found.</p>";
            }
        } catch (error) {
            console.error('Error fetching favorite restaurants:', error);
        }
    },
};

export default FavoritePage;
