const buttonFilter = document.querySelector('.search-adverts__filter');
if (buttonFilter && window.matchMedia("(max-width: 767px)").matches) {
  let filter = document.querySelector('.b-adverts__filter');
  let filteClose = filter.querySelector('.filter__close');

  function hideFilter() {
    filter.classList.toggle('open');
    document.documentElement.classList.toggle('stop-scrolling');
    document.body.classList.toggle('stop-scrolling');
  }

  buttonFilter.addEventListener('click', () => hideFilter());
  filteClose.addEventListener('click', () => hideFilter());
}

const range = document.querySelector('.range');
if (range) {
  let trace = range.querySelector('.range__trace');
  let handler = range.querySelector('.range__handler');
  let input = range.querySelector('.range__input');

  handler.addEventListener('touchstart', (e) => {
    let shiftX = e.touches[0].clientX - handler.getBoundingClientRect().left;

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);

    function onTouchMove(e) {
      let newLeft = e.touches[0].clientX - shiftX - range.getBoundingClientRect().left;

      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = range.offsetWidth - handler.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }


      handler.style.left = `${newLeft}px`;
      trace.style.width = `${newLeft}px`;
    }

    function onTouchEnd() {
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchmove', onTouchMove);
    }
  });

  handler.addEventListener('mousedown', (e) => {
    let shiftX = e.clientX - handler.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e) {
      let newLeft = e.clientX - shiftX - range.getBoundingClientRect().left;

      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = range.offsetWidth - handler.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      handler.style.left = `${newLeft}px`;
      trace.style.width = `${newLeft}px`;
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

  });

  handler.ondragstart = function() {
    return false;
  };
}