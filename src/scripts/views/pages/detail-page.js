import rendererData from '../../helper/resto-render';
import UrlParser from '../../routes/url-parser';
import {
    createDetailTemplate,
    createButtonUnLikedRestaurantTemplate,
    createButtonLikedRestaurantTemplate
} from '../pages-templates/templates-creator';
import FavoriteIdb from '../../data/favorite-idb';

const DetailPage = {
    async render() {
        return `
      <section class="restaurant-detail-section" id="restaurantDetailSection">
        <div class="restaurant-detail" id="restaurantDetail"></div>
        <div id="favButtonContainer"></div>
      </section>
    `;
    },

    async afterRender() {
        console.log('afterRender dipanggil');

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;

        try {
            const restaurant = await rendererData.detailRestaurant(id);
            console.log('restaurant:', restaurant);

            const restaurantDetailContainer = document.getElementById('restaurantDetail');
            restaurantDetailContainer.innerHTML = createDetailTemplate(restaurant);

            const favButtonContainer = document.getElementById('favButtonContainer');
            const isFavorited = await FavoriteIdb.getRestaurant(id);

            if (isFavorited) {
                favButtonContainer.innerHTML = createButtonUnLikedRestaurantTemplate();
            } else {
                favButtonContainer.innerHTML = createButtonLikedRestaurantTemplate();
            }

            const favButton = favButtonContainer.querySelector('button');
            favButton.addEventListener('click', async () => {
                if (isFavorited) {
                    await FavoriteIdb.deleteRestaurant(id);
                } else {
                    await FavoriteIdb.putRestaurant(restaurant);
                }
                await this.afterRender();
            });

        } catch (error) {
            console.error('Error fetching restaurant details:', error);
        }

        const skipLinkElem = document.querySelector('.skip-link');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#mainContent').focus();
            console.log('afterRender dipanggil');
        });
    },
};

export default DetailPage;
