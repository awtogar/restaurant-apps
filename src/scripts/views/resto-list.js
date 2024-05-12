import RestaurantDetail from "./pages/detail-page";
export default class myRestaurantList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch('https://restaurant-api.dicoding.dev/list');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.data = data;
            this.render();
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    }

    render() {
        this.data.restaurants.forEach(restaurant => {
            const article = document.createElement('article');
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

            this.container.appendChild(article);

            article.querySelector('.cta-button-item').addEventListener('click', () => {
                document.getElementById('mainContainer').innerHTML = '';
                new RestaurantDetail('mainContainer', restaurant);
            });
        });
    }
}
