export default class RestaurantDetail {
    constructor(containerId, restaurant) {
        this.container = document.getElementById(containerId);
        this.restaurant = restaurant;
        this.render();
    }

    render() {
        const { name, pictureId, city, rating, description, menus, customerReviews } = this.restaurant;
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
                        <ul>
                            ${menus.foods.map(food => `<li>${food.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4>Drinks</h4>
                        <ul>
                            ${menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
                        </ul>
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
            </div>
        `;
    }
}
