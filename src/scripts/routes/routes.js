import HomePage from '../views/pages/home-page';
// import FavoritePage from '../views/pages/favorite-pages';
import DetailPage from '../views/pages/detail-pages';


const routes = {
    "/": HomePage,
    "/home": HomePage,
    // "/favorite": HomePage,
    "/detail/:id": DetailPage,
};

export default routes;
