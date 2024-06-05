/* eslint-disable no-undef */
const assert = require('assert');
Feature('Reviewing Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Posting Restaurant Review', async ({ I }) => {
    I.seeElement('#restaurantList');
    pause();
    I.seeElement('.card-item a');
    I.click(locate('.card-item a').first());
    I.seeElement('#formSection');
    I.seeElement('#reviewInputForm');

    const nameInput = 'Jhon Doe Toe Oemat bray';
    const reviewInput = 'Enak tapi sering dimintain temen';

    I.fillField('input[name=name]', nameInput);
    I.fillField('input[name=review]', reviewInput);
    I.seeElement('#SubmitYourReview');
    I.click('#SubmitYourReview');

    // Wait untill submitted and pop up
    I.wait(5);

    // Latest Review
    const latestReview = locate('.review-card').last();
    const latestReviewText = await I.grabTextFrom(latestReview);

    // Check the review
    assert.strictEqual(latestReviewText.includes(reviewInput), true, 'Review not same as your typing');
    I.amOnPage('/#/home');
});