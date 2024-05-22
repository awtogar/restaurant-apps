import rendererData from '../../helper/resto-render';
import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../pages-templates/templates-creator';


const DetailPage = {
    async render() {
        return `
      <section id="detailsView" class="details_view"></section>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await rendererData.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#detailsView');
        restaurantContainer.innerHTML = createDetailTemplate(restaurant);
        console.log(restaurant);
    },
};

export default DetailPage;