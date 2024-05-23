import rendererData from '../../helper/resto-render';
import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../pages-templates/templates-creator';
import favoriteButtonInitiator from '../../utils/initiators-favorite';

const DetailPage = {
    async render() {
        return `
            <section id="detailsView" class="details_view">
                <!-- Tempat untuk menampilkan detail restoran -->
            </section>
            <div id="favoriteButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await rendererData.detailRestaurant(url.id);
        console.log(restaurant); // Log untuk melihat struktur data

        const restaurantContainer = document.querySelector('#detailsView');
        restaurantContainer.innerHTML = createDetailTemplate(restaurant);

        const favoriteButtonContainer = document.querySelector("#favoriteButtonContainer");

        // Pastikan elemen ada sebelum inisialisasi
        if (favoriteButtonContainer) {
            await favoriteButtonInitiator.init({
                favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
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
