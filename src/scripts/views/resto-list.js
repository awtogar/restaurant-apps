// import fetchingRestoData from "../../public/data/fetching-data";
// import { createRestaurantItemTemplate } from "./templates/template-creator";

// const MainPage = {
//     async render() {
//         return `
//     <div class="hero-image">
//       <img src="./images/heros/hero-image_2.jpg" alt="gambarmakan" />
//       <h1 class="hero-text">Restaurant Apps</h1>
//       <p>Temukan berbagai pilihan restoran terbaik di sekitar Anda</p>
//     </div>
  
//     <div class="explorer">
//       <h2>Restaurant Explorer</h2>
//     </div>
//     <div class="explore">
//       <div class="restaurant" id="rumah"> <!-- Tambahkan id="rumah" di sini -->
//         <!-- Your restaurant content goes here -->
//       </div>
//     </div>
//     `;
//     },


// export default class myRestaurantList {
//     constructor(containerId) {
//         this.container = document.getElementById(containerId);
//         this.fetchData();
//     }

//     async fetchData() {
//         try {
//             const response = await fetch('https://restaurant-api.dicoding.dev/list');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             this.data = data;
//             this.render();
//         } catch (error) {
//             console.error('Fetch error:', error.message);
//         }
//     }

//     render() {
//         this.data.restaurants.forEach(restaurant => {
//             const article = document.createElement('article');
//             article.className = 'card-item';
//             article.innerHTML = `
//         <img class="item-cover" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="footage of restaurant at ${restaurant.name}">
//         <div class="item-header">
//           <p class="header-city">${restaurant.city}</p>
//           <div class="header-rating">
//             <i class="ri-star-fill"></i>
//             <p class="rating-number">${restaurant.rating}</p>
//           </div>
//         </div>
//         <h2 class="item-name">${restaurant.name}</h2>
//         <p class="item-description">${restaurant.description}</p>
//         <button class="cta-button-item" data-id="${restaurant.id}">Details</button>
//         `;
//             this.container.appendChild(article);
//         });
        
//         const itemDescription =document.querySelectorAll('.item-description');

//         itemDescription.forEach(item => {
//             let maxLength = 186;
//             if (item.innerText.length > maxLength) {
//                 item.innerText = item.innerText.substring(0, maxLength) + '...';
//             }
//         });

//         this.addEventListeners();
//     }
    

//     addEventListeners() {
//         this.container.querySelectorAll('.cta-button-item').forEach(button => {
//             button.addEventListener('click', event => {
//                 const id = event.target.getAttribute('data-id');
//                 window.location.hash = `#detail/${id}`;
//             });
//         });
//     }

// }

// export async function fetchRestaurantById(id) {
//     try {
//         const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data.restaurant;
//     } catch (error) {
//         console.error('Fetch error:', error.message);
//         throw error;
//     }
// }