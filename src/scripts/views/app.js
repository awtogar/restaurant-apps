import MyRestaurantList from './resto-list.js';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
    constructor() {
        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            navMenuId: 'nav-menu',
            linksMenuId: 'nav-links-menu'
        });

        this.restaurantList = new MyRestaurantList('restaurantList'); 
    }
}

export default App;
