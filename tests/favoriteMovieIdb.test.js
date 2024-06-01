/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from "./contracts/favoriteRestaurantContract";
import FavoriteIdb from "../src/scripts/data/favorited-IDB";

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteIdb.getAllRestaurants()).forEach(async (movie) => {
            await FavoriteIdb.deleteRestaurant(movie.id);
        });
    });

    itActsAsFavoriteRestoModel(FavoriteIdb);
});