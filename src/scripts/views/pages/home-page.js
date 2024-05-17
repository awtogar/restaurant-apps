import restaurantsData from '../../helper/fetching-helper';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const homePage = {
    async render() {
        return `
        <section class="hero" id="home" aria-labelledby="hero-title">
          <figure class="hero-content">
            <h1 id="hero-title">Welcome <span>Happs!</span></h1>
            <p>We Made Not Born</p>
            <a href="#restaurantList" class="cta-button" role="button" aria-label="find your culinary experience">Find Yours! <i class="ri-map-pin-2-fill"></i></a>
          </figure>
        </section>
        <section class="restaurant-section" id="restaurantSection">
          <div class="restaurant-list" id="restaurantList">
          </div>
        </section>`;
    },

    async afterRender() {
      const listRestaurantItem = await restaurantsData.getRestaurants();
        const restaurantlistWrapper = document.getElementById('restaurantList');
        restaurantlistWrapper.innerHTML = '';

        // Memastikan bahwa listRestaurantItem adalah array sebelum melakukan iterasi
        if (Array.isArray(listRestaurantItem)) {
            listRestaurantItem.forEach((restaurant) => {
                restaurantlistWrapper.innerHTML += createRestaurantItemTemplate(restaurant);
            });
        } else {
            console.error('Error: listRestaurantItem is not an array.');
        }
    },
};

export default homePage;
