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
        const favoritedItems = await FavoriteIdb.getAllRestaurant();
        const favoritedContainer = document.getElementById('favoritesView');

        if (favoritedItems.length === 0) {
            const unAvailableFavorited = document.createElement('h2');
            unAvailableFavorited.textContent = "There's no favorited yet!";
            favoritedContainer.appendChild(unAvailableFavorited);
        }
        favoritedItems.forEach((restaurant) => {
            favoritedContainer.innerHTML += createItemListTemplate(restaurant);
        });
    },
};

export default FavoritePage;

