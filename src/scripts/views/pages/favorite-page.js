import { getAllFavorites } from '.../globals/database';

export default class FavoritePage {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
    }

    async render() {
        const favorites = await getAllFavorites();
        this.container.innerHTML = '';
        favorites.forEach(restaurant => {
            const article = document.createElement('article');
            article.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p>${restaurant.description}</p>
      `;
            this.container.appendChild(article);
        });
    }
}
