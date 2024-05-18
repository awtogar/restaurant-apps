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

const createDetailTemplate = (restaurant) => `
    <div class="restaurant-detail__image">
        <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="Image of ${restaurant.name}">
    </div>
    <div class="restaurant-detail__info">
        <h1 class="restaurant-detail__name">${restaurant.name}</h1>
        <p class="restaurant-detail__city">${restaurant.city}</p>
        <p class="restaurant-detail__description">${restaurant.description}</p>
        <h2>Menu Makanan</h2>
        <ul class="restaurant-detail__menu">
            ${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}
        </ul>
        <h2>Menu Minuman</h2>
        <ul class="restaurant-detail__menu">
            ${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}
        </ul>
        <h2>Customer Reviews</h2>
        <ul class="restaurant-detail__reviews">
            ${restaurant.customerReviews.map(review => `
                <li>
                    <p><strong>${review.name}</strong></p>
                    <p>${review.review}</p>
                    <p><em>${review.date}</em></p>
                </li>
            `).join('')}
        </ul>
    </div>
`;

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
