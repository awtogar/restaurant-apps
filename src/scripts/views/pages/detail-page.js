import rendererData from '../../helper/data-render';
import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../pages-templates/templates-creator';
import { favoriteButtonPresenter, PostReviewOfRestaurant } from '../../utils/initiators-presenter';
import FavoriteIdb from '../../data/favorited-IDB';

const DetailPage = {
    async render() {
        return `
            <div id="favoriteButtonContainer"></div>
            <section id="detailsView" class="details_view">
                <!-- Here's the details -->
            </section>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await rendererData.detailRestaurant(url.id);

        const restaurantContainer = document.querySelector('#detailsView');
        restaurantContainer.innerHTML = createDetailTemplate(restaurant);

        const submitUserReview = document.getElementById("SubmitYourReview");

        submitUserReview.addEventListener("click", (event) => {
            event.preventDefault();
            PostReviewOfRestaurant();
        });

        await favoriteButtonPresenter.init({
            favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
            favoriteRestaurants: FavoriteIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                pictureId: restaurant.pictureId,
                city: restaurant.city,
                rating: restaurant.rating,
            },
        });
    },
};

export default DetailPage;
