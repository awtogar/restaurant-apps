import { favoriteButtonPresenter } from "../../src/scripts/utils/initiators-presenter";


const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
    await favoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant,
    });
};

export { createFavoriteButtonPresenterWithRestaurant };
