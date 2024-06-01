import { favoriteButtonPresenter } from "../../src/scripts/utils/initiators-presenter";
import FavoriteIdb from "../../src/scripts/data/favorited-IDB";

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
    await favoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteRestaurants: FavoriteIdb,
        restaurant,
    });
};

export { createFavoriteButtonPresenterWithRestaurant };
