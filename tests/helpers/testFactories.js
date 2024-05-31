import { favoriteButtonInitiator } from "../../src/scripts/utils/initiators-helper";
import FavoriteIdb from "../../src/scripts/data/favorited-IDB";

const createFavoriteButtonPresenter = async (restaurant) => {
    await favoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
        FavoriteIdb,
        data: {
            restaurant,
        },
    });
};

export { createFavoriteButtonPresenter };
