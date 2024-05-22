import FavoriteIdb from '../../data/favorite-idb';
import { createItemListTemplate } from '../pages-templates/templates-creator';

const FavoritePage = {
    async render() {
        return `
        <h1>Favorite Restaurants</h1>
        <section id="favoritesView" class="favorites_view"></section>
    `;
    },

    async afterRender() {
            const restaurants = await FavoriteIdb.getAllRestaurants();
            const favoritesContainer = document.getElementById('favoritesView');
            const notAvailale = document.querySelector(".restaurant-item__not__found");

            if (restaurants.length === 0) {
                notAvailale.innerHTML = `<h2>There's no favorited items</h2>`;
            }
        restaurants.forEach((restaurant) => {
            favoritesContainer.innerHTML += createItemListTemplate(restaurant);
        });
    },
};
export default FavoritePage;

