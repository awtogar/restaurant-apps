


const DrawerInitiator = {
    init({ navMenuId, linksMenuId }) {
        const navMenu = document.getElementById(navMenuId);
        const linksMenu = document.getElementById(linksMenuId);
        const links = linksMenu.querySelectorAll('a');

        navMenu.addEventListener('click', () => this._toggleDrawer(linksMenu));
        links.forEach(link => {
            link.addEventListener('click', () => this._closeDrawer(linksMenu));
            link.addEventListener('keypress', event => {
                if (event.key === 'Enter') {
                    this._closeDrawer(linksMenu);
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this._closeDrawer(linksMenu);
            }
        });
    },

    _toggleDrawer(drawer) {
        drawer.classList.toggle('active');
        document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : 'auto';
    },

    _closeDrawer(drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = 'auto';
    },
};

export default DrawerInitiator;
