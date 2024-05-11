import MyRestaurantList from './resto-list.js';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor() {
        this._initialAppShell();
        this._initListeners();
        this.restaurantList = new MyRestaurantList('restaurantList');
        this.renderPage(); 
    }

    _initialAppShell() {
        DrawerInitiator.init({
            navMenuId: 'nav-menu',
            linksMenuId: 'nav-links-menu'
        });
    }

    _initListeners() {
        window.addEventListener('hashchange', () => this.renderPage());
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        if (page) {
            this._content = document.querySelector('#main-content');
            this._content.innerHTML = await page.render();
            await page.afterRender();
        }
    }
}

export default App;
