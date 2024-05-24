import FavoriteIdb from '../data/favorited-IDB';
import { createButtonUnFavoritedRestaurantTemplate, createButtonFavoritedRestaurantTemplate } from '../views/pages-templates/templates-creator';
import rendererData from '../helper/data-render';
import UrlParser from '../routes/url-parser';

const favoriteButtonInitiator = {
    async init({ favoriteButtonContainer, restaurant }) {
        this._favoriteButtonContainer = favoriteButtonContainer;
        this._restaurant = restaurant;

        await this._renderedButton();
    },

    async _renderedButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantAvailable(id)) {
            this._renderNonFavoritedButton();
        } else {
            this._renderFavoriteButton();
        }
    },

    async _isRestaurantAvailable(id) {
        const restaurant = await FavoriteIdb.getRestaurant(id);
        return !!restaurant;
    },

    _renderFavoriteButton() {
        this._favoriteButtonContainer.innerHTML = createButtonFavoritedRestaurantTemplate();

        const favoriteButton = document.getElementById("favoriteButton");
        if (favoriteButton) {
            favoriteButton.addEventListener("click", async () => {
                await FavoriteIdb.putRestaurant(this._restaurant);
                await this._renderedButton();
            });
        } else {
            console.error("favoriteButton element not found");
        }
    },

    _renderNonFavoritedButton() {
        this._favoriteButtonContainer.innerHTML = createButtonUnFavoritedRestaurantTemplate();

        const unFavoriteButton = document.getElementById("unFavoriteButton");
        if (unFavoriteButton) {
            unFavoriteButton.addEventListener("click", async () => {
                await FavoriteIdb.deleteRestaurant(this._restaurant.id);
                await this._renderedButton();
            });
        } else {
            console.error("unFavoriteButton element not found");
        }
    },
};

const PostReviewOfRestaurant = async () => {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const nameOfReviewer = document.querySelector(".name");
    const reviewOfReviewer = document.querySelector(".review");
    const reviewContainer = document.querySelector(".restaurant-detail__reviews");

    const dataInput = {
        id: url.id,
        name: nameOfReviewer.value,
        review: reviewOfReviewer.value,
    };

    const date = new Date().toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const userReview = `
        <div class="review-card">
            <header class="review-card__header">
                <div class="review-card__info">
                    <p class="review-card__name" >${dataInput.name}</p>
                    <p class="review-card__date">${date}</p>
                </div>
            </header>
            <p class="review-card__content">${dataInput.review}</p>
        </div>
    `;

    const response = await rendererData.PostReviewOfRestaurant(dataInput);

    if (response.error) {
        console.error("Failed to post review:", response.message);
    } else {
        reviewContainer.innerHTML += userReview;
        nameOfReviewer.value = "";
        reviewOfReviewer.value = "";
    }
};

export { favoriteButtonInitiator, PostReviewOfRestaurant };
