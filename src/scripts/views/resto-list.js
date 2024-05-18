import { createItemListTemplate } from '../views/pages-templates/templates-creator';

export default class allRestaurantsList {
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
            const article = createItemListTemplate(restaurant);
            this.container.appendChild(article);
        });
    }
}
