import { saveFavorite, deleteFavorite, isFavorite } from '../../globals/database';


export default class RestaurantDetail {
    constructor(containerId, restaurant) {
        this.container = document.getElementById(containerId);
        this.restaurant = restaurant;
        this.init();
    }

    async init() {
        try {
            await this.render();
            this.setupFavoriteButton();
        } catch (error) {
            console.error("Error initializing the restaurant detail page:", error);
            this.container.innerHTML = `<p>Error loading the restaurant details.</p>`;
        }
    }

    async render() {
        try {
            const { name, pictureId, city, rating, description, menus, customerReviews } = this.restaurant;
            const isFav = await isFavorite(this.restaurant.id);
            const favButtonText = isFav ? 'Unfavorite' : 'Favorite';

            this.container.innerHTML = `
                <div class="restaurant-detail">
                    <h1>${name}</h1>
                    <img src="https://restaurant-api.dicoding.dev/images/large/${pictureId}" alt="${name}">
                    <p>${city} - Rating: ${rating}</p>
                    <p>${description}</p>
                    <h3>Menus</h3>
                    <div class="menus">
                        <div>
                            <h4>Foods</h4>
                            <ul>${menus.foods.map(food => `<li>${food.name}</li>`).join('')}</ul>
                        </div>
                        <div>
                            <h4>Drinks</h4>
                            <ul>${menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}</ul>
                        </div>
                    </div>
                    <h3>Customer Reviews</h3>
                    <div class="reviews">
                        ${customerReviews.map(review => `
                            <div class="review">
                                <p><b>${review.name}</b>: ${review.review}</p>
                                <p>Date: ${review.date}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button id="favButton">${favButtonText}</button>
                </div>
            `;
        } catch (error) {
            console.error("Error rendering the restaurant details:", error);
            this.container.innerHTML = `<p>Error rendering the restaurant details.</p>`;
        }
    }

    setupFavoriteButton() {
        const favButton = document.getElementById('favButton');
        favButton.addEventListener('click', async () => {
            try {
                const favExists = await isFavorite(this.restaurant.id);
                if (favExists) {
                    await deleteFavorite(this.restaurant.id);
                    favButton.textContent = 'Favorite';
                } else {
                    await saveFavorite(this.restaurant);
                    favButton.textContent = 'Unfavorite';
                }
            } catch (error) {
                console.error("Error updating favorite status:", error);
            }
        });
    }
}
