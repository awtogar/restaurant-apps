const DrawerInitiator = {
    init({ button, drawer, content, navMenuId, linksMenuId, body }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });

        this.navMenu = document.getElementById(navMenuId);
        this.linksMenu = document.getElementById(linksMenuId);
        this.links = this.linksMenu.querySelectorAll('a');
        this.body = body;
        this.addEventListeners();
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
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
