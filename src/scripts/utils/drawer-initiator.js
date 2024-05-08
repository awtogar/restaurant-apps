const DrawerInitiator = {
    init({ navMenuId, linksMenuId }) {
        this.body = document.body;
        this.navMenu = document.getElementById(navMenuId);
        this.linksMenu = document.getElementById(linksMenuId);
        this.links = this.linksMenu.querySelectorAll('a');
        this.addEventListeners();
    },

    toggleDrawer() {
        this.linksMenu.classList.toggle('active');
        this.body.style.overflow = this.linksMenu.classList.contains('active') ? 'hidden' : 'auto';
    },

    closeDrawer() {
        this.linksMenu.classList.remove('active');
        this.body.style.overflow = 'auto';
    },

    addEventListeners() {
        this.navMenu.addEventListener('click', () => this.toggleDrawer());
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
