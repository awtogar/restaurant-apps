
import detailPage from '../views/pages/detail-page';
import favoritePage from '../views/pages/favorite-page'
import homePage from '../views/pages/home-page';


const routes = {
    '/': homePage,
    '/favorite': favoritePage,
    '/detail/:id': detailPage
};

export default routes;
