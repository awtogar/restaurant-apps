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
        <article class="card-item">
            <img class="item-cover" src="${restaurant.pictureId}" alt="footage of restaurant at ${restaurant.name}">
            <div class="item-header">
              <p class="header-city">${restaurant.city}</p>
              <div class="header-rating">
                <i class="ri-star-fill"></i>
                <p class="rating-number">${restaurant.rating}</p>
              </div>
            </div>
            <h2 class="item-name">${restaurant.name}</h2>
            <p class="item-description">${restaurant.description}</p>
          </article>
        `;
    });
}
restaurantItem(myData);


const body = document.body;
const navMenu = document.getElementById('nav-menu');
const linksMenu = document.getElementById('nav-links-menu');
const links = linksMenu.querySelectorAll('a');

navMenu.addEventListener('click', function () {
  linksMenu.classList.toggle('active');
  if (linksMenu.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    linksMenu.classList.remove('active');
    body.style.overflow = 'auto';
  });
});

