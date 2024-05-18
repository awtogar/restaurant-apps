import CONFIG from '../../globals/config'

const createItemListTemplate = (restaurant) => {
    const article = document.createElement('article');
    article.setAttribute('id', `${restaurant.id}`);
    article.className = 'card-item';
    article.innerHTML = `
        <img class="item-cover" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="footage of restaurant at ${restaurant.name}">
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
    return article;
};

const createDetailTemplate = (restaurant) => `
    <div class="restaurant-detail">
        <h2 class="restaurant-title">${restaurant.name}</h2>
        <div class="restaurant-info">
            <img class="restaurant-img" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" /> 
            <div class="restaurant-description">
                <ul class="detail-info">
                    <li class="rest-name">
                        <p class="label-one" id="name">${restaurant.name}</p>
                    </li>
                    <li class="rest-address">
                        <p class="label-one" id="address">${restaurant.address}, ${restaurant.city}</p>
                    </li>
                    <li class="rest-rating">
                        <p class="label-one" id="rating">⭐${restaurant.rating}</p>
                    </li>
                    <li class="rest-description">
                        <p class="label-one">${restaurant.description}</p>
                    </li>
                </ul>
            </div>
            <div tabindex="0" class="detail-menu">
                <div class="detail-food">
                    <h4>Food</h4>
                    <table>
                        <tr>
                            <th>Food Item</th>
                        </tr>
                        ${restaurant.menus.foods
        .map(
            (food) => `
                                    <tr>
                                        <td>${food.name}</td>
                                    </tr>
                                `
        )
        .join("")}
                    </table>
                </div>
                <div class="detail-drink">
                    <h4>Drink</h4>
                    <table>
                        <tr>
                            <th>Drink Item</th>
                        </tr>
                        ${restaurant.menus.drinks
        .map(
            (drink) => `
                                    <tr>
                                        <td>${drink.name}</td>
                                    </tr>
                                `
        )
        .join("")}
                    </table>
                </div>
            </div>
            <div class="container-review">
                <h3 tabindex="0" class="title-review">Reviews</h3>
                <div tabindex="0" class="detail-review">
                    <table>
                        <tr>
                            <th>User</th>
                            <th>Date</th>
                            <th>Review</th>
                        </tr>
                        ${restaurant.customerReviews
        .map(
            (review) => `
                                    <tr>
                                        <td>${review.name}</td>
                                        <td>${review.date}</td>
                                        <td>${review.review}</td>
                                    </tr>
                                `
        )
        .join("")}
                    </table>
                </div>
            </div>
        </div>
    </div>`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export { createItemListTemplate, createDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };
