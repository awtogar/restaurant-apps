import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => {
    const article = document.createElement('article');
    article.className = 'card-item';
    article.innerHTML = `
    <img class="item-cover" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="footage of restaurant at ${restaurant.name}">
    <div class="item-header">
      <p class="header-city">${restaurant.city}</p>
      <div class="header-rating">
        <i class="ri-star-fill"></i>
        <p class="rating-number">${restaurant.rating}</p>
      </div>
    </div>
    <h2 class="item-name">${restaurant.name}</h2>
    <p class="item-description">${restaurant.description}</p>
    <button class="cta-button-item" data-id="${restaurant.id}">Details</button>
  `;
    return article;
};

const createRestaurantDetailTemplate = (restaurant) => `
<section class="restaurant-detail">
  <div id="favButtonContainer">
    <button type="button" class="favorite-button" id="isFavorited" aria-label="add to your favorite"></button>
  </div>
  <div>
    <img class="detail-cover" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="footage of restaurant at ${restaurant.name}">
    <div class="detail-header">
      <p class="detail-city">${restaurant.city}</p>
      <div class="detail-header-rating">
        <i class="ri-star-fill"></i>
        <p class="rating-number">${restaurant.rating}</p>
      </div>
    </div>
    <h2 class="detail-name">${restaurant.name}</h2>
    <p class="detail-description">${restaurant.description}</p>
  </div>
  <div class="reviewContainer">
    <h2>Custommer Reviews</h2>
    <form id="review-form">
      <input name="name" type="text" placeholder="Name" required>
      <input name="review" type="text" placeholder="Review" required>
      <button type="submit">Submit</button>
    </form>
    <div class="review-list">
      ${restaurant.customerReviews.map((review) => `
        <div class="detail__review-item">
          <img src="https://cdn.statically.io/avatar/shape=circle/Gilang" alt="Gilang">
          <div class="detail__review-item-content">
            <p id="name">${review.name}</p>
            <small>${review.date}</small>
            <p>${review.review}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
