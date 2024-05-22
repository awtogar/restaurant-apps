import CONFIG from '../../globals/config';

const createItemListTemplate = (restaurant) => {
    const article = document.createElement('article');
    article.setAttribute('id', `${restaurant.id}`);
    article.className = 'card-item';
    article.innerHTML = `
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
    <button class="cta-button-item">Details</button>
    `;
    const button = article.querySelector('.cta-button-item');
    button.addEventListener('click', () => {
        window.location.hash = `#/detail/${restaurant.id}`;
    });
    return article;
};

const createDetailTemplate = (restaurant) => {
    const {
        name = '',
        city = '',
        description = '',
        pictureId = '',
        menus = { foods: [], drinks: [] },
        customerReviews = []
    } = restaurant;

    return `
        <div class="restaurant-detail__container">
            <div class="restaurant-detail">
                <div class="restaurant-detail__image">
                    <img src="${CONFIG.BASE_IMAGE_URL}/${pictureId}" alt="Image of ${name}">
                </div>
                <div class="restaurant-detail__info">
                    <h1 class="restaurant-detail__name">${name}</h1>
                    <p class="restaurant-detail__city">${city}</p>
                    <p class="restaurant-detail__description">${description}</p>
                    <h2 class="restaurant-detail__menu-title">Foods</h2>
                    <ul class="restaurant-detail__menu">
                        ${menus.foods.map(food => `<li>${food.name}</li>`).join('')}
                    </ul>
                    <h2 class="restaurant-detail__menu-title">Drinks</h2>
                    <ul class="restaurant-detail__menu">
                        ${menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
                    </ul>

                    <form id="reviewForm" class="review-form">
                        <h2 class="restaurant-detail__review-title">Share Your Thoughts</h2>
                        <div class="form-group">
                            <input name="name" type="text" placeholder="Name" required="">
                        </div>
                        <div class="form-group">
                            <input name="review" type="text" placeholder="Review" required="">
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                    <h2 class="restaurant-detail__review-title">What People Say</h2>
                    <div class="restaurant-detail__reviews">
                        ${customerReviews.map(review => `
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
    `;
};



const createButtonUnLikedRestaurantTemplate = () => `
    <button id="unlikeButton" aria-label="unlike this restaurant">
        <i class="fa fa-heart"></i> Unlike
    </button>
`;

const createButtonLikedRestaurantTemplate = () => `
    <button id="likeButton" aria-label="like this restaurant">
        <i class="fa fa-heart-o"></i> Like
    </button>
`;

export { createItemListTemplate, createDetailTemplate, createButtonUnLikedRestaurantTemplate, createButtonLikedRestaurantTemplate };
