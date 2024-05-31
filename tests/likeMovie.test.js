/* eslint-disable no-undef */
import { favoriteButtonInitiator } from "../src/scripts/utils/initiators-helper";
import FavoriteIdb from "../src/scripts/data/favorited-IDB";

describe('Liking A Movie', () => {
    // Fungsi agar membuat abstaksi "document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';" 
    const addFavoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };

    beforeEach(() => {
        addFavoriteButtonContainer();
    });

    it('should show the like button when the movie has not been liked before', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the movie has not been liked before', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
    });

    // Menggunakan metode xit, bukan it, untuk menonaktifkan sebuah test case
    xit('should be able to like the movie', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteIdb.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });
    });

    it('should not add a movie again when its already liked', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        await FavoriteIdb.putRestaurant({ id: 1 });
        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
        
        await FavoriteIdb.deleteRestaurant(1);
    });

    // Menggunakan metode xit, bukan it, untuk menonaktifkan sebuah test case
    // TODO: FIXME: LANJUT MODUL
    
    // Kita mendefinisikan test case dengan method xit. 
    // Masih ingat dengan fungsi dari method itu, kan? 
    // Nah, mari kita aktifkan lagi test case ini dengan cara mengubah xit menjadi it.
    it('should not add a movie when it has no id', async () => {
        await favoriteButtonInitiator.init({
            favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
            restaurant: {},
        });
        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
    });
});