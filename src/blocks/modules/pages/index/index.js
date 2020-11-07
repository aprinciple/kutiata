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

const buttonPostAd = document.querySelector('.p-home__post-adv');
if (buttonPostAd && window.matchMedia("(max-width: 991px)").matches) {
  let lastScrollTop = 0;

  window.addEventListener('scroll', (e) => {
    let top = window.pageYOffset;
    if (lastScrollTop < top) {
      buttonPostAd.style.display = 'none';
    } else if (lastScrollTop > top) {
      buttonPostAd.style.display = 'inline-flex';
    }

    lastScrollTop = top;
  });
}