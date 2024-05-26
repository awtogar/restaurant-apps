// index.js
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import '../styles/templates.css';
import 'remixicon/fonts/remixicon.css';
import App from './views/app';
import swRegister from './utils/sw-register.js';

const navBarMenu = document.querySelector('#nav-menu');
const navBarMenuLinks = document.querySelector('#nav-links-menu');
const contentContainer = document.querySelector('#mainContent');

const app = new App({
  button: navBarMenu,
  drawer: navBarMenuLinks,
  content: contentContainer,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
