import rendererData from "../../helper/resto-render";
import { createItemListTemplate } from "../pages-templates/templates-creator";

const HomePage = {
  async render() {
    return `
    <section class="hero" id="home" aria-labelledby="hero-title">
      <figure class="hero-content">
        <h1 id="hero-title">Welcome <span>Happs!</span></h1>
        <p>We Made Not Born</p>
        <a href="#restaurantSection" class="cta-button" role="button" aria-label="find your culinary experience">Find Yours! <i class="ri-map-pin-2-fill">
        </i></a>
      </figure>
    </section>
    <section class="list-header">
      <h1>Our Restaurant</h1>
    </section>
    <section class="restaurant-section" id="restaurantSection">
      <div class="restaurant-list" id="restaurantList">
      </div>
    </section>
    `;
  },

  async afterRender() {
    const listRestaurant = await rendererData.getRestaurants();
    const restaurantContainer = document.getElementById("restaurantList");
    restaurantContainer.innerHTML = "";

    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemListTemplate(restaurant);
    });
  },
};

export default HomePage;