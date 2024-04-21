import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import 'remixicon/fonts/remixicon.css';
import myData from '../public/data/DATA.json';

const restaurantItem = (data) => {
    data.restaurants.forEach((restaurant) => {
        const restaurantList = document.getElementById('restaurantList');
        restaurantList.innerHTML += `
        <article class="card-item" ${restaurant.id}>
          <img class="item-cover" src="${restaurant.pictureId}" alt="footage of restaurant at ${restaurant.name}]">
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
    });
}
restaurantItem(myData);

const navigationMenu = document.getElementById('nav-menu');
const overFlow = document.body;
navigationMenu.addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
  // ide oveflow belakang akan disable saat active
  // overFlow.style.overflow='hidden';
});

//Tutup sidebar ketika link di-klik
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});
