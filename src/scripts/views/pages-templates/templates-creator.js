import CONFIG from '../../globals/config';

const createItemListTemplate = (restaurant) =>`
    <article id="${restaurant.id}" class="card-item">
    <img class="item-cover" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="Image of restaurant ${restaurant.name}">
    <div class="item-header">
        <p class="header-city">${restaurant.city}</p>
        <div class="header-rating">
            <i class="ri-star-fill"></i>
            <p class="rating-number">${restaurant.rating}</p>
        </div>
    </div>
    <h2 class="item-name">${restaurant.name}</h2>
    <p class="item-description">${restaurant.description}</p>
    <a class="cta-button-item" href="${`/#/detail/${restaurant.id}`}">Details</a>
    `;;

const createDetailTemplate = (restaurant) => `
    <div class="restaurant-detail__container">
        <div class="restaurant-detail">
            <div class="restaurant-detail__card">
                <div class="restaurant-detail__header">
                    <div class="restaurant-detail__rating">
                        <h1>${restaurant.rating}</h1>
                        <i class="ri-star-fill"></i>
                    </div>
                    <img class="restaurant-detail__image" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="Image of ${restaurant.name}">
                </div>
                <div class="restaurant-detail__info">
                    <h1 class="restaurant-detail__name">${restaurant.name}</h1>
                    <p class="restaurant-detail__city">${restaurant.city}</p>
                    <p class="restaurant-detail__description">${restaurant.description}</p>
                    <h2 class="restaurant-detail__menu-title">Foods</h2>
                    <ul class="restaurant-detail__menu">
                        ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
                    </ul>
                    <h2 class="restaurant-detail__menu-title">Drinks</h2>
                    <ul class="restaurant-detail__menu">
                        ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
                    </ul>

                    <form id="reviewForm" class="restaurant-detail__review-form">
                        <h2 class="restaurant-detail__review-title">Share Your Thoughts</h2>
                        <div class="form-group">
                            <input name="name" type="text" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <input name="review" type="text" placeholder="Review" required>
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                    <h2 class="restaurant-detail__review-title">What People Say</h2>
                    <div class="restaurant-detail__reviews">
                        ${restaurant.customerReviews.map(review => `
                            <div class="review-card">
                                <div class="review-card__header">
                                    <img src="https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(review.name)}&fontSize=50" alt="${review.name}">
                                    <div class="review-card__info">
                                        <p class="review-card__name">${review.name}</p>
                                        <p class="review-card__date">${review.date}</p>
                                    </div>
                                </div>
                                <p class="review-card__content">${review.review}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const createButtonUnFavoritedRestaurantTemplate = () => `
    <button id="unfavoriteButton" aria-label="unlike this restaurant">
        <i class="ri-heart-2-fill"></i>
    </button>
`;

const createButtonFavoritedRestaurantTemplate = () => `
    <button id="favoriteButton" aria-label="like this restaurant">
        <i class="ri-heart-2-line"></i>
    </button>
`;

export { createItemListTemplate, createDetailTemplate, createButtonFavoritedRestaurantTemplate, createButtonUnFavoritedRestaurantTemplate };
