import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
import 'remixicon/fonts/remixicon.css';
import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  new App();

  // drawer on scroll
  let lastScrollTop = 0;
  const navbar = document.querySelector('.nav');
  const menuIcon = document.querySelector('.ri-menu-4-line');
  const logo = document.querySelector('.logo');

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-100px";
      logo.style.fill = 'var(--color_1)';
      menuIcon.style.color = 'var(--color_1)';
    } else {
      navbar.style.top = "0px";
      logo.style.fill = 'var(--color_2)';
      menuIcon.style.color = 'var(--color_2)';
    }
    lastScrollTop = scrollTop;
  });
});
