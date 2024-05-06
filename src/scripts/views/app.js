import myRestaurantList from './resto-list.js';
import Drawer from '../utils/drawer-initiator';


class App {
    constructor() {
        this._initialAppShell();
    }

    _initialAppShell() {
        this.myRestaurantList = new myRestaurantList('restaurantList');
        this.drawer = new Drawer('nav-menu', 'nav-links-menu');
    }
    
}

export default App;
