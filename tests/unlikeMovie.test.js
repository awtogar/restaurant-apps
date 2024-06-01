/* eslint-disable no-undef */
import FavoriteIdb from "../src/scripts/data/favorited-IDB";
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Movie', () => {
    const addfavoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };

    beforeEach(async () => {
        addfavoriteButtonContainer();
        await FavoriteIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteIdb.deleteRestaurant(1);
    });

    it('should display unlike widget when the movie has been liked', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the movie has been liked', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
        expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove liked movie from the list', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
        document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
    });
    it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
        // Hapus dulu film dari daftar film yang disukai
        await FavoriteIdb.deleteRestaurant(1);

        // Kemudian, simulasikan pengguna menekan widget batal menyukai film
        document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
    });
});