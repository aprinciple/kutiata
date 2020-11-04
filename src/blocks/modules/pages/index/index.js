const menu = document.querySelector('.menu');
if (menu && window.matchMedia("(max-width: 991px)").matches) {
  let menuButton = menu.querySelector('.menu__button');
  let menuList = menu.querySelector('.menu__list');

  menuButton.addEventListener('click', (e) => {
    let isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menuButton.classList.toggle('menu__button--open');
    menuList.classList.toggle('menu__list--open');
  });
}

const user = document.querySelectorAll('.user');
if (user) {
  const userIsLoggedIn = document.body.classList.contains('logged-in');
  
  if (userIsLoggedIn) {
    user.forEach(item => {
      item.classList.remove('user--logged-out');
      item.classList.add('user--logged');
    });
  } else {
    user.forEach(item => {
      item.classList.remove('user--logged');
      item.classList.add('user--logged-out');
    });
  }
}

const buttonPostAd = document.querySelector('.new-ads__post-adv');
if (buttonPostAd && window.matchMedia("(max-width: 991px)").matches) {
  window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 1200) {
      buttonPostAd.style.display = 'none';
    } else {
      buttonPostAd.style.display = 'inline-flex';
    }
  });
}