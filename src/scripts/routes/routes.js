import HomePage from '../views/pages/home-page';
import DetailPage from '../views/pages/detail-page';
import FavoritePage from '../views/pages/favorite-page';


const routes = {
    "/": HomePage,
    "/home": HomePage,
    "/favorite": FavoritePage,
    "/detail/:id": DetailPage,
};

export default routes;
