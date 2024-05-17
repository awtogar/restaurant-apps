import fetchingRestoData from '../../helper/fetching-helper';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import urlParser from '../../routes/url-parser';

const detailPage = {
    async render() {
        return `
            <div id="restaurant__detail" class="restaurant-detail"></div>
        `;
    },

    async afterRender() {
        const url = urlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await fetchingRestoData.detailRestaurant(url.id);
        const restaurantContainer = document.getElementById('#restaurant__detail');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    }
};

export default detailPage;
