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
    <section class="restaurant-section" id="restaurantSection">
      <div class="restaurant-list" id="restaurantList">
      </div>
    </section>
    `;
  },

  // FIXME: HERO UDAH MUNCU SAAT URL MELOAD / TTETAPI RESTTAURANT LIST BELUM ADA
  async afterRender() {
    console.log("afterRender dipanggil");

    try {
      const listRestaurant = await rendererData.getRestaurants();
      console.log("listRestaurant:", listRestaurant);

      const restaurantContainer = document.getElementById("restaurantList");
      console.log("restaurantContainer:", restaurantContainer);

      restaurantContainer.innerHTML = "";
      if (Array.isArray(listRestaurant.restaurants)) {
        listRestaurant.restaurants.forEach((restaurant) => {
          const restaurantElement = createItemListTemplate(restaurant);
          restaurantContainer.appendChild(restaurantElement); 
        });
      } else {
        console.error("listRestaurant.restaurants is not an array");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  },
};

export default HomePage;