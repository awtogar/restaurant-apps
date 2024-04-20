import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import 'remixicon/fonts/remixicon.css';
import myData from '../public/data/DATA.json';

const restaurantItem = (data) => {
    data.restaurants.forEach((restaurant) => {
        const restaurantList = document.querySelector('.restaurant-list');
        restaurantList.innerHTML += `


        <article class="restaurant-item">
          <div class="item-thumbnail">
            <p class="city">${restaurant.city}</p>
            <img class="restaurant-images" src="${restaurant.pictureId}"
              alt="footage of restaurant at ${restaurant.name}]">
          </div>
          <div class="item-header">
            <h2 class="restaurant-name">${restaurant.name}</h2>
            <div class="rating">
              <i class="ri-star-fill"></i>
              <p class="rating-value">${restaurant.rating}</p>
            </div>
          </div>
          <p class="item-description">${restaurant.description}</p>
        </article>
        `;
    });
}

restaurantItem(myData); // Memanggil fungsi dengan data yang diimpor\


document.getElementById('hamburger').addEventListener('click', function () {
    var drawer = document.getElementById('drawer');
    if (drawer.style.display === 'block') {
        drawer.style.display = 'none';
    } else {
        drawer.style.display = 'block';
    }
});
