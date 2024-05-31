/* eslint-disable no-undef */
import { favoriteButtonInitiator } from "../src/scripts/utils/initiators-helper";
import FavoriteIdb from "../src/scripts/data/favorited-IDB";

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
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the movie has been liked', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove liked movie from the list', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
        document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
    });
    it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
        await FavoriteIdb.deleteRestaurant(1);
        document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
    });
});