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