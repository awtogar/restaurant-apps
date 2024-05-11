import favoritePage from '../views/pages/favorite-page';
import detailPage from '../views/pages/detail-page';

const routes = {
    '/favorite': favoritePage,
    '/detail/:id': detailPage
};

export default routes;
