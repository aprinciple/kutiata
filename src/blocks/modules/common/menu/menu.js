const menu = document.querySelector('.menu');
if (menu && window.matchMedia("(max-width: 991px)").matches) {
  let menuButton = menu.querySelector('.menu__button');
  let menuList = menu.querySelector('.menu__list');

  menuButton.addEventListener('click', (e) => {
    let isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menuButton.classList.toggle('menu__button--open');
    menuList.classList.toggle('menu__list--open');
    document.documentElement.classList.toggle('stop-scrolling');
    document.body.classList.toggle('stop-scrolling');
  });
}