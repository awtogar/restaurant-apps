import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import 'remixicon/fonts/remixicon.css';
import myRestaurantList from './views/listOfRestaurants';

document.addEventListener('DOMContentLoaded', () => {
  new myRestaurantList('restaurantList');
});

