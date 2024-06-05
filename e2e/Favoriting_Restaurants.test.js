/* eslint-disable no-undef */
const assert = require('assert');
Feature('Favoriting Restaurant');

Before(({ I }) => {
        I.amOnPage('/#/favorite');
    }
);

Scenario('showing empty favorited restaurant', async ({ I }) => {
    // Checking theres is no favorited restaurant
    I.seeElement('.favorite-item__not__found');
    I.see('There is no favorited restaurant!');
    }
);

Scenario('favoriting one restaurant', async ({ I }) => {
    I.seeElement('.favorite-item__not__found');
    I.see('There is no favorited restaurant!');

    // http://localhost:8080/#/home
    I.amOnPage('/#/home');
    I.seeElement('.card-item a');
    const firstRestaurant = locate('.card-item h2').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(locate('.card-item a').first())

    I.waitForURL();

    // http://localhost:8080/#/detail/id
    I.waitForElement('#favoriteButton', 3);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    // http://localhost:8080/#/favorite
    I.waitForURL();
    I.amOnPage('/#/favorite');
    I.waitForElement('.card-item', 3);
    I.seeElement('.card-item');
    const favRestaurantTitle = await I.grabTextFrom('.card-item .item-name');
    assert.strictEqual(firstRestaurantTitle, favRestaurantTitle);
    }
);


// FIXME:
Scenario('unfavoriitng one restaurant', async ({ I }) => {
    // http://localhost:8080/#/home
    I.amOnPage('/#/home');
    I.seeElement('.card-item a');
    const firstFavoritedRestaurant = locate('.card-item h2').first();
    const firstFavoritedRestaurantTitle = await I.grabTextFrom(firstFavoritedRestaurant);
    I.click(locate('.card-item a').first())
    I.waitForURL();

    // http://localhost:8080/#/detail/id
    I.waitForElement('#favoriteButton', 3);
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    // http://localhost:8080/#/favorite
    I.waitForURL();
    I.amOnPage('/#/favorite');
    I.waitForElement('.card-item', 3);
    I.seeElement('.card-item a ');
    const unfavRestaurantTitle = await I.grabTextFrom('.card-item .item-name');
    assert.strictEqual(firstFavoritedRestaurantTitle, unfavRestaurantTitle);
    I.click(locate('.card-item a').first())

    // http://localhost:8080/#/detail/id
    I.waitForURL();
    I.waitForElement('#unFavoriteButton', 3);
    I.seeElement('#unFavoriteButton');
    I.click('#unFavoriteButton');
    I.waitForURL();
    I.amOnPage('/#/favorite');
    I.refreshPage();
    
    const isNotFoundVisible = await I.grabNumberOfVisibleElements('.favorite-item__not__found') > 0;
    assert.ok(isNotFoundVisible, 'Favorite item not found element is not visible');

    I.seeElement('.favorite-item__not__found');
    I.see('There is no favorited restaurant!');
    }
);