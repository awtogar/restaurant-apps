import FavoriteIdb from '../data/favorited-IDB';
import { createButtonUnFavoritedRestaurantTemplate, createButtonFavoritedRestaurantTemplate } from '../views/pages-templates/templates-creator';

const favoriteButtonInitiator = {
    async init({ favoriteButtonContainer, restaurant }) {
        this._favoriteButtonContainer = favoriteButtonContainer;
        this._restaurant = restaurant;

        await this._renderedButton();
    },

    async _renderedButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantAvailable(id)) {
            this._renderNonFavoritedButton();
        } else {
            this._renderFavoriteButton();
        }
    },

    async _isRestaurantAvailable(id) {
        const restaurant = await FavoriteIdb.getRestaurant(id);
        return !!restaurant;
    },

    _renderFavoriteButton() {
        this._favoriteButtonContainer.innerHTML = createButtonFavoritedRestaurantTemplate();

        const favoriteButton = document.getElementById("favoriteButton");
        if (favoriteButton) {
            favoriteButton.addEventListener('click', async () => {
                await FavoriteIdb.putRestaurant(this._restaurant);
                await this._renderedButton();
            });
        } else {
            console.error("favoriteButton element not found");
        }
    },

    _renderNonFavoritedButton() {
        this._favoriteButtonContainer.innerHTML = createButtonUnFavoritedRestaurantTemplate();

        const likedButton = document.getElementById("favoriteButton");
        if (likedButton) {
            likedButton.addEventListener("click", async () => {
                await FavoriteIdb.deleteRestaurant(this._restaurant.id);
                await this._renderedButton();
            });
        } else {
            console.error("likedButton element not found");
        }
    },
};

export default favoriteButtonInitiator;
