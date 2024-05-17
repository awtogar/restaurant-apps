import { createRestaurantItemTemplate } from '../templates/template-creator';
import IndexedFavorite from '../../helper/favorite-helper';

const Favorite = {
    async render() {
        return `
            <section class="restaurant-favorite-list">
                <h1>Your favorite restaurant</h1>
                    <div class="favorite-container" id="favoriteList">
                        <div class="favorite-item">
                            <i class="ri-error-warning-line"  alt="No Match Found"></i>
                            <p>you havent favorited restaurant yet</p>
                        </div>
                    </div>
            </section>
            `;
    },

    async afterRender() {
        const restaurants = await IndexedFavorite.getAllRestaurant();
        const restaurantContainer = document.getElementById("explore-restaurant-list");
        const empty = document.querySelector(".restaurant-item__not__found");
        if (restaurants.length === 0) {
            empty.innerHTML = `
      <h2>Tidak ada favorite restaurant yang ditampilkan</h2>
      `;
        }

        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });

        const skipLinkElem = document.querySelector(".skip-link");
        skipLinkElem.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("#mainContent").focus();
        });
    },
};

export default Favorite;
