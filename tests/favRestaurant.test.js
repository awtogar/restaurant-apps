/* eslint-disable no-undef */
import FavoriteIdb from "../src/scripts/data/favorited-IDB";
import * as TestFactories from './helpers/testFactories';

describe('Favoriting A restaurant', () => {
    const addFavoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };

    beforeEach(() => {
        addFavoriteButtonContainer();
    });

    it('should show the like button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
    });

    it('should not show the unfavorited button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
    });

    it('should be able to favorite the restaurant', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteIdb.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });

        await FavoriteIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already favorited', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

        await FavoriteIdb.putRestaurant({ id: 1 });
        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

        await FavoriteIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllRestaurants()).toEqual([]);
    });
});
