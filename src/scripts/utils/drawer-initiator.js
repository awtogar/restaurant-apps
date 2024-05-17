const DrawerInitiator = {
    init({ button, drawer, content }) {
        this.body = document.body;
        this.button = button;
        this.drawer = drawer;
        this.content = content;
        
        this.links = this.drawer.querySelectorAll('a');
        this.addEventListeners();
    },

    toggleDrawer() {
        this.drawer.classList.toggle('active');
        this.body.style.overflow = this.drawer.classList.contains('active') ? 'hidden' : 'auto';
    },

    closeDrawer() {
        this.drawer.classList.remove('active');
        this.body.style.overflow = 'auto';
    },

    addEventListeners() {
        this.button.addEventListener('click', () => this.toggleDrawer());
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeDrawer());
            link.addEventListener('keypress', event => {
                if (event.key === 'Enter') {
                    this.closeDrawer();
                }
            });
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeDrawer();
            }
        });
    }
};

export default DrawerInitiator;
