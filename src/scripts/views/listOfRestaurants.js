export default class myRestaurantList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.fetchData();
    }

    async fetchData() {
        const response = await fetch('https://restaurant-api.dicoding.dev/list');
        const data = await response.json();
        this.data = data;
        // TODO: disable this console log later
        console.log('Data terpanggil EAEAEA:', data);
        this.render();
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
            `;
            this.container.appendChild(article);
        });
    }
}
