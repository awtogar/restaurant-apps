import RestaurantList from '../views/restaurantList';
import Drawer from '../utils/drawer-initiator';
import myData from '../../public/data/DATA.json';

class App {
    constructor() {
        this._initialAppShell();
    }

    _initialAppShell() {
        // Inisialisasi komponen-komponen AppShell
        this.restaurantList = new RestaurantList('restaurantList', myData);
        this.drawer = new Drawer('nav-menu', 'nav-links-menu');
        // Kamu bisa menambahkan komponen lain jika perlu
    }
}

export default App;
