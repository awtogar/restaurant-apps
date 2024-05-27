import DrawerInitiator from '../utils/initiator-drawer';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
        this._initScrollEvent();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
            navMenuId: 'nav-menu',
            linksMenuId: 'nav-links-menu',
            body: document.body
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
        //skip to content
        const skipLinkElem = document.querySelector('.skipToContent');
        skipLinkElem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#mainContent').focus();
        });
    }

    _initScrollEvent() {
        const navBar = document.querySelector('.nav');
        const menuIcon = document.querySelector('.ri-menu-4-line');
        const logo = document.querySelector('.logo');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY;
            if (scrollTop > lastScrollTop) {
                navBar.style.top = '-100px';
                logo.style.fill = 'var(--color_1)';
                menuIcon.style.color = 'var(--color_1)';
            } else {
                navBar.style.top = '0px';
                logo.style.fill = 'var(--color_2)';
                menuIcon.style.color = 'var(--color_2)';
            }
            lastScrollTop = scrollTop;
        });
    }
}

export default App;
