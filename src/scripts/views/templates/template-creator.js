
const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__detail">
        <h2 class="restaurant__name">${restaurant.name}</h2>
        <img class="restaurant__image" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="restaurant__info">
            <p class="restaurant__address"><strong>Address:</strong> ${restaurant.address}</p>
            <p class="restaurant__city"><strong>City:</strong> ${restaurant.city}</p>
            <p class="restaurant__description"><strong>Description:</strong> ${restaurant.description}</p>
        </div>
        <div class="restaurant__menu">
            <h3>Menu</h3>
            <div class="menu__foods">
                <h4>Foods</h4>
                <ul>
                    ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
                </ul>
            </div>
            <div class="menu__drinks">
                <h4>Drinks</h4>
                <ul>
                    ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="restaurant__reviews">
            <h3>Customer Reviews</h3>
            ${restaurant.customerReviews.map(review => `
                <div class="review">
                    <p class="review__author"><strong>${review.name}:</strong> ${review.review}</p>
                    <p class="review__date"><em>${review.date}</em></p>
                </div>
            `).join('')}
        </div>
    </div>
`;

export  { createRestaurantDetailTemplate };


const createRestaurantFavoriteTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-header">
            <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" />
            <h2>${restaurant.name}</h2>
        </div>
        <div class="restaurant-info">
            <p>${restaurant.city} - Rating: ${restaurant.rating}</p>
            <a href="#/detail/${restaurant.id}" class="details-link">View Details</a>
        </div>
    </div>
`;

export { createRestaurantFavoriteTemplate };
