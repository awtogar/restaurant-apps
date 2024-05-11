import { fetchRestaurantById } from '../resto-list.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const detailPage = {
    async render() {
        return `
            <div id="restaurant__detail" class="restaurant-detail"></div>
        `;
    },

    async afterRender() {
        const url = window.location.hash.toLowerCase();
        const id = url.split('/')[2];

        const detailContainer = document.getElementById('restaurant__detail');
        try {
            const restaurant = await fetchRestaurantById(id);
            detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        } catch (error) {
            detailContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    },
};

export default detailPage;
