import rendererData from "../../helper/resto-render";
import UrlParser from "../../routes/url-parser";
import { createDetailTemplate } from "../pages-templates/templates-creator";


const DetailPage = {
    async render() {
        return `
        <section class="container" id="resto-detailPage">
        <div id="favButtonContainer">
        <button type="button" class="favorite-dark-button" id="notFavoriteButton" aria-label="like this restaurant">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
        </button>
    </div>
    <div class="detail__image">
        <img src="" alt="" class="detail__image">
        <div class="detail__image-overlay">
            <p></p>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <p></p>
            <svg class="card-item__rating-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        </div>
    </div>
    <div class="detail__info">
        <h1></h1>
        <p id="address">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span></span>
        </p>
        <p id="desc"></p>
    </div>
    <div class="detail__flex">
        <div class="detail__menu">
            <h2></h2>
            <div class="detail__menu-list">
                <ul class="minuman">
                    <li>Minuman</li>
                </ul>
                <ul class="makanan">
                    <li>Makanan</li>
                </ul>
            </div>
        </div>
        <div class="detail__review">
            <h2></h2>
            <form id="reviewForm">
                <p></p>
                <input name="name" type="text" placeholder="Name" required="">
                <input name="review" type="text" placeholder="Review" required="">
                <button type="submit"></button>
            </form>
            <div class="detail__review-list"></div>
        </div>
    </div>
</section>


        //TODO:: NTAR DIFFIX. INI MASIH RAW PLEKK KETIPLEK
        
        `;
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await rendererData.detailRestauran(url.id);
        const restaurantContainer = document.getElementById('resto-detailPage');
        restaurantContainer.innerHTML = createDetailTemplate(restaurant);

        // favorite
        // LikeButtonInit.init({
        //     likeButtonContainer: document.querySelector("#likeButtonContainer"),
        //     restaurant: {
        //         id: restaurant.id,
        //         name: restaurant.name,
        //         description: restaurant.description,
        //         pictureId: restaurant.pictureId,
        //         city: restaurant.city,
        //         rating: restaurant.rating,
        //     },
        // });

        // post review
        // const submitReview = document.getElementById("submit-review");
        // submitReview.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     PostReview();
        // });

        const skipLinkElem = document.querySelector(".skip-link");
        skipLinkElem.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("#mainContent").focus();
        });
    },
};

export default DetailPage;
