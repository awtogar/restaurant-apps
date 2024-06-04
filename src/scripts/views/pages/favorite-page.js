import FavoriteIdb from '../../data/favorited-IDB';
import { createItemListTemplate } from '../pages-templates/templates-creator';

const FavoritePage = {
    async render() {
        return `
            <h1>Favorite Restaurants</h1>
            <section id="favoritesView" class="favorites_view"></section>
        `;
    },

    async afterRender() {
        const favoritedItems = await FavoriteIdb.getAllRestaurants();
        const favoritedContainer = document.getElementById('favoritesView');

        if (favoritedItems.length === 0) {
            const emptyFavoritedRestaurant = document.createElement('div');
            emptyFavoritedRestaurant.setAttribute('id', 'favoriteItemNotFound');
            emptyFavoritedRestaurant.setAttribute('class', 'favorite-item__not__found');

            const unAvailableFavorited = document.createElement('h2');
            unAvailableFavorited.textContent = "There is no favorited restaurant!";

            emptyFavoritedRestaurant.appendChild(unAvailableFavorited);
            favoritedContainer.appendChild(emptyFavoritedRestaurant);
        }

        favoritedItems.forEach((restaurant) => {
            favoritedContainer.innerHTML += createItemListTemplate(restaurant);
        });

    },
};

export default FavoritePage;

