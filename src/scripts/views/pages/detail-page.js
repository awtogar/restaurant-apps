import rendererData from '../../helper/data-render';
import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../pages-templates/templates-creator';
import { favoriteButtonInitiator, PostReviewOfRestaurant } from '../../utils/initiators-helper';

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
        console.log(restaurant);

        const restaurantContainer = document.querySelector('#detailsView');
        restaurantContainer.innerHTML = createDetailTemplate(restaurant);
        const favoriteButtonContainer = document.querySelector("#favoriteButtonContainer");
        const submitUserReview = document.getElementById("SubmitYourReview");

        submitUserReview.addEventListener("click", (event) => {
            event.preventDefault();
            PostReviewOfRestaurant();
        });

        if (favoriteButtonContainer) {
            await favoriteButtonInitiator.init({
                favoriteButtonContainer,
                restaurant: {
                    id: restaurant.id,
                    name: restaurant.name,
                    description: restaurant.description,
                    pictureId: restaurant.pictureId,
                    city: restaurant.city,
                    rating: restaurant.rating,
                },
            });
        } else {
            console.error("favoriteButtonContainer element not found");
        }
    },
};

export default DetailPage;
