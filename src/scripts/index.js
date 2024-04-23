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
const navbar = document.getElementById('nav')
const navMenu = document.getElementById('nav-menu');
const linksMenu = document.getElementById('nav-links-menu');
const links = linksMenu.querySelectorAll('a');

// biar ga bisa scroll saat aktif
navMenu.addEventListener('click', function () {
  linksMenu.classList.toggle('active');
  if (linksMenu.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

// bikin menu close saat diclik link dan aktif in scroll overflow
links.forEach(link => {
  const activateLink = () => {
    linksMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  // saat di clik atau enter akan close menu
  link.addEventListener('click', activateLink);
  link.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      activateLink();
    }
  });
});