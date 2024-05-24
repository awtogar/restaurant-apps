import CONFIG from '../../globals/config';

const createItemListTemplate = (restaurant) => `
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
        <a class="cta-button-item" href="/#/detail/${restaurant.id}">Details</a>
    </article>
`;

const createDetailTemplate = (restaurant) => `
    <section class="restaurant-detail__container">
        <div class="restaurant-detail">
            <div class="restaurant-detail__card">
                <header class="restaurant-detail__header">
                    <div class="detail-header__info">
                        <div class="restaurant-detail__city">
                            <i class="ri-pushpin-fill"></i>
                            <h1>${restaurant.city}</h1>
                        </div>
                        <div class="restaurant-detail__rating">
                            <h1>${restaurant.rating}</h1>
                            <i class="ri-star-fill"></i>
                        </div>
                    </div>
                    <img class="restaurant-detail__image" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="Image of ${restaurant.name}">
                </header>
                <div class="restaurant-detail__info">
                    <h1 class="restaurant-detail__name">${restaurant.name}</h1>
                    <p class="restaurant-detail__address"><i class="ri-map-pin-line"></i> ${restaurant.address}</p>
                    <p class="restaurant-detail__description">${restaurant.description}</p>
                    <h2 class="restaurant-detail__menu-title">Foods</h2>
                    <ul class="restaurant-detail__menu">
                        ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
                    </ul>
                    <h2 class="restaurant-detail__menu-title">Drinks</h2>
                    <ul class="restaurant-detail__menu">
                        ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
                    </ul>
                    <section id="formSection" class="restaurant-detail__form-section">
                        <form id="reviewInputForm" class="restaurant-detail__review-input">
                            <h2 class="restaurant-detail__review-title">Share Your Thoughts</h2>
                            <div class="form-group">
                                <input class="name" name="name" type="text" autocomplete="off" placeholder="Name" required>
                            </div>
                            <div class="form-group">
                                <input class="review" name="review" type="text" autocomplete="off" placeholder="Review" required>
                            </div>
                            <button id="SubmitYourReview" class="submit-button" type="submit">Submit</button>
                        </form>
                    </section>
                    <h2 class="restaurant-detail__review-title">What People Say</h2>
                    <div class="restaurant-detail__reviews">
                        ${restaurant.customerReviews.map(review => `
                            <div class="review-card">
                                <header class="review-card__header">
                                    <img src="https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(review.name)}&fontSize=50" alt="${review.name}">
                                    <div class="review-card__info">
                                        <p class="review-card__name">${review.name}</p>
                                        <p class="review-card__date">${review.date}</p>
                                    </div>
                                </header>
                                <p class="review-card__content">${review.review}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const createButtonUnFavoritedRestaurantTemplate = () => `
    <button class="unfavorite-button" id="unFavoriteButton" aria-label="unfavorite this restaurant">
        <i class="ri-heart-2-fill"></i>
    </button>
`;

const createButtonFavoritedRestaurantTemplate = () => `
    <button class="favorite-button" id="favoriteButton" aria-label="favorite this restaurant">
        <i class="ri-heart-2-line"></i>
    </button>
`;

export {
    createItemListTemplate,
    createDetailTemplate,
    createButtonFavoritedRestaurantTemplate,
    createButtonUnFavoritedRestaurantTemplate
};
