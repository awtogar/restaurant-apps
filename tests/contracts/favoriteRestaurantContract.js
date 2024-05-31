const itActsAsFavoriteRestoModel = (FavoriteIdb) => {
    it('should return the restaurant that has been added', async () => {
        FavoriteIdb.putRestaurant({ id: 1 });
        FavoriteIdb.putRestaurant({ id: 2 });

        expect(await FavoriteIdb.getRestaurant(1)).toEqual({ id: 1 });
        expect(await FavoriteIdb.getRestaurant(2)).toEqual({ id: 2 });
        expect(await FavoriteIdb.getRestaurant(3)).toEqual(undefined);
    });

    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
        FavoriteIdb.putRestaurant({ aProperty: 'property' });

        expect(await FavoriteIdb.getAllRestaurant()).toEqual([]);
    });

    it('can return all of the restaurant that have been added', async () => {
        FavoriteIdb.putRestaurant({ id: 1 });
        FavoriteIdb.putRestaurant({ id: 2 });

        expect(await FavoriteIdb.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should remove favorite restaurant', async () => {
        FavoriteIdb.putRestaurant({ id: 1 });
        FavoriteIdb.putRestaurant({ id: 2 });
        FavoriteIdb.putRestaurant({ id: 3 });

        await FavoriteIdb.deleteRestaurant(1);

        expect(await FavoriteIdb.getAllRestaurant()).toEqual([{ id: 2 }, { id: 3 }]);
    });

    it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
        FavoriteIdb.putRestaurant({ id: 1 });
        FavoriteIdb.putRestaurant({ id: 2 });
        FavoriteIdb.putRestaurant({ id: 3 });

        await FavoriteIdb.deleteRestaurant(4);

        expect(await FavoriteIdb.getAllRestaurant()).toEqual([
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]);
    });
};
// eslint-disable-next-line import/prefer-default-export

export { itActsAsFavoriteRestoModel };